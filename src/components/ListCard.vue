<template>
  <div class="one-line-course-card">
    <div class="card">
      <div class="d-flex align-items-center p-3">
        <div class="course-name d-flex align-items-center">
          <input style="zoom: 1.5" type="checkbox" name="" id="" />
          <img
            :src="course.technology.icon"
            alt="icon"
            width="30"
            class="ml-2"
          />
          <p class="ml-2">{{ course.technology.name }}</p>
        </div>

        <div class="catagory">
          <p>{{ course.catagory }}</p>
        </div>

        <div class="instructor d-flex align-items-center">
          <img
            class="circle-border"
            height="40"
            width="40"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80"
            alt="profile"
          />
          <p class="ml-1">{{ course.instructor.name }}</p>
        </div>

        <div class="description">
          <p>
            {{ course.description }}
          </p>
        </div>

        <div class="my-progress">
          <p class="rounded-progress-bar bg-primary"></p>
        </div>

        <div class="status">
          <p
            style="width: 75px"
            :class="[course.status == 'Ongoing'? 'text-blue text-bg-blue-dim' : 'text-success text-bg-success-dim', 'rounded p-1 text-center']"
          >
            {{ course.status }}
          </p>
        </div>

        <div class="action">
          <a
            :class="
              course.action == 'Continue' ? 'text-weather' : 'text-reward'
            "
            href="#"
          >
            <p>{{ course.action }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListCard",
  props: {
    course: Object,
  },
};
</script>

<style>
.course-name {
  width: 170px;
}

.catagory {
  width: 200px;
  margin-left: 15px !important;
}

.instructor {
  width: 200px;
}
.description {
  width: 250px;
}

.description p {
  font-size: 0.9rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.my-progress {
  width: 100px;
  margin-left: 10px !important;
}
.rounded-progress-bar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 15px !important;
}

.status {
  width: 120px;
}
.action {
  width: 100px;
}
</style>
