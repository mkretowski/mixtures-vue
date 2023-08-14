<template>
  <div class="card relative z-2">
    <Menubar class="menu__bar" :model="items" />
  </div>
</template>

<script>
import Menubar from "primevue/menubar";
export default {
  name: "AppMenu",
  data: () => ({
    items: [
      {
        label: "Home",
        icon: "pi pi-fw pi-home",
        to: "/",
      },
      {
        label: "Mixin",
        icon: "pi pi-fw pi-sync",
        to: "/mixin",
      },
      {
        label: "About",
        icon: "pi pi-fw pi-info-circle",
        to: "about",
      },
    ],
  }),
  components: { Menubar },
};
</script>
<style>
.menu__bar {
  border-radius: 1rem;
  box-shadow: 0 20px 40px 0 rgba(107, 154, 212, 0.3);
  overflow: hidden;
}
</style>
