<template>
  <section class="faqs-section faqs-page pb-50">
    <div class="overlay">
      <div class="container">
        <div class="tab-content">
          <div class="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="general-tab">
            <div class="row d-flex justify-content-center">
              <div class="col-xl-10">
                <div class="faq-box">
                  <div class="accordion" id="accordionFaqsGeneral">
                    <div class="accordion-item">
                      <h5 class="accordion-header" id="headingGeneralOne">
                        <button class="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseGeneralOne"
                                aria-expanded="false" aria-controls="collapseGeneralOne">
                          Reveal NFT / Verified on BSC marketplaces
                        </button>
                      </h5>
                      <div id="collapseGeneralOne" class="accordion-collapse collapse"
                           aria-labelledby="headingGeneralOne"
                           data-bs-parent="#accordionFaqsGeneral">
                        <div class="accordion-body">
                          <p><a href="https://tofunft.com/collection/baby-elephant-bsc/items" target="_blank">View NFT Collection on TofuNFT</a></p>
                          <p><a href="https://app.refinable.com/collections/babyelephant" target="_blank">View NFT Collection on Refinable</a></p>
                          <p><a href="https://element.market/collections/baby-elephant-bsc" target="_blank">View NFT Collection on Element</a></p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h5 class="accordion-header2" id="headingGeneralTwo">
                        <button class="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseGeneralTwo"
                                aria-expanded="false" aria-controls="collapseGeneralTwo">
                          Reveal NFT / Verified on ETH marketplaces
                        </button>
                      </h5>
                      <div id="collapseGeneralTwo" class="accordion-collapse collapse"
                           aria-labelledby="headingGeneralTwo"
                           data-bs-parent="#accordionFaqsGeneral">
                        <div class="accordion-body">
                          <p><a href="https://opensea.io/collection/belpeth" target="_blank">View NFT Collection on OpenSea</a></p>
                          <p><a href="https://rarible.com/babyelephant/" target="_blank">View NFT Collection on Rarible</a></p>
                          <p><a href="https://nft.coinbase.com/@babyelephant" target="_blank">View NFT Collection on Coinbase</a></p>
                          <p><a href="https://www.element.market/collections/belpeth" target="_blank">View NFT Collection on Element</a></p>
                          <p><a href="https://mintable.app/store/Baby-Elephant-Baby-Elephant-Collection/0xba08e2b795bf0c54ed24bd80267c5165cf454243" target="_blank">View NFT Collection on Mintable (mobile only)</a></p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h5 class="accordion-header3" id="headingGeneralThree">
                        <button class="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseGeneralThree"
                                aria-expanded="false" aria-controls="collapseGeneralThree">
                          Reveal NFT / Verified on Polygon marketplaces
                        </button>
                      </h5>
                      <div id="collapseGeneralThree" class="accordion-collapse collapse"
                           aria-labelledby="headingGeneralThree"
                           data-bs-parent="#accordionFaqsGeneral">
                        <div class="accordion-body">
                          <p><a href="https://opensea.io/collection/belppoly" target="_blank">View NFT Collection on OpenSea</a></p>
                          <p><a href="https://element.market/collections/baby-elephant-matic" target="_blank">View NFT Collection on Element</a></p>
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
  name: "Faq"
})
</script>

<style scoped>

</style>
