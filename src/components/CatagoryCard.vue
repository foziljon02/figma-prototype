<template>
  <div class="my-card-body card-body d-flex">
    <div class="icon-container">
      <img class="icon" width="35" :src="data.img" alt="icon" />
    </div>

    <div class="right-side">
      <h6 class="card-title m-0">
        {{ data.technology }}
      </h6>

      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center course-info">
          <div class="dot-blue text-blue"></div>
          <p class="m-0">{{ data.numOfCourses }} Course</p>
        </div>

        <div class="d-flex align-items-center course-info">
          <div class="dot-yellow text-blue"></div>
          <p class="m-0">{{ data.numOfCourses }} Course</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatagoryCard",
  props: {
    data: Object,
  },
};
</script>

<style scoped>
.course-info {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 24px;
  /* identical to box height, or 200% */

  color: #5a7180;
}

.right-side {
  margin-left: 21px !important;
}

.card-title {
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 24px;
  /* identical to box height, or 185% */
}

.icon {
  width: 29px;
  height: 29px;
}

.dot-blue,
.dot-yellow {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
}

.dot-yellow {
    margin-left: 10px;
}

.dot-blue {
  background: #2f3ced;
}

.dot-yellow {
  background: #ffab19;
}

.my-card-body {
  width: 100%;
}

.card-body {
  padding: 21px 0px 17px 20px;
}
</style>
