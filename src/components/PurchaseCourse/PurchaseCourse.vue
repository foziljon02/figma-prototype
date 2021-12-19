<template>
  <div>
    <div
      class="my-courses-nav d-flex align-items-center justify-content-between"
    >
      <p class="text-blue">
        Purchase Courses for <span class="font-weight-bold">"All Courses"</span>
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

    <div class="purchase-courses row">
      <div
        class="course-card card col-3 my-col-3 p-0 pb-2"
        v-for="course in courses"
        :key="course.id"
      >
        <div class="course-background rounded pt-2">
          <div class="card-body">
            <div class="course-background-elements d-flex">
              <div class="icon d-flex align-items-center justify-content-center">
                <img width="40" :src="course.technology.icon" alt="icon" />
              </div>
              <h4 class="card-title mb-2">
                {{ course.name }}
              </h4>
            </div>
          </div>

          <div class="card-bottom p-3">
            <h5 class="card-title">
              {{ course.name }}
            </h5>

            <div class="instructor d-flex align-items-center pt-2">
              <img width="40" :src="course.instructor.img" alt="instructor" />
              <h6 class="ml-3">{{ course.instructor.name }}</h6>
            </div>

            <div class="d-flex justify-content-between mt-3">
              <div class="ratings text-yellow">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>

              <div class="price">
                ${{ course.price }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import angular from "../../assets/angular.png";
import react from "../../assets/react.png";
import dimond from "../../assets/dimond.png";
import logo from "../../assets/logo.png";

export default {
  name: "PusrchaseCourse",
  data() {
    return {
      list: true,
      courses: [
        {
          id: 0,
          name: "Learn sketch from scratch to build web design",
          technology: {
            name: "React Js",
            icon: react,
          },
          instructor: {
            name: "InsideCodeMedia",
            img: logo,
          },
          rating: 4,
          price: 993.23,
        },

        {
          id: 1,
          name: "Learn sketch from scratch to build web design",
          technology: {
            name: "Angular Js",
            icon: angular,
          },
          instructor: {
            name: "InsideCodeMedia",
            img: logo,
          },
          rating: 4,
          price: 993.23,
        },

        {
          id: 2,
          name: "Learn sketch from scratch to build web design",
          technology: {
            name: "Laravel",
            icon: angular,
          },
          instructor: {
            name: "InsideCodeMedia",
            img: logo,
          },
          rating: 4,
          price: 993.23,
        },

        {
          id: 3,
          name: "Learn sketch from scratch to build web design",
          technology: {
            name: "Bootstrap",
            icon: dimond,
          },
          instructor: {
            name: "InsideCodeMedia",
            img: logo,
          },
          rating: 4,
          price: 993.23,
        },

        {
          id: 4,
          name: "Learn sketch from scratch to build web design",
          technology: {
            name: "Scetch",
            icon: dimond,
          },
          instructor: {
            name: "InsideCodeMedia",
            img: logo,
          },
          rating: 4,
          price: 993.23,
        },

        {
          id: 5,
          name: "Learn sketch from scratch to build web design",
          technology: {
            name: "React Js",
            icon: react,
          },
          instructor: {
            name: "InsideCodeMedia",
            img: logo,
          },
          rating: 4,
          price: 993.23,
        },

        {
          id: 6,
          name: "Learn sketch from scratch to build web design",
          technology: {
            name: "Angular Js",
            icon: angular,
          },
          instructor: {
            name: "InsideCodeMedia",
            img: logo,
          },
          rating: 4,
          price: 993.23,
        },

        {
          id: 7,
          name: "Learn sketch from scratch to build web design",
          technology: {
            name: "Laravel",
            icon: angular,
          },
          instructor: {
            name: "InsideCodeMedia",
            img: logo,
          },
          rating: 4,
          price: 993.23,
        },

        {
          id: 8,
          name: "Learn sketch from scratch to build web design",
          technology: {
            name: "Bootstrap",
            icon: dimond,
          },
          instructor: {
            name: "InsideCodeMedia",
            img: logo,
          },
          rating: 4,
          price: 993.23,
        },

        {
          id: 9,
          name: "Learn sketch from scratch to build web design",
          technology: {
            name: "Scetch",
            icon: dimond,
          },
          instructor: {
            name: "InsideCodeMedia",
            img: logo,
          },
          rating: 4,
          price: 993.23,
        },

        {
          id: 10,
          name: "Learn sketch from scratch to build web design",
          technology: {
            name: "React Js",
            icon: react,
          },
          instructor: {
            name: "InsideCodeMedia",
            img: logo,
          },
          rating: 4,
          price: 993.23,
        },

        {
          id: 11,
          name: "Learn sketch from scratch to build web design",
          technology: {
            name: "Angular Js",
            icon: angular,
          },
          instructor: {
            name: "InsideCodeMedia",
            img: logo,
          },
          rating: 4,
          price: 993.23,
        },

        {
          id: 12,
          name: "Learn sketch from scratch to build web design",
          technology: {
            name: "Laravel",
            icon: angular,
          },
          instructor: {
            name: "InsideCodeMedia",
            img: logo,
          },
          rating: 4,
          price: 993.23,
        },

        {
          id: 13,
          name: "Learn sketch from scratch to build web design",
          technology: {
            name: "Bootstrap",
            icon: dimond,
          },
          instructor: {
            name: "InsideCodeMedia",
            img: logo,
          },
          rating: 4,
          price: 993.23,
        },

        {
          id: 14,
          name: "Learn sketch from scratch to build web design",
          technology: {
            name: "Scetch",
            icon: dimond,
          },
          instructor: {
            name: "InsideCodeMedia",
            img: logo,
          },
          rating: 4,
          price: 993.23,
        },
      ],
    };
  },
};
</script>

<style scoped>
.icon {
  background: white;
  border: 2px solid black;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.my-col-3 {
  max-width: 19.52vw;
  margin: 3px 5px;
}

.course-background {
  position: relative;
  background: url("https://www.color-meanings.com/wp-content/uploads/bright-colors-abstract-drawing.jpeg");
  object-fit: contain;
}

.card-bottom {
  background: white;
  padding-top: 10px;
}

</style>
