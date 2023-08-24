<template>
  <div class="page">
    <page-title>My Colors</page-title>
    <my-colors-list />
  </div>
</template>

<script>
import PageTitle from "../components/shared/PageTitleItem.vue";
import MyColorsList from "../components/MyColorsList.vue";

export default {
  name: "MyColorsPage",
  components: {
    PageTitle,
    MyColorsList,
  },
};
</script>
