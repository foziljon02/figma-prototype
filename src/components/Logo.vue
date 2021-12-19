<template>
    <div class="sign-in__logo d-flex align-items-center font-weight-bold" style="font-size: 1.5rem">
      <div class="logo"></div>
      <p :style="{fontSize: fontS}" class="align-self-center ml-2">E-Studieses</p>
    </div>
</template>


<script>
export default {
    name: "Logo",
    props: {
      fontS: String
    }
}
</script>


<style scoped>

.sign-in__logo h5 {
  margin-left: 5px;
}


.logo {
  width: 35px;
  height: 35px;
  background: blue;
  border-radius: 50%;
}

</style>