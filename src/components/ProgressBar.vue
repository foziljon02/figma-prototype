<template>
  <div
    :class="[innerClass, 'd-flex progress-track align-items-center rounded mt-auto']"
    style="width: 100%; backgroundcolor: blue; height: 7px"
  >
    <div
      class="bg-primary"
      :style="{ width: progress, height: '7px', borderRadius: '10px', innerStyle }"
    ></div>
    <div
      style="
        background: #fff;
        width: 15px;
        height: 15px;
        border: 4px solid blue;
        borderRadius: 50%;
        marginLeft: -3px
      "
    ></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
      progress: String,
      innerStyle: String,
      innerClass: String
  },
};
</script>

<style scoped>
.progress-track {
  background-color: rgba(81, 91, 229, 0.1207);
}
</style>
