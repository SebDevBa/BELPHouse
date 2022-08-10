<template>
  <div class="log-reg">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="modal fade" id="connect">
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
                          <img src="assets/images/wallet.png" alt="icon" style="height: 150px">
                          <div class="bettitle">
                            <h4 class="title">Check your Balance</h4>
                          </div>
                        </div>
                        <div class="form-area">
                          <form action="#">
                            <div class="row">
                              <div class="col-12">
                                <div class="single-input">
                                  <label for="logwallet">Copy and Paste your address</label>
                                  <input type="text" id="logwallet"
                                         placeholder="wallet address here">
                                </div>
                                <div class="single-input">
                                  <h6>We will NEVER ask you to connect your wallet</h6>
                                </div>
                              </div>
                              <span class="btn-border w-100">
                                                                <button class="cmn-btn w-100 text-dark">SUBMIT</button>
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
  name: "ConnectModal"
})
</script>

<style scoped>

</style>
