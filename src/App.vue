<template>
  <div id="app">
    <SignIn />
  </div>
</template>

<script>
import SignIn from './components/SignIn/SignIn.vue'

export default {
  name: 'App',
  components: {
    SignIn,

  },
  data() {
    return {
      name: 'John'
    }
  }
}
</script>

<style>
  
</style>
