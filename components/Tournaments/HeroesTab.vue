<template>
  <div class="tab-pane fade show active" id="myheroes" role="tabpanel" aria-labelledby="myheroes-tab">
    <div class="filter-section mb-60 glow">
      <div class="section-text text-center">
        <h5 class="pb-20">Search my Heroes</h5>
        <p>If you hold HHNFT heroes from HodlerHeroes NFT P2E, you can fetch them here by just pasting your wallet address.</p>
      </div>
      <div class="col-lg-10 offset-lg-1">
        <div class="input-area">
          <img src="/images/icon/search-icon.png" alt="icon">
          <input v-model="wallet" type="text" placeholder="Paste wallet address">
          <button class="btn btn-warning" type="button" v-on:click="$fetch">
            Search
          </button>
        </div>
      </div>
    </div>

    <!-- HEROES BOXES -->
    <div class="row ahero" v-if="$fetchState.pending">
      <div class="col-12 pad-lr zoom">
        <h5 class="txglow-1">Catching your heroes around the world!</h5>
      </div>
    </div>
    <div class="row ahero" v-else-if="$fetchState.error">
      <div class="col-12 pad-lr zoom">
<!--        <h5 class="txglow-1" v-if="wallet === ''">Please paste your wallet in the field above, and press search!</h5>-->
        <h5 class="txglow-1" v-if="wallet !== ''">Oops we aren't able to get your heroes now, try again later.</h5>
      </div>
    </div>
    <div class="row ahero" v-else>
      <div class="col-12 pad-lr zoom" v-if="heroes.length === 0">
        <h5 class="txglow-1">We not found any hero in this wallet, please try using another wallet.</h5>
      </div>
      <div class="col-xl-3 col-lg-4 col-sm-6 pad-lr zoom" v-for="hero of this.heroes">
        <div :class="'hero2 glow-'+hero.hero.rarityId">
          <h4>{{ hero.hero.nickname.name }}</h4>
          <h5 class="txglow-1" v-if="hero.hero.rarityId === 1">MAGICAL</h5>
          <h5 class="txglow-2" v-else-if="hero.hero.rarityId === 2">MYTHICAL</h5>
          <h5 class="txglow-3" v-else-if="hero.hero.rarityId === 3">EPIC</h5>
          <h5 class="txglow-4" v-else-if="hero.hero.rarityId === 4">LEGENDARY</h5>
          <h5 class="txglow-5" v-else-if="hero.hero.rarityId === 5">DEMI-GOD</h5>
          <img :src="'/images/'+hero.hero.nickname.name.toLowerCase()+'_p.png'" alt="icon">
          <div class="balance">
            <div class="single-item">
              <div class="row">
                <span class="mdr"><i class="fa fa-portrait"></i> {{ hero.nftId }}</span>
                <p><span class="mdr5"><b>P</b> {{hero.hero.totalPoints}}</span>
                  <span class="mdr5"><b>L</b> {{hero.hero.lucky}}</span></p>
              </div>
            </div>
            <div class="bottom-area d-flex align-items-center justify-content-between">
              <a href="javascript:void(0)" class="mdr5 win-btn"><b>WON</b> {{hero.hero.totalVictories}}</a>
              <a href="javascript:void(0)" class="mdr5 loss-btn"><b>LOST</b> {{hero.hero.totalDefeats}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- HEROES BOXES -->

    <!--                <div class="row mt-60">-->
    <!--                  <div class="col-lg-12 d-flex justify-content-center">-->
    <!--                    <nav aria-label="Page navigation" class="d-flex justify-content-center">-->
    <!--                      <ul class="pagination justify-content-center align-items-center pb-20">-->
    <!--                        <li class="page-item">-->
    <!--                          <a class="page-btn previous glow" href="javascript:void(0)"-->
    <!--                             aria-label="Previous">-->
    <!--                            <img src="/images/icon/arrow-left.png" alt="icon">-->
    <!--                          </a>-->
    <!--                        </li>-->
    <!--                        <li class="page-item"><a class="page-link xlr glow" href="javascript:void(0)">1</a>-->
    <!--                        </li>-->
    <!--                        <li class="page-item"><a class="page-link xlr active glow"-->
    <!--                                                 href="javascript:void(0)">2</a></li>-->
    <!--                        <li class="page-item"><a class="page-link xlr glow" href="javascript:void(0)">3</a>-->
    <!--                        </li>-->
    <!--                        <li class="page-item"><a class="page-link xlr glow" href="javascript:void(0)">4</a>-->
    <!--                        </li>-->
    <!--                        <li class="page-item">-->
    <!--                          <a class="page-btn next glow" href="javascript:void(0)" aria-label="Next">-->
    <!--                            <img src="/images/icon/arrow-right.png" alt="icon">-->
    <!--                          </a>-->
    <!--                        </li>-->
    <!--                      </ul>-->
    <!--                    </nav>-->
    <!--                  </div>-->
    <!--                </div>-->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "HeroesTab",
  data: () => ({
    tab: 'tournaments',
    heroes: [],
    wallet: "",
    tournaments: [],
  }),
  async fetch() {
    this.heroes = await this.$axios.$get('https://hammerhead-app-jv7kd.ondigitalocean.app/api/Capsule/Wallet/'+this.wallet+'/open')
  },
  fetchKey: 'id',
  fetchOnServer: false,
  async beforeCreate() {
    const serverUrl = 'https://ybcfygszmqql.usemoralis.com:2053/server'
    const appId = 'kT56sV9bVjoIqBWcxcBXxPMHWVcJ0yqVYJN65ZmW'
    // await Moralis.start({ serverUrl, appId })
  },
})
</script>

<style scoped>

</style>
