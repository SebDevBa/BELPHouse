<template>
  <section class="tournaments-section dashboard-content">
    <div class="overlay">

      <!-- header-section height >
            <div class="tournaments-heading"></div-->

      <div class="container pt-50">
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-12">
            <div class="d-flex justify-content-center">
              <ul class="nav glow justify-content-center" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="cmn-btn" v-on:click="tab='tournaments'">BATTLES</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="cmn-btn" v-on:click="tab='history'">HISTORY</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="cmn-btn" v-on:click="tab='heroes'">MY HEROES</button>
                </li>
              </ul>
            </div>
            <!--div class="cards-img">
               <img src="/images/baby_cup.png" alt="icon">
            </div-->
            <div class="tab-content">
              <TournamentsTab v-if="tab === 'tournaments'"/>
              <TournamentsHistoryTab v-if="tab === 'history'" />
              <TournamentsHeroesTab v-if="tab === 'heroes'" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
// const Moralis = require('moralis-v1/node');
export default Vue.extend({
  name: "Dashboard",
  data: () => ({
    tab: 'tournaments',
  }),
  async created() {

  }
})
</script>

<style scoped>

</style>
