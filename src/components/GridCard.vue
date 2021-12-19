<template>
  <div class="grid-card">
    <div class="card">
      <div class="card-body">
        <div
          class="card-body-top d-flex justify-content-between align-items-center"
        >
          <img :src="course.technology.icon" alt="icon" width="40" />
          <p
            class="status-width text-success text-bg-success-dim rounded p-1 text-center"
          >
            Done
          </p>
        </div>

        <h5 class="body-title">
          {{ course.technology.name }}
        </h5>

        <div style="width: 35px; height: 2.5px" class="bg-success mt-3"></div>

        <p class="card-text three-line-text">
          {{ course.description }}
        </p>

        <div class="mt-4 mb-4">
          <ProgressBar :progress="course.progress" />
        </div>

        <div class="card-instructor d-flex align-items-center mt-3">
          <img
            :src="course.instructor.img"
            alt="instructor"
            width="40"
            height="40"
            class="circle-border"
          />
          <p class="ml-2">{{ course.instructor.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from './ProgressBar.vue'


export default {
    name: 'GridCard',
    props: {
        course: Object
    },
    components: {
        ProgressBar
    }
};
</script>

<style scoped>
.status-width {
  width: 90px;
}

.three-line-text {
  font-size: 1rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
