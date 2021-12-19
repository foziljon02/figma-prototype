<template>
  <div class="template-container container-fluid p-4">
    <div class="template-top">
      <Navbar :currentPage="currentPage" :currentRoute="currentRoute" />
    </div>

    <!-- Body Part Start -->
    <div class="template-body row mt-5">
      <div class="menus-container col-2">
        {{currentOPage}}
        <Menu :currentPage="currentPage"/>
      </div>

      <div class="col-10">
        <slot></slot>
      </div>
    </div>
    <!-- Body Part End -->
  </div>
</template>

<script>
import Navbar from "../Navbar.vue";
import Menu from "../Menu.vue";

export default {
  name: "MainTemplate",
  components: {
    Navbar,
    Menu,
  },
  props: {
    currentPage: String, 
    currentRoute: String
  },
};
</script>

<style scoped></style>
