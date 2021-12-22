<template>
  <div class="d-flex justify-content-between">
    <p class="font-weight-bold">{{ text }}</p>
    <p class="font-weight-bold text-blue"><a :href="link">View All</a></p>
  </div>
</template>

<script>
export default {
  name: "SectionLine",
  props: {
    text: String,
    link: String,
  },
};
</script>

<style scoped>
p{
  font-family: Inter;
  font-style: normal;
  font-weight: 600 !important;
  font-size: 16px;
  line-height: 24px;
  margin-top: 30px !important;
  margin-bottom: 20px !important;
/* identical to box height, or 150% */

  color: #0f1b41;
}
</style>
