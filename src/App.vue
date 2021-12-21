<template>
  <div id="app">
    <SignIn />
    <main-template currentPage="Dashboard"><Dashboard /></main-template>
    <main-template currentPage="My Courses"><MyCourses /></main-template>
    <main-template currentPage="My Courses" currentRoute='/ Web Development'><CourseDetails /></main-template>
    <main-template currentPage="Purchase Courses"> <PurchaseCourse /> </main-template>
    <main-template currentPage="eBook"> <EBooks /> </main-template>
    <main-template currentPage="eBook" currentRoute="/ Learn Basic Vue Js" > <EbookDetail /> </main-template>
    <main-template currentPage="Copmleted Courses"> <CompletedCourses /> </main-template>
    <main-template currentPage="Code Challenges"> <CodeChallenge /> </main-template>
    <main-template currentPage="Community"> <Community /> </main-template>
    <main-template currentPage="Profile"><Profile /> </main-template>
  </div>
</template>

// <script>
import MainTemplate from './components/MainTemplate/MainTemplate.vue'
import SignIn from './components/SignIn/SignIn.vue'
import Dashboard from "./components/Dashboard/Dashboard.vue";
import MyCourses from './components/MyCourses/MyCourses.vue';
import CourseDetails from './components/CourseDetails/CourseDetails.vue';
import PurchaseCourse from './components/PurchaseCourse/PurchaseCourse.vue';
import EBooks from './components/Ebooks/EBooks.vue';
import EbookDetail from './components/Ebooks/EbookDetail.vue';
import CompletedCourses from './components/CompletedCourses/CompletedCourses.vue';
import CodeChallenge from './components/CodeChallenge/CodeChallenge.vue';
import Community from './components/Community/Community.vue';
import Profile from './components/Profile/Profile.vue';

export default {
  name: "App",
  components: {
    SignIn,
    Dashboard,
    MainTemplate,
    MyCourses,
    CourseDetails,
    PurchaseCourse,
    EBooks,
    EbookDetail,
    CompletedCourses,
    CodeChallenge,
    Community,
    Profile,
  },
  data() {
    return {
      name: "John",
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu', sans-serif;
}

p {
  margin: 0 !important;
}

body {
  background: rgba(242, 242, 242, 1);
}

.btn-blue {
  background-color:#2F3CED;
}

.btn-blue:hover {
  background: #2f3cedec;
}

.btn-blue:active {
  background: #2f3cedec;
}

.btn-blue:focus {
  background: #2f3cedec;
}

.bg-blue {
  background-color:#2F3CED;
}

.btn-text-muted {
  color: #6c757dc9!important;
}

.btn-font {
  font-size: 0.9rem;
}

.btn-yellow {
  background-color: #ffab19;
  border-color: #ffab19;
}

.btn-yellow:hover {
  background-color: #ffae22;
}

.text-blue {
  color: #2F3CED;
}

.text-yellow {
  color: #ffab19;
}

.text-weather {
  color: #00C0CD;
}

.text-reward {
  color: #0EC07A;
}

.text-success {
  color:#51C98E;
}

.text-bg-success-dim {
background: #57d09477;
}

.text-bg-yellow-dim {
  background-color: #ffab1933;
}

.text-bg-blue-dim {
  background-color: #2f3ced33;
}

.text-bg-red-dim {
  background-color: #dc354633;
}

.text-bg-green-dim {
  background-color: #28a74633;
}

.card {
  border-radius: 7px;
  border: none;
  background-color: rgba(255, 255, 255, 0.7);
}

.my-col-4 {
  max-width: 31.333%;
}

.circle-border {
  border-radius: 50%;
}

.my-nav-item {
  margin-right: 50px !important;
  padding: 20px 20px 15px 20px;
}

.my-nav-item:hover {
  cursor: pointer;
}


.current-nav {
  border-bottom: 3px solid #2f3ced;
}



</style>
