<template>
  <div class="page">
    <page-title>Color</page-title>
    <p v-text="'You\'ve picked a great color!'" />
    <!-- mixture effect -->
    <flask-item
      class="flask_big"
      :size="15"
      :amount="100"
      :buttonsVisible="false"
      :color="`rgb(${$route.params.red},${$route.params.green},
      ${$route.params.blue})`"
    />

    <div class="flex gap-2 justify-content-center align-items-center">
      <i class="pi pi-share-alt"></i>
      <InputText class="input" :value="colorAddress" />
    </div>
  </div>
</template>

<script>
import ColorMixin from "@/components/ColorMixin";
import PageTitle from "@/components/shared/PageTitleItem";
import FlaskItem from "../components/shared/FlaskItem.vue";
import InputText from "primevue/inputtext";

export default {
  name: "ColorPage",
  components: {
    ColorMixin,
    PageTitle,
    FlaskItem,
    InputText,
  },
  created() {
    const { red, green, blue } = this.$route.params;

    if (!red || !green || !blue) {
      this.$router.push("/");
    }
  },
  computed: {
    colorAddress() {
      return `${window.location.origin}/${this.$route.params.red}/${this.$route.params.green}/${this.$route.params.blue}`;
    },
  },
};
</script>
<style scoped lang="scss">
.flask_big {
  margin: 3rem auto;
}
.input {
  width: 260px;
}
</style>
