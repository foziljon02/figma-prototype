<template>
  <div class="card-body d-flex flex-column">
    <div
      class="card-top d-flex justify-content-between align-items-center m-0 p-0"
    >
      <p class="text-danger">
        {{ course.courseType }}
      </p>

      <img class="tech-icon" :src="course.icon" alt="icon" width="30" />
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
.tech-icon {
  width: 29px;
  height: 29px;
}

.card-title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 24px;
  /* or 185% */

  color: #0f1b41;
}

.card-text {
  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 24px;
  /* or 200% */

  color: #5a7180;
}

.text-danger {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 14px;
  /* identical to box height, or 108% */

  text-align: center;

  color: #ff6868 !important;
}

#card-text {
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
