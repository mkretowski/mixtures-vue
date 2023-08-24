<template>
  <ul class="mixtures">
    <flask-item
      :key="index"
      v-for="(color, index) in colors"
      :color="color"
      :buttonsVisible="false"
      :amount="100"
      :removeBtnVisible="true"
      @remove="remove(index)"
    />
  </ul>
</template>

<script>
import FlaskItem from "./shared/FlaskItem.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "MyColorsList",
  computed: mapGetters({ colors: "RGBColors" }),
  methods: {
    ...mapMutations({ removeColor: "REMOVE_COLOR" }),
    remove(index) {
      this.removeColor(index);
    },
  },
  components: { FlaskItem },
};
</script>

<style scoped lang="scss">
.mixtures {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
}
</style>
