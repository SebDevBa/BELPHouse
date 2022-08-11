<template>
  <section class="dashboard-content">
    <div class="overlay">

      <!-- header-section height -->
      <!--div class="dashboard-heading"></div-->

      <div class="container pt-50">
        <div class="row justify-content-center">
          <div class="col-xl-10">
            <div class="tab-content">
              <div class="tab-pane fade show active">
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-sm-6 col-xs-6">
                    <div class="imgoverlay">
                      <img src="~~/images/chips_BELP.png" alt="icon">
                    </div>
                    <div class="balance glow">

                      <div class="single-item">
                        <h5>100</h5>
                        <p>Total Bets</p>
                      </div>
                      <div class="bottom-area d-flex align-items-center justify-content-between">
                        <a href="javascript:void(0)" class="mdr withdraw-btn"><i class="fas fa-thumbs-up"></i> 54</a>
                        <a href="javascript:void(0)" class="mdr deposit-btn"><i class="fas fa-thumbs-down"></i> 46</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-sm-6 col-xs-6">
                    <div class="token text-center">
                      <img src="~~/images/BELP_token.png" alt="icon">
                    </div>
                    <div class="balance glow text-center">
                      <div class="single-item">
                        <div class="row">
                          <div class="col-6">
                            <h5>5135.00</h5>
                            <p>Profits</p>
                          </div>
                          <div class="col-6">
                            <h5>180700.00</h5>
                            <p>Balance</p>
                          </div>
                        </div>
                      </div>
                      <div class="bottom-area d-flex align-items-center justify-content-between">
                        <a href="javascript:void(0)" class="mdr withdraw-btn plus">Withdraw</a>
                        <a href="javascript:void(0)" class="mdr deposit-btn plus">Buy BELP</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 pb-20">
                    <div class="betstable glow">
                      <h5 class="title">
                        <ul class="nav" role="tablist"><li><button class="cmn-btn view2 active" id="dashboard-tab" data-bs-toggle="tab"
                                                                   data-bs-target="#current" type="button" role="tab" aria-controls="dashboard"
                                                                   aria-selected="true">Current Bets</button></li><li><button class="cmn-btn view3" id="my-bets-tab" data-bs-toggle="tab"
                                                                                                                              data-bs-target="#history" type="button" role="tab" aria-controls="my-bets"
                                                                                                                              aria-selected="false">Bets History</button></li>
                          <!-- <button class="cmn-btn view4" type="button" data-bs-toggle="modal" data-bs-target="#topheroes">Top Heroes</button> -->
                        </ul></h5>
                      <div class="tab-content">
                        <div class="tab-pane fade show active" id="current" role="tabpanel"  aria-labelledby="dashboard-tab">
                          <div class="table-responsive rounded10">
                            <table class="table">
                              <thead>
                              <tr>
                                <th scope="col">Fight Date</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Your Bet</th>
                                <th scope="col">Prize</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <td><button class="cmn-btn view" type="button" data-bs-toggle="modal" data-bs-target="#betdetails">View</button>Feb 20 - 20:25 UTC</td>
                                <td><img src="~~/images/BELP.png"
                                         alt="icon"> 50500</td>
                                <td>45321</td>
                                <td>
                                  <img src="~~/images/BELP_2.png"
                                       alt="icon">
                                  80000
                                </td>
                              </tr>
                              <tr>
                                <td><button class="cmn-btn view" type="button" data-bs-toggle="modal" data-bs-target="#betdetails">View</button>Feb 21 - 13:05 UTC</td>
                                <td><img src="~~/images/BELP.png"
                                         alt="icon"> 50500</td>
                                <td>45321</td>
                                <td>
                                  <img src="~~/images/BELP_2.png"
                                       alt="icon">
                                  80000
                                </td>
                              </tr>
                              <tr>
                                <td><button class="cmn-btn view" type="button" data-bs-toggle="modal" data-bs-target="#betdetails">View</button>Feb 22 - 10:00 UTC</td>
                                <td><img src="~~/images/BELP.png"
                                         alt="icon"> 50500</td>
                                <td>45321</td>
                                <td>
                                  <img src="~~/images/BELP_2.png"
                                       alt="icon">
                                  80000
                                </td>
                              </tr>
                              <tr>
                                <td><button class="cmn-btn view" type="button" data-bs-toggle="modal" data-bs-target="#betdetails">View</button>Feb 22 - 15:00 UTC</td>
                                <td><img src="~~/images/BELP.png"
                                         alt="icon"> 50500</td>
                                <td>45321</td>
                                <td>
                                  <img src="~~/images/BELP_2.png"
                                       alt="icon">
                                  80000
                                </td>
                              </tr>
                              <tr>
                                <td><button class="cmn-btn view" type="button" data-bs-toggle="modal" data-bs-target="#betdetails">View</button>Feb 25 - 11:00 UTC</td>
                                <td><img src="~~/images/BELP.png"
                                         alt="icon"> 50500</td>
                                <td>45321</td>
                                <td>
                                  <img src="~~/images/BELP_2.png"
                                       alt="icon">
                                  80000
                                </td>
                              </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div class="tab-pane fade" id="history" role="tabpanel"  aria-labelledby="my-bets-tab">
                          <div class="table-responsive">
                            <table class="table">
                              <thead>
                              <tr>
                                <th scope="col">Fight Date</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Your Bet</th>
                                <th scope="col">Result</th>
                                <th scope="col">Prize</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <td><button class="cmn-btn view_his" type="button" data-bs-toggle="modal" data-bs-target="#historydetails">View</button>Feb 20 - 20:25 UTC</td>
                                <td><img src="~~/images/BELP.png"
                                         alt="icon"> 4400</td>
                                <td>45321</td>
                                <td><i class="fas fa-thumbs-down deposit-btn" /></td>
                                <td>
                                  <img src="~~/images/BELP_2.png"
                                       alt="icon">
                                  70000
                                </td>
                              </tr>
                              <tr>
                                <td><button class="cmn-btn view_his" type="button" data-bs-toggle="modal" data-bs-target="#historydetails">View</button>Feb 21 - 13:05 UTC</td>
                                <td><img src="~~/images/BELP.png"
                                         alt="icon"> 50500</td>
                                <td>45321</td>
                                <td><i class="fas fa-thumbs-down deposit-btn" /></td>
                                <td>
                                  <img src="~~/images/BELP_2.png"
                                       alt="icon">
                                  80000
                                </td>
                              </tr>
                              <tr>
                                <td><button class="cmn-btn view_his" type="button" data-bs-toggle="modal" data-bs-target="#historydetails">View</button>Feb 22 - 10:00 UTC</td>
                                <td><img src="~~/images/BELP.png"
                                         alt="icon"> 50500</td>
                                <td>45321</td>
                                <td><i class="fas fa-thumbs-up withdraw-btn" /></td>
                                <td>
                                  <img src="~~/images/BELP_2.png"
                                       alt="icon">
                                  80000
                                </td>
                              </tr>
                              <tr>
                                <td><button class="cmn-btn view_his" type="button" data-bs-toggle="modal" data-bs-target="#historydetails">View</button>Feb 22 - 15:00 UTC</td>
                                <td><img src="~~/images/BELP.png"
                                         alt="icon"> 50500</td>
                                <td>45321</td>
                                <td><i class="fas fa-thumbs-down deposit-btn" /></td>
                                <td>
                                  <img src="~~/images/BELP_2.png"
                                       alt="icon">
                                  80000
                                </td>
                              </tr>
                              <tr>
                                <td><button class="cmn-btn view_his" type="button" data-bs-toggle="modal" data-bs-target="#historydetails">View</button>Feb 25 - 11:00 UTC</td>
                                <td><img src="/images/BELP.png"
                                         alt="icon"> 50500</td>
                                <td>45321</td>
                                <td><i class="fas fa-thumbs-up withdraw-btn" /></td>
                                <td>
                                  <img src="/images/BELP_2.png"
                                       alt="icon">
                                  80000
                                </td>
                              </tr>
                              </tbody>
                            </table>
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
