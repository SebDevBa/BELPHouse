<template>
  <div class="betpopmodal bet-this-game">
    <div class="modal fade" id="historydetails" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="container">
          <div class="modal-content">
            <div class="row justify-content-center">
              <div class="col-xxl-10 col-lg-11 col-md-12">
                <div class="single-area">
                  <div class="modal-header justify-content-center">
                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                  </div>
                  <div class="head-area d-flex align-items-center">
                    <p/><span><i class="fa fa-trophy bg-icon"></i></span>Tournament 1 <span><i class="fa fa-khanda bg-icon"></i></span> Round 1
                  </div>
                  <div class="main-content escrow-bets-fee">
                    <div class="team-single">
                      <div class="single-item">
                        <div class="row">
                          <div class="col-xxl-5 col-lg-5 col-sm-12">
                            <img src="assets/images/fighter_1.png" alt="icon">
                          </div>
                          <div class="col-xxl-7 col-lg-7 col-sm-12">
                            <h4>GAIA</h4>
                            <h3><span class="fee">DEMI-GOD</span></h3>
                            <span class="mdr"><i class="fa fa-portrait"></i> 45321</span>
                            <p><span class="mdr"><b>P</b> 700</span>
                              <span class="mdr"><b>L</b> 10</span></p>
                          </div>
                        </div>
                        <p><span class="mdr"><b>Won</b> 500</span>
                          <span class="mdr"><b>Lost</b> 300</span></p>
                      </div>
                    </div>
                    <div class="mid-area text-center">
                      <h3>VS</h3>
                      <div class="lost d-flex align-items-center justify-content-center">
                        <h4>
                          <span>YOU LOST</span>
                        </h4>
                      </div>
                      <!--<div class="won d-flex align-items-center justify-content-center">
                                            <h4>
                                               <span>YOU WON</span>
                                            </h4>
                                        </div>-->
                      <h6><span><i class="fa fa-calendar-alt"></i></span>
                        Feb 20 - 20:25 UTC</h6>
                    </div>
                    <div class="team-single">
                      <div class="single-item">
                        <div class="row reverse">
                          <div class="col-xxl-7 col-lg-7 col-sm-12">
                            <h4>ZHORN</h4>
                            <h3><span class="fee">LEGENDARY</span></h3>
                            <span class="mdr"><i class="fa fa-portrait"></i> 45321</span>
                            <p><span class="mdr"><b>P</b> 610</span>
                              <span class="mdr"><b>L</b> 20</span></p>
                          </div>
                          <div class="col-xxl-5 col-lg-5 col-sm-12">
                            <img src="assets/images/fighter_2.png" alt="icon">
                          </div>
                        </div>
                        <p><span class="mdr"><b>Won</b> 500</span>
                          <span class="mdr"><b>Lost</b> 300</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="bottom-item">
                    <button type="button" class="cmn-btn firstTeam text-dark" data-bs-dismiss="modal"
                            aria-label="Close" data-bs-toggle="modal"
                            data-bs-target="#">YOUR BET: GAIA</button>
                    <span class="lastTeam"><img src="assets/images/fav.png" alt="icon" style="height: 25px"> Prize: $BELP 34530</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BetHistory"
})
</script>

<style scoped>

</style>
