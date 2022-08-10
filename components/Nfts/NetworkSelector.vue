<template>
  <div>
    <section class="how-it-works tournaments-section">
      <div class="overlay pt-50 pb-50">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-5">
              <div class="section-header text-center">
                <h5 class="sub-title">Mint your BELP NFT</h5>
                <h2 class="title">Choose Network</h2>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <ul class="nav justify-content-center" role="tablist">
              <li class="nav-item" role="presentation">
                <button @click="network = 'bsc'" class="cmn-btn">BSC</button>
              </li>
              <li class="nav-item" role="presentation">
                <button @click="network = 'eth'" class="cmn-btn">ETH</button>
              </li>
              <li class="nav-item" role="presentation">
                <button @click="network = 'matic'" class="cmn-btn">MATIC</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="cmn-btn" id="solana-tab" data-bs-toggle="tab" data-bs-target="#solana"
                        type="button" role="tab" aria-controls="solana" aria-selected="false">SOL
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <NftsBscDashboard v-if="network==='bsc'" />
    <NftsEthDashboard v-if="network==='eth'" />
    <NftsMaticDashboard v-if="network==='matic'" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NetworkSelector",
  data: () => ({
    network: 'bsc'
  })
})
</script>

<style scoped>

</style>
