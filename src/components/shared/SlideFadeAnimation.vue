<template>
  <transition
    mode="out-in"
    name="custom-transition"
    enter-active-class="animate__animated animate__slideInLeft"
    leave-active-class="animate__animated animate__slideOutLeft"
  >
    <slot />
  </transition>
</template>

<script>
export default {
  name: "SlideFadeAnimation",
};
</script>
