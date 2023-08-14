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
    <!-- refresh btn -->
    <button-item
      @click="$emit('refresh')"
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      icon="fa-sync"
    />

    <!-- about btn -->
    <button-item
      @click="showModal"
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      icon="fa-question"
    />
    <!-- about modal -->
    <modal-item v-if="modalVisible" @cancel="closeModal">
      <template v-slot:header> About the app </template>

      <template v-slot:body>
        Mix three colors to create the perfect one!
      </template>

      <template v-slot:footer> <button-item icon="fa-thumbs-up" /> </template>
    </modal-item>
  </div>
</template>

<script>
import ButtonItem from "./shared/ButtonItem.vue";
import FlaskItem from "./shared/FlaskItem.vue";
import ModalItem from "./shared/ModalItem.vue";

export default {
  name: "ResultsBox",
  props: {
    mixtures: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    modalVisible: false,
  }),
  computed: {
    mixtureEffectFill() {
      const [redCol, greenCol, blueCol] = this.mixtures.map((item) =>
        Math.floor(item.amount * 2.5)
      );
      return `rgb(${redCol}, ${greenCol}, ${blueCol})`;
    },
  },
  methods: {
    showModal() {
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
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
