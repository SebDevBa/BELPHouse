<template>
  <div>
    <div class="tab-pane fade show active" id="current" role="tabpanel" aria-labelledby="current-tab">
      <div class="row">
        <div class="col-12">
          <div class="single-item glow" v-for="tournament in tournaments">
            <div class="left-item">
              <div class="logo-item">
                <img src="/images/tournament_1.png" alt="icon">
              </div>
              <div class="mid-area">
                <h3>{{ tournament.name }}</h3>
                <ul>
                  <li v-if="!!tournament.date.iso">
                    <span><i class="far fa-calendar-alt"></i></span>
                    {{ new Date(tournament.date.iso).toLocaleString() }}
                  </li>
                  <li>
                    <span><i class="fas fa-users"></i></span>
                    {{ tournament.participants }} PARTICIPANTS
                  </li>
                  <li>
                    <span><i class="fas fa-info"></i></span>
                    {{ tournament.details }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="last-item">
              <h5><img src="/images/fav.png" alt="icon" style="height: 35px"> Prize</h5>
              <h4>{{ tournament.betPrize }}%</h4>
              <span class="btn-border">
                <button class="cmn-btn" data-bs-toggle="modal"
                   data-bs-target="#tournaments" @click="$nuxt.$emit('openTournamentModal', {openModal: true, name: tournament.name, id: tournament.objectId})">Place Bets</button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-60">
        <!--      <div class="col-lg-12 d-flex justify-content-center">-->
        <!--        <nav aria-label="Page navigation" class="d-flex justify-content-center">-->
        <!--          <ul class="pagination justify-content-center align-items-center pb-20">-->
        <!--            <li class="page-item">-->
        <!--              <a class="page-btn previous glow" href="javascript:void(0)"-->
        <!--                 aria-label="Previous">-->
        <!--                <img src="/images/icon/arrow-left.png" alt="icon">-->
        <!--              </a>-->
        <!--            </li>-->
        <!--            <li class="page-item"><a class="page-link xlr glow" href="javascript:void(0)">1</a>-->
        <!--            </li>-->
        <!--            <li class="page-item"><a class="page-link xlr active glow"-->
        <!--                                     href="javascript:void(0)">2</a></li>-->
        <!--            <li class="page-item"><a class="page-link xlr glow" href="javascript:void(0)">3</a>-->
        <!--            </li>-->
        <!--            <li class="page-item"><a class="page-link xlr glow" href="javascript:void(0)">4</a>-->
        <!--            </li>-->
        <!--            <li class="page-item">-->
        <!--              <a class="page-btn next glow" href="javascript:void(0)" aria-label="Next">-->
        <!--                <img src="/images/icon/arrow-right.png" alt="icon">-->
        <!--              </a>-->
        <!--            </li>-->
        <!--          </ul>-->
        <!--        </nav>-->
        <!--      </div>-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TournamentsTab",
  data: () => ({
    tournaments: [],
    showModal: false
  }),
  async fetch() {
    const config = {
      headers: {'X-Parse-Application-Id': 'kT56sV9bVjoIqBWcxcBXxPMHWVcJ0yqVYJN65ZmW'}
    }
    this.tournaments = (await this.$axios.$get('https://ybcfygszmqql.usemoralis.com:2053/server/classes/Tournaments', config)).results
  },
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 5000) {
      this.$fetch()
    }
  },
  methods: {
    openModal(tournamentId: string) {
      this.$store.state["Tournaments/tournamentId"] = tournamentId
    }
  }
})
</script>

<style scoped>

</style>
