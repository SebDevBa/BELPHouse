<template>
  <header class="header-section">
    <div class="overlay">
      <div class="container">
        <div class="row d-flex header-area">
          <nav class="navbar navbar-expand-lg navbar-light">
            <img src="/images/logo.png" class="logo" style="max-width: 250px;" alt="logo">
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbar-content">
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbar-content">
              <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NuxtLink to="/" class="nav-link">Home</NuxtLink>
<!--                  <a class="nav-link" aria-current="page" href="/">Home</a>-->
                </li>
                <li class="nav-item">
                  <NuxtLink to="/MyBelp" class="nav-link">My BELP</NuxtLink>
<!--                  <a class="nav-link" aria-current="page" href="/mybelp">My BELP</a>-->
                </li>
                <li class="nav-item">
                  <NuxtLink to="/Nfts" class="nav-link">NFT</NuxtLink>
<!--                  <a class="nav-link" aria-current="page" href="/Nfts">NFT</a>-->
                </li>
<!--                <li class="nav-item">-->
<!--                  <NuxtLink to="/MyBets" class="nav-link">Bets</NuxtLink>-->
<!--&lt;!&ndash;                  <a class="nav-link" aria-current="page" href="/mybets">Bets</a>&ndash;&gt;-->
<!--                </li>-->
                <li class="nav-item">
                  <NuxtLink to="/Tournaments" class="nav-link">Tournaments</NuxtLink>
<!--                  <a class="nav-link" aria-current="page" href="tournaments.html">Tournaments</a>-->
                </li>
              </ul>
              <div class="right-area header-action d-flex align-items-center max-un">
                <button type="button" class="btn-matic" data-bs-toggle="modal"
                        data-bs-target="#presaleModal">
                  PRE-SALE
                </button>
              </div>
<!--              <StructureLoginButton />-->
            </div>
          </nav>
          <!--span class="text-center text-white">NO Need to connect your wallet</span-->
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'Header'
})
</script>

<style scoped>

</style>
