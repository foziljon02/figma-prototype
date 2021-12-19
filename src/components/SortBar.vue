<template>
  <div class="my-courses-nav d-flex align-items-center justify-content-between">
    <p class="text-blue">
      {{text}} <span class="font-weight-bold">"{{textBold}}"</span>
    </p>
    <div class="my-course-nav-right d-flex align-items-center">
      <p
        class="text-muted d-flex align-items-center bg-white pl-2 pr-2 rounded"
      >
        Sort By:
        <span class="font-weight-bold text-dark p-2">
          <select
            class="my-form-control ml-2 font-weight-bold text-dark my-select"
            id="exampleFormControlSelect2"
          >
            <option>All Catagories</option>
            <option>Popular</option>
            <option>Trending</option>
          </select>
        </span>
      </p>
      <button class="btn my-courses-icon-inactive bg-white ml-3 mr-3">
        <i class="fas fa-filter"></i>
      </button>
      <button
        v-on:click="list = true"
        :class="[
          list ? 'my-courses-icon-active' : 'my-courses-icon-inactive bg-white',
          'btn',
        ]"
      >
        <i class="fas fa-bars"></i>
      </button>
      <button
        v-on:click="list = false"
        :class="[
          list ? 'my-courses-icon-inactive bg-white' : 'my-courses-icon-active',
          'btn',
        ]"
      >
        <i class="fab fa-microsoft"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SortBar',
    props: {
        text: String,
        textBold: String,
        list: Boolean
    },
}
</script>

<style scoped>

.my-form-control {
  font-weight: bold !important;
  background-color: transparent;
  border: none;
}

.my-courses-icon-inactive {
  color: #bbb !important;
}

.my-courses-icon-active {
  background-color: #2f3ced;
  color: white;
}
</style>