<template>
  <div class="card-body d-flex flex-column">
    <div class="card-top d-flex justify-content-between">
      <p class="text-danger">
        {{ course.courseType }}
      </p>

      <img :src="course.icon" alt="icon" width="30" />
    </div>

    <h5 class="card-title">
      {{ course.title }}
    </h5>

    <p id="card-text" class="card-text text-muted mb-3 mt-auto">
      {{ course.description }}
    </p>

    <ProgressBar :progress="course.progress" />
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";

export default {
  name: "CourseCard",
  props: {
    course: Object,
  },
  components: { ProgressBar },
};
</script>

<style scoped>
h5 {
  font-size: 1rem;
}

#card-text {
  font-size: 0.9rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.card-body {
    transition: transform 0.15s ease;
    cursor: pointer;
}

.card-body:hover {
    transform: scale(1.03);
}
</style>
