<template>
  <div class="mytour">
    <TournamentsBanner/>
    <TournamentsDashboard/>
    <TournamentsTournamentModal v-show="showTournamentModal" :tournamentInfo="tournamentInfo"
                                @closeTournamentModal="closeTournamentModal"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "index",
  layout: "Default",
  data: () => ({
    showTournamentModal: false,
    tournamentInfo: {
      name: '',
      id: '',
      betPrize: '',
      minBet: 0,
      maxBet: 0,
      rounds: [
        {nftA: null, nftB: null, detailsA: null, detailsB: null}
      ]
    }
  }),
  created() {
    this.$nuxt.$on('openTournamentModal', async  ($event: { openModal: boolean, name: string, id: string, minBet: number, maxBet: number, betPrize: string }) => {
      const config = {
        headers: {'X-Parse-Application-Id': 'kT56sV9bVjoIqBWcxcBXxPMHWVcJ0yqVYJN65ZmW'}
      }
      this.tournamentInfo.rounds = (await this.$axios.$get('https://ybcfygszmqql.usemoralis.com:2053/server/classes/TournamentRounds?where={"tournament":{"__type":"Pointer","className":"Tournaments","objectId":"'+$event.id+'"}}', config)).results
      for (const w of this.tournamentInfo.rounds) {
        console.table(w)
        w.detailsA = (await this.$axios.$get("https://hammerhead-app-jv7kd.ondigitalocean.app/api/erc721/"+w.nftA))
        w.detailsB = (await this.$axios.$get("https://hammerhead-app-jv7kd.ondigitalocean.app/api/erc721/"+w.nftB))
      }
      this.tournamentInfo.id = $event.id
      this.tournamentInfo.name = $event.name
      this.tournamentInfo.minBet = $event.minBet
      this.tournamentInfo.maxBet = $event.maxBet
      this.tournamentInfo.betPrize = $event.betPrize
      this.showTournamentModal = $event.openModal
    })
  },
  methods: {
    closeTournamentModal() {
      this.showTournamentModal = false
      this.tournamentInfo = {
        name: '',
        id: '',
        minBet: 0,
        maxBet: 0,
        betPrize: '',
        rounds: [
          {nftA: null, nftB: null, detailsA: null, detailsB: null}
        ]
      }
    }
  }
})
</script>

<style scoped>

</style>
