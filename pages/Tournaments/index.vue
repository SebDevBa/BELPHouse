<template>
  <div class="mytour">
    <TournamentsBanner/>
    <TournamentsDashboard/>
    <TournamentsTournamentModal v-show="showTournamentModal" :tournamentInfo="tournamentInfo"
                                @closeTournamentModal="showTournamentModal = false"/>
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
      rounds: []
    }
  }),
  created() {
    this.$nuxt.$on('openTournamentModal', async  ($event: { openModal: boolean, name: string, id: string }) => {
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
      this.showTournamentModal = $event.openModal
    })
  }
})
</script>

<style scoped>

</style>
