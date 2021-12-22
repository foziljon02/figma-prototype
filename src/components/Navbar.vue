<template>
  <div class="my-navbar">
    <div class="row d-flex align-items-center justify-content-center">
      <div class="col-2 nav-right-logo">
        <Logo />
      </div>

      <div
        class="col-10 nav-left d-flex justify-content-between align-items-center"
      >
        <div class="">
          <p class="page-name font-weight-bold">
            {{ currentPage }}
            <span class="text-blue">{{ currentRoute }}</span>
          </p>
        </div>

        <div class="icons d-flex align-items-center">
          <div class="icon">
            <i class="fas fa-search"></i>
          </div>

          <div class="bell-cont">
            <i class="far fa-bell"></i>
          </div>

          <div class="icon user bg-blue">
            <div class="d-flex align-items-center">
              <i class=""></i>
            </div>
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
  components: { Logo },
  props: {
    currentPage: String,
    currentRoute: String,
  },
};
</script>

<style scoped>

.fa-user {
  width: 100%;
  height: 50;
}

.user {
  width: 46px;
  height: 46px;
}

.fa-search {
  width: 19px;
  height: 19px;
}

.bell-cont {
  margin-left: 40px;
  margin-right: 24px;
}

.page-name {
  height: 34px;
  left: 0%;
  right: 1.04%;
  top: calc(50% - 34px / 2);

  font-family: Inter;
  font-style: normal;
  font-weight: 600 !important;
  font-size: 18px;
  line-height: 34px;
  /* identical to box height, or 189% */

  color: #0f1b41;
}

.nav-left {
  width: 75vw;
}

.icon {
  border-radius: 50%;
}
</style>
