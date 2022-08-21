<template>
  <div>
    <div class="betpopmodal bet-this-game">
      <div class="modal fade" id="tournaments" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="container">
            <div class="modal-content">
              <div class="row justify-content-center">
                <div class="col-xxl-10 col-lg-11 col-md-12">
                  <div class="single-area" v-for="round in tournamentInfo.rounds">
                    <div class="modal-header justify-content-center" v-if="round.roundNumber === 1">
                      <button @click="$emit('closeTournamentModal')" type="button" class="btn-close" data-bs-dismiss="modal"
                              aria-label="Close"></button>
                    </div>
                    <div class="head-area d-flex align-items-center">
                      <p><span><i class="fa fa-trophy bg-icon"></i></span>{{tournamentInfo.name}}<span><i class="fa fa-khanda bg-icon"></i></span> Round {{round.roundNumber}}</p>
                    </div>
                    <div class="main-content escrow-bets-fee">
                      <div class="team-single">
                        <div class="single-item" v-if="!!round.detailsA">
                          <div class="row" >
                            <div class="col-xxl-5 col-lg-5 col-sm-12">
                              <img :src="'/images/versus/'+round.detailsA.nickname.name.toLowerCase()+'.png'" alt="icon">
                            </div>
                            <div class="col-xxl-7 col-lg-7 col-sm-12">
                              <h4>{{round.detailsA.nickname.name}}</h4>
                              <h3>
                                <span class="fee" v-if="round.detailsA.rarityId === 1">MAGICAL</span>
                                <span class="fee" v-if="round.detailsA.rarityId === 2">MYTHICAL</span>
                                <span class="fee" v-if="round.detailsA.rarityId === 3">EPIC</span>
                                <span class="fee" v-if="round.detailsA.rarityId === 4">LEGENDARY</span>
                                <span class="fee" v-if="round.detailsA.rarityId === 5">DEMI-GOD</span>
                              </h3>
                              <span class="mdr"><i class="fa fa-portrait"></i> {{ round.nftA }}</span>
                              <p><span class="mdr"><b>P</b> {{round.detailsA.totalPoints}}</span>
                                <span class="mdr"><b>L</b> {{round.detailsA.lucky}}</span></p>
                            </div>
                          </div>
                          <p><span class="mdr"><b>Won</b> {{round.detailsA.totalVictories}}</span>
                            <span class="mdr"><b>Lost</b> {{round.detailsA.totalDefeats}}</span></p>
                        </div>
                      </div>
                      <div class="mid-area text-center">
                        <h3>VS</h3>
                        <div v-if="false" class="countdown d-flex align-items-center justify-content-center">
                          <h4>
                            <span class="hours">00</span><span class="ref">h</span><span
                            class="seperator">:</span>
                          </h4>
                          <h4>
                            <span class="minutes">00</span><span class="ref">m</span><span
                            class="seperator">:</span>
                          </h4>
                          <h4>
                            <span class="seconds">00</span><span class="ref">s</span>
                          </h4>
                        </div>
                        <h6 v-if="!!round.fightDate"><span><i class="fa fa-calendar-alt"></i></span>
                          {{ new Date(round.fightDate.iso).toLocaleString() }}</h6>
                      </div>
                      <div class="team-single" v-if="!!round.detailsB">
                        <div class="single-item">
                          <div class="row reverse">
                            <div class="col-xxl-7 col-lg-7 col-sm-12">
                              <h4>{{round.detailsB.nickname.name}}</h4>
                              <h3>
                                <span class="fee" v-if="round.detailsB.rarityId === 1">MAGICAL</span>
                                <span class="fee" v-if="round.detailsB.rarityId === 2">MYTHICAL</span>
                                <span class="fee" v-if="round.detailsB.rarityId === 3">EPIC</span>
                                <span class="fee" v-if="round.detailsB.rarityId === 4">LEGENDARY</span>
                                <span class="fee" v-if="round.detailsB.rarityId === 5">DEMI-GOD</span>
                              </h3>
                              <span class="mdr"><i class="fa fa-portrait"></i> {{round.nftB}}</span>
                              <p><span class="mdr"><b>P</b> {{round.detailsB.totalPoints}}</span>
                                <span class="mdr"><b>L</b> {{round.detailsB.lucky}}</span></p>
                            </div>
                            <div class="col-xxl-5 col-lg-5 col-sm-12">
                              <img style="transform: scaleX(-1); -webkit-transform: scaleX(-1);" :src="'/images/versus/'+round.detailsB.nickname.name.toLowerCase()+'.png'" alt="icon">
                            </div>
                          </div>
                          <p><span class="mdr"><b>Won</b> {{round.detailsB.totalVictories}}</span>
                            <span class="mdr"><b>Lost</b> {{round.detailsB.totalDefeats}}</span></p>
                        </div>
                      </div>
                    </div>
                    <div class="bottom-item" v-if="!!round.detailsA && !!round.detailsB">
                      <button type="button" class="cmn-btn firstTeam text-dark" data-bs-dismiss="modal"
                              aria-label="Close" data-bs-toggle="modal"
                              data-bs-target="#betpopup" @click="betChoose.tournamentId = tournamentInfo.id; betChoose.hero = round.detailsA">{{round.detailsA.nickname.name}} WINS</button>
                      <span class="draw">30% <img src="/images/fav.png" alt="icon" style="height: 25px"> 25%</span>
                      <button type="button" class="cmn-btn lastTeam text-dark" data-bs-dismiss="modal"
                              aria-label="Close" data-bs-toggle="modal"
                              data-bs-target="#betpopup" @click="betChoose.tournamentId = tournamentInfo.id; betChoose.hero = round.detailsB">{{round.detailsB.nickname.name}} WINS</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="log-reg">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="modal fade" id="betpopup">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header justify-content-center">
                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                  </div>
                  <div class="tab-content">
                    <div class="tab-pane fade show active" id="loginArea" role="tabpanel"
                         aria-labelledby="loginArea-tab">
                      <div class="login-reg-content">
                        <div class="modal-body" v-if="!!betChoose.hero">
                          <div class="head-area">
                            <img src="/images/glasselephant.png" alt="icon" style="height: 150px">
                            <div class="bettitle">
                              <h6 class="title">Place a Bet using</h6>
                              <div class="social-link d-flex align-items-center">
                                <h3><img src="/images/fav.png" alt="icon" style="height: 35px"> $BELP</h3>
                              </div>
                            </div>
                          </div>
                          <div class="form-area">
                            <form action="#">
                              <div class="row">
                                <div class="col-12">
                                  <div class="single-input">
                                    <label for="logemail">Paste TX HASH of your bet</label>
                                    <input type="text" id="logemail"
                                           placeholder="TX HASH here" v-model="betChoose.transactionHash">
                                    <label for="logemail">Min bet <strong>{{tournamentInfo.minBet}}</strong> / Max bet <strong>{{ tournamentInfo.maxBet }}</strong></label>
                                  </div>
