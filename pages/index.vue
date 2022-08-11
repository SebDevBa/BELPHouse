<template>
  <div>
    <!-- Banner Section start -->
    <HomeBanner />
    <!-- Banner Section end -->

    <!-- 3-Steps start -->
    <HomeThreeSteps />
    <!-- 3-Steps end -->

    <!-- How it Works start -->
    <HomeHowItWorks />
    <!-- How it Works end -->

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  layout: 'Default',
  head: {
    title: "BELP House - Baby Elephant Utilities"
  }
})
</script>
