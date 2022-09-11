<template>
<div>
  <div class="right-area header-action d-flex align-items-center max-un">
    <button v-if="!$auth.loggedIn" type="button" class="btn-matic" data-bs-toggle="modal"
            data-bs-target="#loginModal">
      Your Wallet
    </button>
    <button v-else type="button" class="btn-matic" v-on:click="userLogout">
      Logout
    </button>
  </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "LoginButton",
  methods: {
    async userLogout() {
      try {
        //await this.$auth.setUser(this.inputWallet)
        await this.$auth.logout()
        this.$nuxt.refresh()
      } catch (err) {
        console.log(err)
      }
    }
  }
})
</script>

<style scoped>

</style>
