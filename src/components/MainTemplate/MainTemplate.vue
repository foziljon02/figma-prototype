<template>
  <div class="template-container p-0 m-0">
    <div class="template-top m-0 p-0">
      <Navbar :currentPage="currentPage" :currentRoute="currentRoute" />
    </div>

    <!-- Body Part Start -->
    <div class="template-body row mt-5">
      <div class="menus-container col-2">
        {{ currentOPage }}
        <Menu 
          :currentPage="currentPage" 
          :dashboard="dashboard" 
          :eBook="eBook" 
          />
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
  data() {
    return {
      dashboard: false,
      eBook: false,
      myCourses: false,
    };
  },
  components: {
    Navbar,
    Menu,
  },
  props: {
    currentPage: String,
    currentRoute: String,
  },
  methods: {
    turnDashboard() {
      this.dashboard = true;
      this.eBook = false;
      this.myCourses = false;
    },
    turnEbook() {
      this.dashboard = false;
      this.eBook = true;
      this.myCourses = false;
    },
    turnMyCourses() {
      this.dashboard = false;
      this.eBook = false;
      this.myCourses = true;
    }
  },
};
</script>

<style scoped>
.template-container {
  padding: 42px 40px !important;
}

</style>
