<template>
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
                      <div class="modal-body">
                        <div class="head-area">
                          <img src="~/assets/images/glasselephant.png" alt="icon" style="height: 150px">
                          <div class="bettitle">
                            <h6 class="title">Place a Bet using</h6>
                            <div class="social-link d-flex align-items-center">
                              <h3><img src="~/assets/images/fav.png" alt="icon" style="height: 35px"> $BELP</h3>
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
                                         placeholder="TX HASH here">
                                </div>
                                <div class="single-input">
                                  <h6>25% of your bet</h6>
                                </div>
                              </div>
                              <div class="col-12">
                                <div class="remember-me">
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
                                  <a href="javascript:void(0)"><img src="~/assets/images/favourite.png"
                                                                    alt="favourite"> Favourite</a>
                                </div>
                              </div>
                              <span class="btn-border w-100">
                                                                <button class="cmn-btn w-100 text-dark" onclick="javascript:void(0)">BET FOR GAIA ID: 35585</button>
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
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "LiveTournamentModal"
})
</script>

<style scoped>

</style>
