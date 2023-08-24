<template>
  <div
    class="flask animate__animated"
    :style="flaskStyle"
    :class="{ animate__shakeY: isAnimated }"
    @animationend="isAnimated = false"
  >
    <!-- decrement btn -->
    <button-item
      v-if="buttonsVisible"
      class="flask__btn flask__btn--left"
      icon="pi-arrow-down"
      @click="decrement"
    />

    <div :class="fillClasses" :style="fillStyle" />

    <!-- increment btn -->
    <button-item
      v-if="buttonsVisible"
      class="flask__btn flask__btn--right"
      icon="pi-arrow-up"
      :movement="-0.5"
      @click="increment"
    />

    <!-- remove btn -->
    <button-item
      v-if="removeBtnVisible"
      class="flask__btn flask__btn--center"
      icon="pi-trash"
      :movement="-0.5"
      @click="remove"
    />
  </div>
</template>

<script>
import ButtonItem from "./ButtonItem.vue";

export default {
  name: "FlaskItem",
  props: {
    size: {
      type: Number,
      default: 10,
    },
    amount: {
      type: Number,
      default: 50,
    },
    color: {
      type: String,
    },
    variant: {
      type: String,
      validator: (value) => {
        return ["red", "green", "blue"].includes(value);
      },
    },
    buttonsVisible: {
      type: Boolean,
      default: true,
    },
    removeBtnVisible: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    isAnimated: false,
  }),
  methods: {
    increment() {
      this.isAnimated = true;
      this.$emit("increment");
    },
    decrement() {
      this.isAnimated = true;
      this.$emit("decrement");
    },
    remove() {
      this.isAnimated = true;
      this.$emit("remove");
    },
  },
  computed: {
    flaskStyle() {
      return {
        height: `${this.size}rem`,
        width: `${this.size}rem`,
      };
    },

    fillClasses() {
      return ["flask__fill", this.variant && `flask__fill--${this.variant}`];
    },

    fillStyle() {
      const style = { height: this.amount + "%" };

      if (!this.variant) {
        style.backgroundColor = this.color || "#fff";
      }

      return style;
    },
  },
  components: {
    ButtonItem,
  },
};
</script>

<style lang="scss">
.flask {
  display: block;
  border: 10px solid #ddd;
  border-radius: 50%;
  margin: 2rem 1rem;
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  box-shadow: 0 20px 40px 0 rgba(107, 154, 212, 0.3);

  &__fill {
    width: 100%;
    height: 100%;
    transition: 0.2s;

    &--red {
      background-color: #ff7d3b;
      background-image: linear-gradient(189deg, #ff7d3b 0%, #ff2525 74%);
    }

    &--green {
      background-color: #2e561c;
      background-image: linear-gradient(0deg, #2e561c 0%, #2af598 100%);
    }

    &--blue {
      background-color: #25b6bf;
      background-image: linear-gradient(183deg, #25b6bf 0%, #0070a2 100%);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #9a9a9a;
    background-image: linear-gradient(0deg, #9a9a9a 0%, #e8fdff 100%);
    opacity: 0.2;
  }

  &__btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &--right {
      right: 1rem;
    }

    &--left {
      left: 1rem;
    }
    &--center {
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
