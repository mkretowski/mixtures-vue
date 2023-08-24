<template>
  <div>
    <!-- text between -->
    <p v-text="'And the result...'" />

    <!-- mixture effect -->
    <flask-item
      class="flask_big"
      :size="15"
      :amount="100"
      :buttonsVisible="false"
      :color="mixtureEffectFill"
    />

    <p v-text="mixtureEffectFill" />
    <p v-text="`There are ${colorsAmount} colors in your pocket!`" />

    <!-- refresh btn -->
    <button-item
      @click="$emit('refresh')"
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      icon="pi-sync"
    />

    <!-- about btn -->
    <button-item
      @click="showModal"
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      icon="pi-question"
    />

    <!-- share btn -->
    <router-link :to="resultColor"
      ><button-item
        :size="4"
        :movement="-0.5"
        :font-size="1.5"
        icon="pi-share-alt"
    /></router-link>

    <!-- add color btn -->
    <router-link :to="resultColor"
      ><button-item
        :size="4"
        :movement="-0.5"
        :font-size="1.5"
        icon="pi-pencil"
        @click="saveColor"
    /></router-link>

    <!-- about modal -->
    <fade-animation>
      <modal-item v-if="modalVisible" @cancel="hideModal">
        <template v-slot:header> About the app </template>

        <template v-slot:body>
          Mix three colors to create the perfect one!
        </template>

        <template v-slot:footer> <button-item icon="pi-thumbs-up" /> </template>
      </modal-item>
    </fade-animation>
  </div>
</template>

<script>
import ButtonItem from "./shared/ButtonItem.vue";
import FlaskItem from "./shared/FlaskItem.vue";
import ModalItem from "./shared/ModalItem.vue";
import modalMixin from "../mixins/ModalMixin.js";
import FadeAnimation from "./shared/FadeAnimation.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ResultsBox",
  props: {
    mixtures: {
      type: Array,
      required: true,
    },
  },
  mixins: [modalMixin],
  methods: {
    ...mapActions(["addColor"]),
    saveColor() {
      this.addColor(this.mixtures);
    },
  },
  computed: {
    ...mapGetters({ colorsAmount: "RGBColorsLength" }),
    mixtureEffectFill() {
      const [redCol, greenCol, blueCol] = this.mixtures.map((item) =>
        Math.floor(item.amount * 2.5)
      );
      return `rgb(${redCol}, ${greenCol}, ${blueCol})`;
    },
    resultColor() {
      const [redCol, greenCol, blueCol] = this.mixtures.map((item) =>
        Math.floor(item.amount * 2.5)
      );
      return `/color/${redCol}/${greenCol}/${blueCol}`;
    },
  },
  components: {
    ButtonItem,
    FlaskItem,
    ModalItem,
    FadeAnimation,
  },
};
</script>
<style scoped lang="scss">
.flask_big {
  margin: 3rem auto;
}
</style>
