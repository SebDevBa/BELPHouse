<template>
  <section id="utils" class="how-it-works">
    <div class="overlay pt-100 pb-100">
      <div class="container">
        <div class="row justify-content-center pb-25">
          <div class="col-lg-5">
            <div class="section-header text-center">
              <h5 class="sub-title">Grow your Income</h5>
              <h2 class="title">Multi-Features</h2>
              <p>Check out the many options to earn money and ape in!</p>
              <!--span class="pt-25">
              <a href="tournaments.html"><button class="cmn-btn" type="button">BET NOW</button></a>
              </span-->
            </div>
          </div>
        </div>
        <div class="main-content">
          <div class="row justify-content-between align-items-center">
            <div class="col-lg-5">
              <ul class="nav" role="tablist">
                <li class="nav-item" role="presentation">
                  <h5 class="nav-link active" id="sport-tab" data-bs-toggle="tab"
                      data-bs-target="#sport" role="tab" aria-controls="sport" aria-selected="true">
                                        <span class="image-area">
                                            <img src="~/assets/images/howto_4.png" alt="icon">
                                        </span>
                    Personal Dashboard
                  </h5>
                </li>
                <li class="nav-item" role="presentation">
                  <h5 class="nav-link" id="match-tab" data-bs-toggle="tab" data-bs-target="#match"
                      role="tab" aria-controls="match" aria-selected="false">
                                        <span class="image-area">
                                            <img src="~/assets/images/howto_5.png" alt="icon">
                                        </span>
                    Multi-network NFTs
                  </h5>
                </li>
                <li class="nav-item" role="presentation">
                  <h5 class="nav-link" id="team-tab" data-bs-toggle="tab" data-bs-target="#team"
                      role="tab" aria-controls="team" aria-selected="false">
                                        <span class="image-area">
                                            <img src="~/assets/images/howto_6.png" alt="icon">
                                        </span>
                    Betting platform
                  </h5>
                </li>
                <li class="nav-item" role="presentation">
                  <h5 class="nav-link" id="odds-tab" data-bs-toggle="tab" data-bs-target="#odds"
                      role="tab" aria-controls="odds" aria-selected="false">
                                        <span class="image-area">
                                            <img src="~/assets/images/howto_7.png" alt="icon">
                                        </span>
                    Live Tournaments
                  </h5>
                </li>
                <li class="nav-item" role="presentation">
                  <h5 class="nav-link" id="amount-tab" data-bs-toggle="tab" data-bs-target="#amount"
                      role="tab" aria-controls="amount" aria-selected="false">
                                        <span class="image-area">
                                            <img src="~/assets/images/howto_8.png" alt="icon">
                                        </span>
                    Online Mini Game
                  </h5>
                </li>
              </ul>
            </div>
            <div class="col-lg-6">
              <div class="tab-content">
                <div class="tab-pane fade show active" id="sport" role="tabpanel"
                     aria-labelledby="sport-tab">
                  <h4>Personal Dashboard</h4>
                  <div class="img-area">
                    <img src="~/assets/images/feature_1.png" alt="image">
                  </div>
                </div>
                <div class="tab-pane fade" id="match" role="tabpanel" aria-labelledby="match-tab">
                  <h4>Multi-network NFTs</h4>
                  <div class="img-area">
                    <img src="~/assets/images/feature_2.png" alt="image">
                  </div>
                </div>
                <div class="tab-pane fade" id="team" role="tabpanel" aria-labelledby="team-tab">
                  <h4>Betting platform</h4>
                  <div class="img-area">
                    <img src="~/assets/images/feature_3.png" alt="image">
                  </div>
                </div>
                <div class="tab-pane fade" id="odds" role="tabpanel" aria-labelledby="odds-tab">
                  <h4>Live Tournaments</h4>
                  <div class="img-area">
                    <img src="~/assets/images/feature_4.png" alt="image">
                  </div>
                </div>
                <div class="tab-pane fade" id="amount" role="tabpanel" aria-labelledby="amount-tab">
                  <h4>Online Mini Game</h4>
                  <div class="img-area">
                    <img src="~/assets/images/feature_5.png" alt="image">
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
  name: "HowItWorks"
})
</script>

<style scoped>

</style>
