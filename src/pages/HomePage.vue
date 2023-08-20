<template>
  <div class="page">
    <page-title>Home</page-title>
    <info-item :type="'warn'"
      >Warning! This app is still in development...</info-item
    >
  </div>
</template>

<script>
import PageTitle from "../components/shared/PageTitleItem.vue";
import InfoItem from "../components/shared/InfoItem.vue";
export default {
  name: "HomePage",
  components: {
    PageTitle,
    InfoItem,
  },
};
</script>
