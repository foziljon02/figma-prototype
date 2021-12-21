<template>
  <div class="completed-courses">
    <div
      class="my-courses-nav d-flex align-items-center justify-content-between"
    >
      <p class="text-blue">
        Courses for <span class="font-weight-bold">"All Courses"</span>
      </p>
      <div class="my-course-nav-right d-flex align-items-center">
        <p
          class="text-muted d-flex align-items-center bg-white pl-2 pr-2 rounded"
        >
          Sort By:
          <span class="font-weight-bold text-dark p-2">
            <select
              class="my-form-control-nav ml-2 font-weight-bold text-dark my-select"
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
            list
              ? 'my-courses-icon-active'
              : 'my-courses-icon-inactive bg-white',
            'btn',
          ]"
        >
          <i class="fas fa-bars"></i>
        </button>
        <button
          v-on:click="list = false"
          :class="[
            list
              ? 'my-courses-icon-inactive bg-white'
              : 'my-courses-icon-active',
            'btn',
          ]"
        >
          <i class="fab fa-microsoft"></i>
        </button>
      </div>
    </div>

    <div class="mt-4">
      <template v-if="list">
        <div class="my-courses-titles d-flex p-3">
          <div class="d-flex align-items-center course-name">
            <input type="checkbox" style="zoom: 1.5" />

            <p class="course-name-title ml-2">Course Name</p>
          </div>

          <p class="catagory-title catagory">Catagory</p>

          <p class="instructor-title instructor">Instrucator</p>

          <p class="description-title description">Description</p>

          <p class="progress-title my-progress">Progress</p>

          <p class="status-title status">Status</p>

          <p class="action-title action">Action</p>
        </div>
        <template>
            <div class="d-flex justify-content-center">
                <h1>
                    Not Implemented Yet
                </h1>
            </div>
        </template>
      </template>

      <template v-else>
        <div class="row completed-list">
          <div class="col-4 mb-3" v-for="course in courses" :key="course.id">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between">
                  <p>
                    {{ course.catagory }}
                  </p>
                  <i class="fas fa-certificate text-yellow"></i>
                </div>

                <h6 class="card-title mt-3">
                  {{ course.description }}
                </h6>

                <div class="d-flex align-items-center">
                  <img
                    width="35"
                    :src="course.instructor.img"
                    alt="instructor"
                  />
                  <h6 class="mb-0 ml-1">{{ course.instructor.name }}</h6>
                </div>

                <div class="d-flex justify-content-between mt-2">
                  <div class="ratings text-yellow">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>

                  <h6 class="completed-text">100% Completed</h6>
                </div>

                <div class="mt-3">
                  <progress-bar
                    :endPoint="true"
                    :progress="course.progress"
                  ></progress-bar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import angular from "../../assets/angular.png";
import react from "../../assets/react.png";
import laravel from "../../assets/laravel.png";
import bootstrap from "../../assets/bootstrap.png";
import dimond from "../../assets/dimond.png";
import logo from "../../assets/logo.png";
import ProgressBar from "../ProgressBar.vue";

export default {
  name: "CompletedCourses",
  components: { ProgressBar },
  data() {
    return {
      list: false,
      courses: [
        {
          id: 0,
          technology: {
            name: "Angular Js",
            icon: angular,
          },
          catagory: "Web Development",
          instructor: {
            name: "Brad Traversy",
            img: logo,
          },
          description:
            "Learn Angular js to build beautifull landingpage for your business.",
          progress: "100%",
          status: "Ongoing",
          action: "Continue",
        },

        {
          id: 1,
          technology: {
            name: "React Js",
            icon: react,
          },
          catagory: "Web Development",
          instructor: {
            name: "InsideCodeMedia",
            img: logo,
          },
          description:
            "Learn Angular js to build beautifull landingpage for your business.",
          progress: "100%",
          status: "Done",
          action: "Get Reward",
        },

        {
          id: 2,
          technology: {
            name: "Laravel",
            icon: laravel,
          },
          catagory: "Web Development",
          instructor: {
            name: "JuanD MeGon",
            img: logo,
          },
          description:
            "Learn Angular js to build beautifull landingpage for your business.",
          progress: "100%",
          status: "Ongoing",
          action: "Continue",
        },

        {
          id: 3,
          technology: {
            name: "Bootsrap",
            icon: bootstrap,
          },
          catagory: "Web Development",
          instructor: {
            name: "Antony Alicea",
            img: logo,
          },
          description:
            "Learn Angular js to build beautifull landingpage for your business.",
          progress: "100%",
          status: "Ongoing",
          action: "Continue",
        },

        {
          id: 4,
          technology: {
            name: "Sketch",
            icon: dimond,
          },
          catagory: "UI/UX Design",
          instructor: {
            name: "Joseph Angelo",
            img: logo,
          },
          description:
            "Learn Angular js to build beautifull landingpage for your business.",
          progress: "100%",
          status: "Ongoing",
          action: "Get Reward",
        },

        {
          id: 5,
          technology: {
            name: "Angular Js",
            icon: angular,
          },
          catagory: "Web Development",
          instructor: {
            name: "Brad Traversy",
            img: logo,
          },
          description:
            "Learn Angular js to build beautifull landingpage for your business.",
          progress: "100%",
          status: "Ongoing",
          action: "Continue",
        },

        {
          id: 6,
          technology: {
            name: "React Js",
            icon: react,
          },
          catagory: "Web Development",
          instructor: {
            name: "InsideCodeMedia",
            img: logo,
          },
          description:
            "Learn Angular js to build beautifull landingpage for your business.",
          progress: "100%",
          status: "Done",
          action: "Get Reward",
        },

        {
          id: 7,
          technology: {
            name: "Laravel",
            icon: laravel,
          },
          catagory: "Web Development",
          instructor: {
            name: "JuanD MeGon",
            img: logo,
          },
          description:
            "Learn Angular js to build beautifull landingpage for your business.",
          progress: "100%",
          status: "Ongoing",
          action: "Continue",
        },

        {
          id: 8,
          technology: {
            name: "Bootsrap",
            icon: bootstrap,
          },
          catagory: "Web Development",
          instructor: {
            name: "Antony Alicea",
            img: logo,
          },
          description:
            "Learn Angular js to build beautifull landingpage for your business.",
          progress: "100%",
          status: "Ongoing",
          action: "Continue",
        },

        {
          id: 9,
          technology: {
            name: "Sketch",
            icon: dimond,
          },
          catagory: "UI/UX Design",
          instructor: {
            name: "Joseph Angelo",
            img: logo,
          },
          description:
            "Learn Angular js to build beautifull landingpage for your business.",
          progress: "100%",
          status: "Ongoing",
          action: "Get Reward",
        },
      ],
    };
  },
};
</script>

<style scoped>
.completed-text {
  margin-top: 3px;
}
</style>
