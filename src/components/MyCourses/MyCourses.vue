<template>
  <div>
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
        <button v-on:click="list = true" :class="[list ? 'my-courses-icon-active' : 'my-courses-icon-inactive bg-white', 'btn']">
          <i class="fas fa-bars"></i>
        </button>
        <button v-on:click="list = false" :class="[list ? 'my-courses-icon-inactive bg-white' : 'my-courses-icon-active', 'btn']">
          <i class="fab fa-microsoft"></i>
        </button>
      </div>
    </div>

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
      <template v-for="course in courses">
        <ListCard class="mb-2" :course="course" :key="course.id" />
      </template>
    </template>

    <template v-else>
      <div class="row mt-5">
        <div class="col-3" v-for="course in courses" :key="course.id">
          <GridCard class="mb-2" :course="course" :key="course.id" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import angular from "../../assets/angular.png";
import react from "../../assets/react.png";
import laravel from "../../assets/laravel.png";
import bootstrap from "../../assets/bootstrap.png";
import dimond from "../../assets/dimond.png";
import logo from "../../assets/logo.png";
import ListCard from "../ListCard.vue";
import GridCard from "../GridCard.vue";

export default {
  name: "MyCourses",
  components: { ListCard, GridCard },
  data() {
    return {
      list: true,

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
            "Master Angular 5 from the basics to building an advanced application with Firebase's Firestore as well as Realtime database.",
          progress: "65%",
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
            "Dive in and learn React 16.8 from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and npm package manager.",
          progress: "10%",
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
            "Build a RESTful API for a marketplaces in different industries",
          progress: "10%",
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
            "This tutorial has been prepared for anyone who has a basic knowledge of HTML and CSS to develop websites",
          progress: "85%",
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
            "Finally a comprehensive guide to using Sketch for designing mobile. Learn to design an app from A to Z.",
          progress: "50%",
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
            "Master Angular 5 from the basics to building an advanced application with Firebase's Firestore as well as Realtime database.",
          progress: "42%",
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
            "Dive in and learn React 16.8 from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and npm package manager.",
          progress: "10%",
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
            "Build a RESTful API for a marketplaces in different industries",
          progress: "10%",
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
            "This tutorial has been prepared for anyone who has a basic knowledge of HTML and CSS to develop websites",
          progress: "65%",
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
            "Finally a comprehensive guide to using Sketch for designing mobile. Learn to design an app from A to Z.",
          progress: "90%",
          status: "Ongoing",
          action: "Get Reward",
        },
      ],
    };
  },
};
</script>

<style>
.my-form-control-nav {
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
