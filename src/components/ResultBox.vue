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

    <!-- about modal -->
    <modal-item v-if="modalVisible" @cancel="hideModal">
      <template v-slot:header> About the app </template>

      <template v-slot:body>
        Mix three colors to create the perfect one!
      </template>

      <template v-slot:footer> <button-item icon="pi-thumbs-up" /> </template>
    </modal-item>
  </div>
</template>

<script>
import ButtonItem from "./shared/ButtonItem.vue";
import FlaskItem from "./shared/FlaskItem.vue";
import ModalItem from "./shared/ModalItem.vue";
import modalMixin from "../mixins/ModalMixin.js";

export default {
  name: "ResultsBox",
  props: {
    mixtures: {
      type: Array,
      required: true,
    },
  },
  mixins: [modalMixin],
  computed: {
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
  },
};
</script>
<style scoped lang="scss">
.flask_big {
  margin: 3rem auto;
}
</style>
