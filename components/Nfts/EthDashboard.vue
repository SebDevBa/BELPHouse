<template>
  <section class="tournaments-section">
    <div class="overlay">

      <!-- header-section height >
            <div class="tournaments-heading"></div-->

      <div class="container pt-50">
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-12">
            <div class="tab-content pt-100">
              <div class="tab-pane fade show active" id="ethereum" role="tabpanel" aria-labelledby="ethereum-tab">
                <div class="row">
                  <div class="col-12">
                    <!-- Mint ETH start -->
                    <div class="how-works-bethouse pb-100">
                      <div class="overlay">
                        <div class="container pb-100">
                          <div class="row cus-mar">
                            <div class="col-md-6 col-lg-6">
                              <div class="text-center pb-25">
                                <div class="img-area">
                                  <img src="/images/blindbox.png" alt="image">
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 col-lg-6">
                              <div class="pricing_box text-center">
                                <div class="pr_title blue_light_bg">
                                  <h3>BUY NFT NOW</h3>
                                </div>
                                <div>
                                  <img src="/images/eth.png" style="max-width: 250px; padding-top: 15px; padding-bottom: 15px;" alt="image">
                                </div>
                                <div class="pr_content">
                                  <ul class="list_none">
                                    <div class="divider small_divider2"></div>
                                    <li><i class="fa fa-money"></i> Price per NFT: <strong><div>0.05 ETH</div></strong></li>
                                    <li>
                                      <div>
                                        <nftart-mint-button address="0xBA08e2b795bf0c54ED24bd80267C5165cF454243" chain-id="1" />
                                      </div>
                                    </li>
                                    <li class="chiqui">Make sure you are on the ETH network.</li>
                                    <li></li>
                                    <li>
                                      Read more info about the <strong>utilities</strong> of your BELP NFTs:
                                    </li>
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
                    <!-- Mint ETH end -->
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
                                  <img src="/images/blindbox.png" alt="image">
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6 col-lg-6">
                              <div class="pricing_box text-center">
                                <div class="pr_title blue_light_bg">
                                  <h3>BUY NFT NOW</h3>
                                </div>
                                <div>
                                  <img src="/images/sol.png" style="max-width: 250px; padding-top: 15px; padding-bottom: 15px;" alt="image">
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
  name: "EthDashboard",
  head: {
    meta: [
      { name: "nft-art-contract-abi", content: "W3sibmFtZSI6ImFmZmlsaWF0ZXNPZiIsInR5cGUiOiJmdW5jdGlvbiIsImlucHV0cyI6W3sibmFtZSI6Im93bmVyIiwidHlwZSI6ImFkZHJlc3MiLCJpbnRlcm5hbFR5cGUiOiJhZGRyZXNzIn1dLCJvdXRwdXRzIjpbeyJuYW1lIjoiIiwidHlwZSI6InVpbnQyNTYiLCJpbnRlcm5hbFR5cGUiOiJ1aW50MjU2In1dLCJzdGF0ZU11dGFiaWxpdHkiOiJ2aWV3In0seyJuYW1lIjoiYmFsYW5jZU9mIiwidHlwZSI6ImZ1bmN0aW9uIiwiaW5wdXRzIjpbeyJuYW1lIjoib3duZXIiLCJ0eXBlIjoiYWRkcmVzcyIsImludGVybmFsVHlwZSI6ImFkZHJlc3MifV0sIm91dHB1dHMiOlt7Im5hbWUiOiIiLCJ0eXBlIjoidWludDI1NiIsImludGVybmFsVHlwZSI6InVpbnQyNTYifV0sInN0YXRlTXV0YWJpbGl0eSI6InZpZXcifSx7Im5hbWUiOiJjb3N0IiwidHlwZSI6ImZ1bmN0aW9uIiwiaW5wdXRzIjpbXSwib3V0cHV0cyI6W3sibmFtZSI6IiIsInR5cGUiOiJ1aW50MjU2IiwiaW50ZXJuYWxUeXBlIjoidWludDI1NiJ9XSwic3RhdGVNdXRhYmlsaXR5IjoidmlldyJ9LHsibmFtZSI6Im1heFBlck1pbnQiLCJ0eXBlIjoiZnVuY3Rpb24iLCJpbnB1dHMiOltdLCJvdXRwdXRzIjpbeyJuYW1lIjoiIiwidHlwZSI6InVpbnQzMiIsImludGVybmFsVHlwZSI6InVpbnQzMiJ9XSwic3RhdGVNdXRhYmlsaXR5IjoidmlldyJ9LHsibmFtZSI6Im1heFBlcldhbGxldCIsInR5cGUiOiJmdW5jdGlvbiIsImlucHV0cyI6W10sIm91dHB1dHMiOlt7Im5hbWUiOiIiLCJ0eXBlIjoidWludDMyIiwiaW50ZXJuYWxUeXBlIjoidWludDMyIn1dLCJzdGF0ZU11dGFiaWxpdHkiOiJ2aWV3In0seyJuYW1lIjoibWludCIsInR5cGUiOiJmdW5jdGlvbiIsImlucHV0cyI6W3sibmFtZSI6ImNvdW50IiwidHlwZSI6InVpbnQyNTYiLCJpbnRlcm5hbFR5cGUiOiJ1aW50MjU2In1dLCJvdXRwdXRzIjpbXSwic3RhdGVNdXRhYmlsaXR5IjoicGF5YWJsZSJ9LHsibmFtZSI6Im5hbWUiLCJ0eXBlIjoiZnVuY3Rpb24iLCJpbnB1dHMiOltdLCJvdXRwdXRzIjpbeyJuYW1lIjoiIiwidHlwZSI6InN0cmluZyIsImludGVybmFsVHlwZSI6InN0cmluZyJ9XSwic3RhdGVNdXRhYmlsaXR5IjoidmlldyJ9LHsibmFtZSI6Im9wZW4iLCJ0eXBlIjoiZnVuY3Rpb24iLCJpbnB1dHMiOltdLCJvdXRwdXRzIjpbeyJuYW1lIjoiIiwidHlwZSI6ImJvb2wiLCJpbnRlcm5hbFR5cGUiOiJib29sIn1dLCJzdGF0ZU11dGFiaWxpdHkiOiJ2aWV3In0seyJuYW1lIjoib3duZXIiLCJ0eXBlIjoiZnVuY3Rpb24iLCJpbnB1dHMiOltdLCJvdXRwdXRzIjpbeyJuYW1lIjoiIiwidHlwZSI6ImFkZHJlc3MiLCJpbnRlcm5hbFR5cGUiOiJhZGRyZXNzIn1dLCJzdGF0ZU11dGFiaWxpdHkiOiJ2aWV3In0seyJuYW1lIjoicHJlc2FsZU1pbnQiLCJ0eXBlIjoiZnVuY3Rpb24iLCJpbnB1dHMiOlt7Im5hbWUiOiJjb3VudCIsInR5cGUiOiJ1aW50MzIiLCJpbnRlcm5hbFR5cGUiOiJ1aW50MzIifSx7Im5hbWUiOiJwcm9vZiIsInR5cGUiOiJieXRlczMyW10iLCJpbnRlcm5hbFR5cGUiOiJieXRlczMyW10ifV0sIm91dHB1dHMiOltdLCJzdGF0ZU11dGFiaWxpdHkiOiJwYXlhYmxlIn0seyJuYW1lIjoicHJlc2FsZU9wZW4iLCJ0eXBlIjoiZnVuY3Rpb24iLCJpbnB1dHMiOltdLCJvdXRwdXRzIjpbeyJuYW1lIjoiIiwidHlwZSI6ImJvb2wiLCJpbnRlcm5hbFR5cGUiOiJib29sIn1dLCJzdGF0ZU11dGFiaWxpdHkiOiJ2aWV3In0seyJuYW1lIjoicmVmZXJyYWxDYXAiLCJ0eXBlIjoiZnVuY3Rpb24iLCJpbnB1dHMiOltdLCJvdXRwdXRzIjpbeyJuYW1lIjoiIiwidHlwZSI6InVpbnQyNTYiLCJpbnRlcm5hbFR5cGUiOiJ1aW50MjU2In1dLCJzdGF0ZU11dGFiaWxpdHkiOiJ2aWV3In0seyJuYW1lIjoicmVmZXJyYWxNaW50IiwidHlwZSI6ImZ1bmN0aW9uIiwiaW5wdXRzIjpbeyJuYW1lIjoiY291bnQiLCJ0eXBlIjoidWludDMyIiwiaW50ZXJuYWxUeXBlIjoidWludDMyIn0seyJuYW1lIjoicmVmZXJyZXIiLCJ0eXBlIjoiYWRkcmVzcyIsImludGVybmFsVHlwZSI6ImFkZHJlc3MifV0sIm91dHB1dHMiOltdLCJzdGF0ZU11dGFiaWxpdHkiOiJwYXlhYmxlIn0seyJuYW1lIjoicmVmZXJyYWxPcGVuIiwidHlwZSI6ImZ1bmN0aW9uIiwiaW5wdXRzIjpbXSwib3V0cHV0cyI6W3sibmFtZSI6IiIsInR5cGUiOiJib29sIiwiaW50ZXJuYWxUeXBlIjoiYm9vbCJ9XSwic3RhdGVNdXRhYmlsaXR5IjoidmlldyJ9LHsibmFtZSI6InJldmVhbGVkIiwidHlwZSI6ImZ1bmN0aW9uIiwiaW5wdXRzIjpbXSwib3V0cHV0cyI6W3sibmFtZSI6IiIsInR5cGUiOiJib29sIiwiaW50ZXJuYWxUeXBlIjoiYm9vbCJ9XSwic3RhdGVNdXRhYmlsaXR5IjoidmlldyJ9LHsibmFtZSI6InN1cHBseSIsInR5cGUiOiJmdW5jdGlvbiIsImlucHV0cyI6W10sIm91dHB1dHMiOlt7Im5hbWUiOiIiLCJ0eXBlIjoidWludDI1NiIsImludGVybmFsVHlwZSI6InVpbnQyNTYifV0sInN0YXRlTXV0YWJpbGl0eSI6InZpZXcifSx7Im5hbWUiOiJ0b3RhbFN1cHBseSIsInR5cGUiOiJmdW5jdGlvbiIsImlucHV0cyI6W10sIm91dHB1dHMiOlt7Im5hbWUiOiIiLCJ0eXBlIjoidWludDI1NiIsImludGVybmFsVHlwZSI6InVpbnQyNTYifV0sInN0YXRlTXV0YWJpbGl0eSI6InZpZXcifV0="},
      { name: "nft-art-contract-presale", content: "W10="}
    ],
  }
})
</script>

<style scoped>

</style>
