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
                  <button class="cmn-btn active" id="current-tab" data-bs-toggle="tab" data-bs-target="#current"
                          type="button" role="tab" aria-controls="current"
                          aria-selected="false">BATTLES</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="cmn-btn" id="history-tab" data-bs-toggle="tab" data-bs-target="#history"
                          type="button" role="tab" aria-controls="history" aria-selected="false">HISTORY</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="cmn-btn" id="myheroes-tab" data-bs-toggle="tab" data-bs-target="#myheroes"
                          type="button" role="tab" aria-controls="myheroes" aria-selected="false">MY HEROES</button>
                </li>
              </ul>
            </div>
            <!--div class="cards-img">
               <img src="~~/images/baby_cup.png" alt="icon">
            </div-->
            <div class="tab-content">
              <div class="tab-pane fade show active" id="current" role="tabpanel" aria-labelledby="current-tab">
                <div class="row">
                  <div class="col-12">
                    <div class="single-item glow">
                      <div class="left-item">
                        <div class="logo-item">
                          <img src="~~/images/tournament_1.png" alt="icon">
                        </div>
                        <div class="mid-area">
                          <h3>Tournament 1</h3>
                          <ul>
                            <li>
                              <span><i class="far fa-calendar-alt"></i></span>
                              FEB 15 13:30 UTC
                            </li>
                            <li>
                              <span><i class="fas fa-users"></i></span>
                              36 PARTICIPANTS
                            </li>
                            <li>
                              <span><i class="fas fa-info"></i></span>
                              Lengendary + Demi
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="last-item">
                        <h5><img src="~~/images/fav.png" alt="icon" style="height: 35px"> Prize</h5>
                        <h4>25%</h4>
                        <span class="btn-border">
                                            <a href="" class="cmn-btn" data-bs-toggle="modal" data-bs-target="#tournaments">Place Bets</a>
                                        </span>
                      </div>
                    </div>
                    <div class="single-item glow">
                      <div class="left-item">
                        <div class="logo-item">
                          <img src="~~/images/tournament_2.png" alt="icon">
                        </div>
                        <div class="mid-area">
                          <h3>Tournament 2</h3>
                          <ul>
                            <li>
                              <span><i class="far fa-calendar-alt"></i></span>
                              FEB 27 23:00 UTC
                            </li>
                            <li>
                              <span><i class="fas fa-users"></i></span>
                              48 PARTICIPANTS
                            </li>
                            <li>
                              <span><i class="fas fa-info"></i></span>
                              Magical + Mythical
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="last-item">
                        <h5><img src="~~/images/fav.png" alt="icon" style="height: 35px"> Prize</h5>
                        <h4>25%</h4>
                        <span class="btn-border">
                                            <a href="" class="cmn-btn" data-bs-toggle="modal" data-bs-target="#tournaments">Place Bets</a>
                                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mt-60">
                  <div class="col-lg-12 d-flex justify-content-center">
                    <nav aria-label="Page navigation" class="d-flex justify-content-center">
                      <ul class="pagination justify-content-center align-items-center pb-20">
                        <li class="page-item">
                          <a class="page-btn previous glow" href="javascript:void(0)"
                             aria-label="Previous">
                            <img src="~~/images/icon/arrow-left.png" alt="icon">
                          </a>
                        </li>
                        <li class="page-item"><a class="page-link xlr glow" href="javascript:void(0)">1</a>
                        </li>
                        <li class="page-item"><a class="page-link xlr active glow"
                                                 href="javascript:void(0)">2</a></li>
                        <li class="page-item"><a class="page-link xlr glow" href="javascript:void(0)">3</a>
                        </li>
                        <li class="page-item"><a class="page-link xlr glow" href="javascript:void(0)">4</a>
                        </li>
                        <li class="page-item">
                          <a class="page-btn next glow" href="javascript:void(0)" aria-label="Next">
                            <img src="~~/images/icon/arrow-right.png" alt="icon">
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="history" role="tabpanel" aria-labelledby="history-tab">
                <div class="filter-section mb-60 glow">
                  <div class="section-text text-center">
                    <h5>Search in History</h5>
                  </div>
                  <form action="#">
                    <div class="row">
                      <div class="col-xl-3 col-lg-6">
                        <div class="input-area">
                          <img src="~~/images/icon/search-icon.png" alt="icon">
                          <input type="text" placeholder="Search by name">
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-6">
                        <div class="single-input">
                          <select>
                            <option>Filter by Rarity</option>
                            <option value="2">Magical</option>
                            <option value="3">Mythical</option>
                            <option value="4">Epic</option>
                            <option value="3">Legendary</option>
                            <option value="4">Demi-God</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-6">
                        <div class="single-input">
                          <select>
                            <option>Order by date</option>
                            <option value="1">Newest</option>
                            <option value="2">Oldest</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-xl-3 col-lg-6">
                        <div class="input-area">
                          <img src="~~/images/icon/date-icon.png" alt="icon">
                          <input type="text" id="dateSelect" placeholder="Select Date">
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="table-responsive glow">
                  <table class="table">
                    <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Name</th>
                      <th scope="col">Winner</th>
                      <th scope="col">Rarity</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td><button class="cmn-btn view" type="button" data-bs-toggle="modal" data-bs-target="javascript:void(0)">View</button>Feb 20</td>
                      <td>Tournament 1</td>
                      <td>46510</td>
                      <td>Magical</td>
                    </tr>
                    <tr>
                      <td><button class="cmn-btn view" type="button" data-bs-toggle="modal" data-bs-target="javascript:void(0)">View</button>Feb 27</td>
                      <td>Tournament 2</td>
                      <td>46510</td>
                      <td>Epic</td>
                    </tr>
                    <tr>
                      <td><button class="cmn-btn view" type="button" data-bs-toggle="modal" data-bs-target="javascript:void(0)">View</button>Mar 05</td>
                      <td>Tournament 3</td>
                      <td>46510</td>
                      <td>Mithical</td>
                    </tr>
                    <tr>
                      <td><button class="cmn-btn view" type="button" data-bs-toggle="modal" data-bs-target="javascript:void(0)">View</button>Mar 13</td>
                      <td>Tournament 4</td>
                      <td>46510</td>
                      <td>Demi</td>
                    </tr>
                    <tr>
                      <td><button class="cmn-btn view" type="button" data-bs-toggle="modal" data-bs-target="javascript:void(0)">View</button>Mar 21</td>
                      <td>Tournament 5</td>
                      <td>46510</td>
                      <td>Legendary</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div class="row mt-60">
                  <div class="col-lg-12 d-flex justify-content-center">
                    <nav aria-label="Page navigation" class="d-flex justify-content-center">
                      <ul class="pagination justify-content-center align-items-center pb-20">
                        <li class="page-item">
                          <a class="page-btn previous glow" href="javascript:void(0)"
                             aria-label="Previous">
                            <img src="~~/images/icon/arrow-left.png" alt="icon">
                          </a>
                        </li>
                        <li class="page-item"><a class="page-link xlr glow" href="javascript:void(0)">1</a>
                        </li>
                        <li class="page-item"><a class="page-link xlr active glow"
                                                 href="javascript:void(0)">2</a></li>
                        <li class="page-item"><a class="page-link xlr glow" href="javascript:void(0)">3</a>
                        </li>
                        <li class="page-item"><a class="page-link xlr glow" href="javascript:void(0)">4</a>
                        </li>
                        <li class="page-item">
                          <a class="page-btn next glow" href="javascript:void(0)" aria-label="Next">
                            <img src="~~/images/icon/arrow-right.png" alt="icon">
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="myheroes" role="tabpanel" aria-labelledby="myheroes-tab">
                <div class="filter-section mb-60 glow">
                  <div class="section-text text-center">
                    <h5 class="pb-20">Search my Heroes</h5>
                    <p>If you hold HHNFT heroes from HodlerHeroes NFT P2E, you can fetch them here by just pasting your wallet address.</p>
                  </div>
                  <div class="col-lg-10 offset-lg-1">
                    <div class="input-area">
                      <img src="~~/images/icon/search-icon.png" alt="icon">
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
                    <h5 class="txglow-1">Oops we aren't able to get your heroes now, try again later.</h5>
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
<!--                            <img src="~~/images/icon/arrow-left.png" alt="icon">-->
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
<!--                            <img src="~~/images/icon/arrow-right.png" alt="icon">-->
<!--                          </a>-->
<!--                        </li>-->
<!--                      </ul>-->
<!--                    </nav>-->
<!--                  </div>-->
<!--                </div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Dashboard",
  data: () => ({
    heroes: [],
    wallet: "",
  }),
  async fetch() {
    this.heroes = await this.$axios.$get('https://hammerhead-app-jv7kd.ondigitalocean.app/api/Capsule/Wallet/'+this.wallet+'/open')
  },
  fetchKey: 'id',
  fetchOnServer: false,
})
</script>

<style scoped>

</style>
