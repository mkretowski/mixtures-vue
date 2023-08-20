<template>
  <div id="app">
    <div class="container">
      <!-- menu -->
      <app-menu />
      <!-- header -->
      <app-header />
      <!-- router view -->
      <router-view>
        <template v-slot="{ Component }">
          <slide-fade-animation class="animate__faster">
            <component :is="Component" />
          </slide-fade-animation>
        </template>
      </router-view>
    </div>
  </div>
</template>

<script>
import "./styles/global.scss";
import AppHeader from "./components/AppHeader";
import ColorMixin from "./components/ColorMixin";
import AppMenu from "./components/AppMenu.vue";
import SlideFadeAnimation from "./components/shared/SlideFadeAnimation.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    ColorMixin,
    AppMenu,
    SlideFadeAnimation,
  },
};
</script>

<style lang="scss">
.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
}
</style>
