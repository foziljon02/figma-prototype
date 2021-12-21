<template>
    <div class="btn-container">
      <router-link v-if="menu" :to="action" exact>
        <button id="myBtn" :class="[menu ? currentPage == text ? 'btn-blue text-white' : 'text-muted' : '', btnClass]">
          <i v-if="logo" :class="logo"></i>
          {{text}}
        </button>
      </router-link>

      <button v-else id="myBtn" :class="[menu ? currentPage == text ? 'btn-blue text-white' : 'text-muted' : '', btnClass]">
        <i v-if="logo" :class="logo"></i>
        {{text}}
      </button>
      
    </div>

</template>

<script>
export default {
    name: 'Button',
    props: ['text', 'logo', 'btnClass', 'currentPage', 'blue', 'menu', 'action'],
}
</script>

<style scoped>
#myBtn {
  /* font-size: 0.8rem; */
} 

</style>