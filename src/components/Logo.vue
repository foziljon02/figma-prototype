<template>
    <div class="logo-container d-flex align-items-center font-weight-bold">
      <div class="logo"></div>
      <img class="brand-logo" :src="BrandLogo" alt="logo">
    </div>
</template>


<script>
import BrandLogo from '../assets/Brand.jpg'

export default {
    name: "Logo",
    data() {
      return {
        BrandLogo: BrandLogo
      }
    },
    props: {
      fontS: String
    }
}
</script>


<style scoped>

.logo-container h5 {

}

.brand-logo {
  width: 147.9px;
  height: 20.16px;
  margin-left: 18.6px;
}

.logo {
  width: 45.26px;
  height: 45.26px;
  background: blue;
  border-radius: 50%;
}

</style>