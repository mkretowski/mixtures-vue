<template>
  <button :style="btnStyles" class="btn">
    <!-- icon -->
    <span v-if="icon" :class="`${iconSet} ${icon}`" />

    <!-- text -->
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonItem",
  props: {
    icon: {
      type: String,
    },
    iconSet: {
      type: String,
      default: "pi",
    },
    text: {
      type: String,
    },
    size: {
      type: Number,
      default: 2,
    },
    fontSize: {
      type: Number,
      default: 1,
    },
    movement: {
      type: Number,
      default: 0.5,
    },
  },
  computed: {
    btnStyles() {
      return {
        width: `${this.size}rem`,
        height: `${this.size}rem`,
        fontSize: `${this.fontSize}rem`,
        "--movement": `${this.movement}rem`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  background-image: linear-gradient(0deg, $color-btn 0%, #e8fdff 100%);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 20px 40px 0 rgba(107, 154, 212, 0.1);
  transition: 0.3s;
  outline: none;
  font-size: 1.5rem;
  color: #637892;
  &:hover {
    margin-top: var(--movement);
  }
}
</style>