<!--                                  <div class="single-input">-->
<!--                                    <h6>25% of your bet</h6>-->
<!--                                  </div>-->
                                </div>
                                <div class="col-12">
                                  <div class="remember-me" v-if="false">
                                    <label
                                      class="checkbox-single d-flex align-items-center">
                                                                        <span class="left-area">
                                                                            <span class="checkbox-area d-flex">
                                                                                <input type="checkbox"
                                                                                       checked="checked">
                                                                                <span class="checkmark"></span>
                                                                            </span>
                                                                            <span
                                                                              class="item-title d-flex align-items-center">
                                                                                <span>Add as Favourite Hero</span>
                                                                            </span>
                                                                        </span>
                                    </label>
                                    <a href="javascript:void(0)"><img src="/images/favourite.png"
                                                                      alt="favourite"> Favourite</a>
                                  </div>
                                </div>
                                <span class="btn-border w-100">
                                                                <a class="cmn-btn w-100 text-dark" @click="makeBet" v-if="!!betChoose.hero.nickname" >BET FOR {{betChoose.hero.nickname.name}} ID: {{betChoose.hero.capsule.nftId}}</a>
                                                            </span>
                              </div>
                            </form>
                            <div class="bottom-area text-center">
                              <p>Need more $BELP? <a href="javascript:void(0)" class="reg-btn">Buy Now</a></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--    <TournamentsLiveTournamentModal />-->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "TournamentModal",
  data: () => ({
    betChoose: {
      tournamentId: '',
      hero: {
        capsule: {nftId: null}
      },
      transactionHash: '',
    }
  }),
  props: [
    "tournamentInfo"
  ],
  methods: {
    async makeBet(){
      const config = {
        headers: {'X-Parse-Application-Id': 'kT56sV9bVjoIqBWcxcBXxPMHWVcJ0yqVYJN65ZmW'}
      }
      const model = {
        tournamentId: this.betChoose.tournamentId,
        heroId: this.betChoose.hero.capsule.nftId,
        transactionHash: this.betChoose.transactionHash
      }
      await this.$axios.post('https://ybcfygszmqql.usemoralis.com:2053/server/classes/TournamentBet',model,config)
      alert('Bet made with success.')
    }
  }
})
</script>

<style scoped>

</style>
