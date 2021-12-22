<template>
  <div class="dashboard m-0 p-0">
    <main-template currentPage="Dashboard">
    <UpgradeOffer />
      <div class="dashboard-main">
        <div class="courses-in-progress">
          <SectionLine text="Courses in Progress" link="#" />

          <div class="row mr-0 ml-0 d-flex justify-content-between">
            <div
              v-for="course in coursesInProgress"
              v-bind:key="course.id"
              class="card col-4 my-col-4"
            >
              <CourseCard :course="course" />
            </div>
          </div>
        </div>

        <div class="popular-catagories">
          <div>
            <SectionLine text="Popular Catagories" link="#" />
          </div>

          <div class="row mr-0 ml-0 d-flex justify-content-between">
            <div
              v-for="course in popularCatagories"
              :key="course.id"
              class="card col-4 my-col-4"
            >
              <CatagoryCard :data="course" />
            </div>
          </div>
        </div>

        <div class="top-mentors">
          <div>
            <SectionLine text="Top Mentors" link="#" />
          </div>

          <div v-for="mentor in mentors" :key="mentor.id" class="mentors-cards">
            <Mentor :mentor="mentor" />
          </div>
        </div>
      </div>
    </main-template>
  </div>
</template>

<script>
import CourseCard from "../CourseCard.vue";
import SectionLine from "../SectionLine.vue";
import CatagoryCard from "../CatagoryCard.vue";
import Mentor from "../Mentor.vue";
import UpgradeOffer from "../UpgradeOffer.vue";

import angularIcon from "../../assets/angular.png";
import dimond from "../../assets/dimond.png";
import laravel from "../../assets/laravel.png";
import bootstrap from "../../assets/bootstrap.png";
import react from "../../assets/react.png";
import MainTemplate from "../MainTemplate/MainTemplate.vue";

export default {
  name: "Dashboard",
  components: {
    CourseCard,
    SectionLine,
    CatagoryCard,
    Mentor,
    UpgradeOffer,
    MainTemplate,
  },
  data() {
    return {
      coursesInProgress: [
        {
          id: 0,
          courseType: "Frontned Development",
          icon: angularIcon,
          title: "Learn Angular js from scratch to expert",
          description:
            "Master Angular 5 from the basics to building an advanced application with Firebase's firestore database",
          progress: "70%",
        },

        {
          id: 1,
          courseType: "UI/UX Design",
          icon: dimond,
          title: "Sketch from A to Z (2019): Become an app designer",
          description:
            "Finally a comprehensive guide to using Sketch for designing mobile. Learn to design an ap from scratch",
          progress: "40%",
        },

        {
          id: 2,
          courseType: "Backend Development",
          icon: laravel,
          title: "Laravel 2019, the complete guide with real world projects",
          description:
            "Build a RESTful API for a market system using Laravel and dominates the challenging RESTful API",
          progress: "90%",
        },
      ],

      popularCatagories: [
        {
          id: 0,
          technology: "Angular Js",
          numOfCourses: 300,
          img: laravel,
        },

        {
          id: 1,
          technology: "Bootstrap",
          numOfCourses: 300,
          img: bootstrap,
        },

        {
          id: 2,
          technology: "React Js",
          numOfCourses: 300,
          img: react,
        },
      ],

      mentors: [
        {
          id: 0,
          name: "Tiffany Smith",
          img: "https://thispersondoesnotexist.com/image",
          industry: "Frontend Development",
          jobTitle: "Frontend Developer",
          numOfCourses: 815,
          numOfFollowers: 300,
          rating: 4.5,
        },

        {
          id: 1,
          name: "Crystal Lucas",
          img: "https://thispersondoesnotexist.com/image",
          industry: "UI/UX Design",
          jobTitle: "UX/UI Designer",
          numOfCourses: 777,
          numOfFollowers: 256,
          rating: 5.0,
        },

        {
          id: 2,
          name: "Peter Russell",
          img: "https://thispersondoesnotexist.com/image",
          industry: "Backend Development",
          jobTitle: "Web Developer",
          numOfCourses: 83,
          numOfFollowers: 368,
          rating: 5.0,
        },

        {
          id: 3,
          name: "Melissa Stevens",
          img: "https://thispersondoesnotexist.com/image",
          industry: "Android Development",
          jobTitle: "Android Developer",
          numOfCourses: 631,
          numOfFollowers: 932,
          rating: 5.0,
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
