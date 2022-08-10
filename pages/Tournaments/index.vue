<template>
  <div class="mytour">
    <TournamentsBanner />
    <TournamentsDashboard />
    <TournamentsTournamentModal />
    <TournamentsLiveTournamentModal />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "index",
  layout: "Default"
})
</script>

<style scoped>

</style>
