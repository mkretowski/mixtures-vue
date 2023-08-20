<template>
  <div class="page">
    <page-title>About</page-title>
    <img
      src="@/assets/logo.png"
      :class="{ 'animate__animated animate__jackInTheBox': animateLogo }"
      @animationend="animateLogo = false"
      @click="animateLogo = true"
    />
  </div>
</template>

<script>
import PageTitle from "../components/shared/PageTitleItem.vue";

export default {
  name: "AboutPage",
  components: {
    PageTitle,
  },
  data: () => ({
    animateLogo: true,
  }),
};
</script>

<style lang="scss" scoped>
.page {
  img {
    width: 100%;
    cursor: pointer;
  }
}
</style>
