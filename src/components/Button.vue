<template>
    <div class="btn-container">
      <button id="myBtn" :class="[menu ? currentPage == text ? 'btn-blue text-white' : 'text-muted' : '', btnClass]">
        <i v-if="logo" :class="logo"></i>
        {{text}}
      </button>
    </div>

</template>

<script>
export default {
    name: 'Button',
    props: ['text', 'logo', 'btnClass', 'currentPage', 'blue', 'menu'],
}
</script>

<style scoped>
#myBtn {
  /* font-size: 0.8rem; */
} 

</style>