<template>
    <div class="btn-container">
      <button id="myBtn" :class="[currentOPage == text ? 'btn-primary' : '', btnClass]">
        <i v-if="logo" :class="logo"></i>
        {{text}}
      </button>
    </div>

</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        logo: String,
        btnClass: String,
        currentPage: String
    },
}
</script>

<style scoped>
#myBtn {
  /* font-size: 0.8rem; */
} 

</style>