<template>
  <section class="dashboard-content">
    <div class="overlay">

      <!-- header-section height -->
      <!--div class="dashboard-heading"></div-->

      <div class="container pt-100 pb-100">
        <div class="row justify-content-center">
          <div class="col-xl-20">
            <div class="tab-content">
              <div class="row justify-content-center pb-25">
                <div class="belpbal col-lg-8">
                  <div class="section-header text-center">
                    <h5 class="sub-title">Your Wallet</h5>
                    <h2 class="title">Balance</h2>
                    <p>Connect your wallet from the top menu</p>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade show active">
                <div class="row justify-content-center">
                  <div class="row pb-50">
                    <div class="col-xl-4 col-lg-4 pb-25">
                      <div class="single-info glow">
                        <img src="/images/icon/icon1.png" alt="icon">
                        <div class="text-area">
                          <h4>0</h4>
                          <p class="mdr">Your BELP</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 pb-25">
                      <div class="single-info glow">
                        <img src="/images/icon/icon2.png" alt="icon">
                        <div class="text-area">
                          <h4>0</h4>
                          <p class="mdr">Your NFTs</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4">
                      <div class="single-info glow">
                        <img src="/images/icon/icon3.png" alt="icon">
                        <div class="text-area">
                          <h4>SOON</h4>
                          <p class="mdr">Bet Rate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-center pt-50 pb-25">
                    <div class="belpbal col-lg-8">
                      <div class="section-header text-center">
                        <h5 class="sub-title">Your Passive</h5>
                        <h2 class="title">Rewards</h2>
                        <p><i class="fa fa-info-circle"></i> Your <strong>Baby Doge Coin</strong> rewards are distributed automatically depending on volume and your <strong>WBNB rewards</strong> and <strong>bet prizes</strong> are distributed manually on a 7-day basis.</p>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-4 col-lg-4 pb-25">
                      <div class="single-info glow">
                        <img src="/images/icon/icon4.png" alt="icon">
                        <div class="text-area">
                          <h5>AFTER LAUNCH</h5>
                          <p class="mdr">Baby Doge</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 pb-25">
                      <div class="single-info glow">
                        <img src="/images/icon/icon5.png" alt="icon">
                        <div class="text-area">
                          <h5>AFTER LAUNCH</h5>
                          <p class="mdr">WBNB (Current Week)</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 pb-25">
                      <div class="single-info glow">
                        <img src="/images/icon/icon6.png" alt="icon">
                        <div class="text-area">
                          <h5>AFTER LAUNCH</h5>
                          <p class="mdr">Bet Income</p>
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
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Dashboard"
})
</script>

<style scoped>

</style>
