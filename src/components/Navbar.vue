<template>
  <div class="my-navbar">
    <div class="row d-flex align-items-center justify-content-center">
      <div class="col-2 nav-right-logo">
        <Logo />
      </div>

      <div class="col-10 nav-left d-flex justify-content-between align-items-center">
        <div class="page-name">
          <p class="page-name font-weight-bold ">
            {{currentPage}}
            <span class="text-blue">{{currentRoute}}</span>
          </p>
        </div>

        <div class="icons d-flex">
          <div class="icon">
            <i class="fas fa-search p-2 pt-3 pb-3 "></i>
          </div>

          <div class="icon">
            <i class="far fa-bell p-2 pt-3 pb-3"></i>
          </div>

          <div class="icon bg-blue">
            <i class="far fa-user text-white p-3"></i>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Logo from "./Logo.vue";


export default {
  name: "Navbar",
  components: { Logo},
  props: {
    currentPage: String,
    currentRoute: String
  }
};
</script>

<style scoped>
.page-name {
  font-size: 1rem;
}

.nav-left {
  width: 75vw;
}

.icon {
  margin-left: 10px;
  border-radius: 50%;
}
</style>
