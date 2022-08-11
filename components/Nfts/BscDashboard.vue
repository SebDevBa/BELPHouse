<template>
  <section class="tournaments-section">
    <div class="overlay">

      <!-- header-section height >
            <div class="tournaments-heading"></div-->

      <div class="container pt-50">
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-12">
            <div class="tab-content pt-100">
              <div class="tab-pane fade show active" id="binance" role="tabpanel" aria-labelledby="binance-tab">
                <div class="row">
                  <div class="col-12">
                    <!-- Mint BSC start -->
                    <div class="how-works-bethouse pb-100">
                      <div class="overlay">
                        <div class="container pb-100">
                          <div class="row cus-mar">
                            <div class="col-md-6 col-lg-6">
                              <div class="text-center pb-25">
                                <div class="img-area">
                                  <img src="~~/images/blindbox.png" alt="image">
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 col-lg-6">
                              <div class="pricing_box text-center">
                                <div class="pr_title blue_light_bg">
                                  <h3>BUY NFT NOW</h3>
                                  <div class="price_tage">
                                    <h3>DISCOUNT CODE</h3>
                                    <form name="myForm" action="javascript:void(0);">
                                      <input class="promo" type="text" name="code">
                                      <button class="btn-promo" onclick="myFunction()">APPLY</button>
                                    </form>
                                  </div>
                                </div>
                                <div class="pr_content">
                                  <div>
                                    <img src="~~/images/bnb.png" style="max-width: 200px; padding-top: 15px; padding-bottom: 15px;" alt="image">
                                  </div>
                                  <ul class="list_none">
                                    <div class="divider small_divider2"></div>
                                    <li><i class="fa fa-money"></i> Price per NFT: <strong><div id="myDIV">0.32 BNB</div></strong></li>
                                    <li>
                                      <div id="nftbuy">
                                        <nftart-mint-button address="0x32fC3de2344C90cFf0d89A8e904C6744Fb93D067" chain-id="56" />
                                      </div>
                                    </li>
                                    <li><span class="blinking">Use <strong>BDC</strong> code for a 50% discount</span></li>
                                    <!--li class="chiqui">
                                      See your NFT on our <strong>Refinable</strong> Colleciton's page:
                                    </li-->
                                    <li>
                                      <button target="_blank" class="btn-promo" data-bs-toggle="modal"
                                              data-bs-target="#connect">About NFTs</button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Mint BSC end -->
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="solana" role="tabpanel" aria-labelledby="solana-tab">
                <div class="row">
                  <div class="col-12">
                    <!-- Mint SOL start -->
                    <div class="how-works-bethouse pb-100">
                      <div class="overlay">
                        <div class="container pb-100">
                          <div class="row cus-mar">
                            <div class="col-md-6 col-lg-6">
                              <div class="text-center pb-25">
                                <div class="img-area">
                                  <img src="~~/images/blindbox.png" alt="image">
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 col-lg-6">
                              <div class="pricing_box text-center">
                                <div class="pr_title blue_light_bg">
                                  <h3>BUY NFT NOW</h3>
                                </div>
                                <div>
                                  <img src="~~/images/sol.png" style="max-width: 250px; padding-top: 15px; padding-bottom: 15px;" alt="image">
                                </div>
                                <div class="pr_content">
                                  <ul class="list_none">
                                    <div class="divider small_divider2"></div>
                                    <li><i class="fa fa-money"></i> Price per NFT: <strong><div>1 SOL</div></strong></li>
                                    <li>You will soon be able to mint on SOL
                                      <!--div>
                                        <nftart-mint-button address="0xC1Be86cDca05ec8CC6B04a11DA0d543942EB80d7" chain-id="137" />
                                      </div-->
                                    </li>
                                    <li class="chiqui">Make sure you are on the Solana network.</li>
                                    <li></li>
                                    <li>
                                      Reveal your NFT through our <strong>OpenSea</strong> page:
                                    </li>
                                    <li>
                                      <a href="javascript:void(0)" class="btn-promo">Coming Soon</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Mint SOL end -->
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
  name: "BscDashboard",
  head: {
    meta: [
      { name: "nft-art-contract-abi", content: "W3sibmFtZSI6ImJhbGFuY2VPZiIsInR5cGUiOiJmdW5jdGlvbiIsImlucHV0cyI6W3sibmFtZSI6Im93bmVyIiwidHlwZSI6ImFkZHJlc3MiLCJpbnRlcm5hbFR5cGUiOiJhZGRyZXNzIn1dLCJvdXRwdXRzIjpbeyJuYW1lIjoiIiwidHlwZSI6InVpbnQyNTYiLCJpbnRlcm5hbFR5cGUiOiJ1aW50MjU2In1dLCJzdGF0ZU11dGFiaWxpdHkiOiJ2aWV3In0seyJuYW1lIjoiY29zdCIsInR5cGUiOiJmdW5jdGlvbiIsImlucHV0cyI6W10sIm91dHB1dHMiOlt7Im5hbWUiOiIiLCJ0eXBlIjoidWludDI1NiIsImludGVybmFsVHlwZSI6InVpbnQyNTYifV0sInN0YXRlTXV0YWJpbGl0eSI6InZpZXcifSx7Im5hbWUiOiJtYXhQZXJNaW50IiwidHlwZSI6ImZ1bmN0aW9uIiwiaW5wdXRzIjpbXSwib3V0cHV0cyI6W3sibmFtZSI6IiIsInR5cGUiOiJ1aW50MzIiLCJpbnRlcm5hbFR5cGUiOiJ1aW50MzIifV0sInN0YXRlTXV0YWJpbGl0eSI6InZpZXcifSx7Im5hbWUiOiJtYXhQZXJXYWxsZXQiLCJ0eXBlIjoiZnVuY3Rpb24iLCJpbnB1dHMiOltdLCJvdXRwdXRzIjpbeyJuYW1lIjoiIiwidHlwZSI6InVpbnQzMiIsImludGVybmFsVHlwZSI6InVpbnQzMiJ9XSwic3RhdGVNdXRhYmlsaXR5IjoidmlldyJ9LHsibmFtZSI6Im1pbnQiLCJ0eXBlIjoiZnVuY3Rpb24iLCJpbnB1dHMiOlt7Im5hbWUiOiJjb3VudCIsInR5cGUiOiJ1aW50MzIiLCJpbnRlcm5hbFR5cGUiOiJ1aW50MzIifV0sIm91dHB1dHMiOltdLCJzdGF0ZU11dGFiaWxpdHkiOiJwYXlhYmxlIn0seyJuYW1lIjoibmFtZSIsInR5cGUiOiJmdW5jdGlvbiIsImlucHV0cyI6W10sIm91dHB1dHMiOlt7Im5hbWUiOiIiLCJ0eXBlIjoic3RyaW5nIiwiaW50ZXJuYWxUeXBlIjoic3RyaW5nIn1dLCJzdGF0ZU11dGFiaWxpdHkiOiJ2aWV3In0seyJuYW1lIjoib3BlbiIsInR5cGUiOiJmdW5jdGlvbiIsImlucHV0cyI6W10sIm91dHB1dHMiOlt7Im5hbWUiOiIiLCJ0eXBlIjoiYm9vbCIsImludGVybmFsVHlwZSI6ImJvb2wifV0sInN0YXRlTXV0YWJpbGl0eSI6InZpZXcifSx7Im5hbWUiOiJvd25lciIsInR5cGUiOiJmdW5jdGlvbiIsImlucHV0cyI6W10sIm91dHB1dHMiOlt7Im5hbWUiOiIiLCJ0eXBlIjoiYWRkcmVzcyIsImludGVybmFsVHlwZSI6ImFkZHJlc3MifV0sInN0YXRlTXV0YWJpbGl0eSI6InZpZXcifSx7Im5hbWUiOiJzdXBwbHkiLCJ0eXBlIjoiZnVuY3Rpb24iLCJpbnB1dHMiOltdLCJvdXRwdXRzIjpbeyJuYW1lIjoiIiwidHlwZSI6InVpbnQzMiIsImludGVybmFsVHlwZSI6InVpbnQzMiJ9XSwic3RhdGVNdXRhYmlsaXR5IjoidmlldyJ9LHsibmFtZSI6InRvdGFsU3VwcGx5IiwidHlwZSI6ImZ1bmN0aW9uIiwiaW5wdXRzIjpbXSwib3V0cHV0cyI6W3sibmFtZSI6IiIsInR5cGUiOiJ1aW50MzIiLCJpbnRlcm5hbFR5cGUiOiJ1aW50MzIifV0sInN0YXRlTXV0YWJpbGl0eSI6InZpZXcifV0="},
      { name: "nft-art-contract-presale", content: "W10="}
    ],
  }
})
</script>

<style scoped>

</style>
