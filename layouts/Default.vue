<template>
  <div>
  <!-- start preloader -->
  <div class="preloader" id="preloader"></div>
  <!-- end preloader -->

  <!-- Scroll To Top Start-->
  <a href="javascript:void(0)" class="scrollToTop"><i class="fas fa-angle-double-up"></i></a>
  <!-- Scroll To Top End -->

  <!-- header-section start -->
  <StructureHeader />
  <!-- header-section end -->

  <!-- Content Start -->
    <Nuxt />
  <!-- Content End -->
  <!-- Footer Area Start -->
    <StructureSocialArea />
    <StructureFooter />
  <!-- Footer Area End -->

    <!-- Modal CONNECT Start -->
      <SctructureConnectModal />
    <!-- Modal CONNECT end -->

    <!-- Modal CONNECT Start -->
    <div class="betpopmodal bet-this-game">
      <div class="modal fade" id="presaleModal">
        <div class="modal-dialog modal-dialog-centered">
          <div class="container">
            <div class="modal-content">
              <div class="row justify-content-center">
                <div class="col-xxl-10 col-lg-11 col-md-12">
                  <img src="~/assets/images/launch_banner.jpg" alt="launch">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal CONNECT end -->

  <!--==================================================================-->
  <script src="/js/jquery.min.js"></script>
  <script src="/js/jquery-ui.js"></script>
  <script src="/js/bootstrap.min.js"></script>
  <script src="/js/fontawesome.js"></script>
  <script src="/js/plugin/slick.js"></script>
  <script src="/js/plugin/jquery.nice-select.min.js"></script>
  <script src="/js/plugin/jquery.downCount.js"></script>
  <script src="/js/plugin/counter.js"></script>
  <script src="/js/plugin/waypoint.min.js"></script>
  <script src="/js/plugin/jquery.magnific-popup.min.js"></script>
  <script src="/js/plugin/wow.min.js"></script>
  <script src="/js/plugin/plugin.js"></script>
  <script src="/js/main.js"></script>

    <script type="module" src="https://cdn.nft-generator.art/js-sdk/v1.4.0/nft-art-generator-sdk/nft-art-generator-sdk.esm.js"></script>
    <script nomodule src="https://cdn.nft-generator.art/js-sdk/v1.4.0/nft-art-generator-sdk/nft-art-generator-sdk.js"></script>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Default',

})
</script>

<style scoped>

</style>
