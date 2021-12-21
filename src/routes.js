import SignIn from './components/SignIn/SignIn.vue'
import Dashboard from './components/Dashboard/Dashboard.vue'
import MyCourses from './components/MyCourses/MyCourses.vue';
import CourseDetails from './components/CourseDetails/CourseDetails.vue';
import CompletedCourses from './components/CompletedCourses/CompletedCourses.vue';
import EBooks from './components/Ebooks/EBooks.vue';
import EbookDetail from './components/Ebooks/EbookDetail.vue';
import PurchaseCourse from './components/PurchaseCourse/PurchaseCourse.vue';
import CodeChallenge from './components/CodeChallenge/CodeChallenge.vue';
import Community from './components/Community/Community.vue';
import Profile from './components/Profile/Profile.vue';


export default [
    { path: '/register', component: SignIn},
    { path: '/', component: Dashboard},
    { path: '/ebooks', component: EBooks},
    { path: '/ebooks/details', component: EbookDetail},
    { path: '/mycourses', component: MyCourses},
    { path: '/mycourses/details', component: CourseDetails},
    { path: '/completed', component: CompletedCourses},
    { path: '/buy', component: PurchaseCourse},
    { path: '/challenges', component: CodeChallenge},
    { path: '/community', component: Community},
    { path: '/profile', component: Profile},

]