<template>
  <div class="mybets">
    <MyBetsBanner/>
    <MyBetsDashboard />
    <MyBetsCurrentBets />
    <MyBetsBetHistory />
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "index",
  layout: 'Default'
})
</script>

<style scoped>

</style>
