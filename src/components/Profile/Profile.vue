<template>
  <div class="profile">
    <div class="course-details-nav-sections">
      <div class="my-navbar d-flex mb-3">
        <p
          v-on:click="turnCourses()"
          :class="[courses ? 'current-nav' : '', 'my-nav-item text-center']"
        >
          Courses
        </p>
        <p
          v-on:click="turnDiscussions()"
          :class="[discussions ? 'current-nav' : '', 'my-nav-item text-center']"
        >
          Discussions
        </p>
        <p
          v-on:click="turnChallenges()"
          :class="[challenges ? 'current-nav' : '', 'my-nav-item text-center']"
        >
          Challenges
        </p>
        <p
          v-on:click="turnMyAccount()"
          :class="[myAccount ? 'current-nav' : '', 'my-nav-item text-center']"
        >
          My Account
        </p>
      </div>
      <div class="row">
        <div class="col-9">
          <!-- courses START -->
          <div v-if="courses"></div>
          <!-- courses END -->

          <!-- discussions START -->
          <div v-else-if="discussions">
            <div
              class="card comment-card mb-3"
              v-for="comment in comments"
              :key="comment.id"
            >
              <div class="card-body d-flex">
                <div>
                  <img
                    width="40"
                    height="40"
                    class="rounded-circle"
                    :src="comment.img"
                    alt="instructor"
                  />
                </div>

                <div class="ml-3" style="width: 100%">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <h6 class="card-title m-0">{{ comment.name }}</h6>
                      <small class="text-muted mt-0"
                        >Asked {{ comment.time }}m ago</small
                      >
                    </div>

                    <div>
                      <p class="text-danger text-bg-red-dim p-1 rounded">
                        {{ comment.field }}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h6 class="card-title mt-3">
                      {{ comment.title }}
                    </h6>

                    <p class="card-text text-muted">
                      {{ comment.text }}
                    </p>

                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center mt-4">
                        <button
                          v-on:click="comment.likes++"
                          :class="[
                            comment.likes > 0 ? 'btn-blue' : 'btn-light',
                            'btn circle-border mr-3',
                          ]"
                        >
                          <i class="far fa-thumbs-up text-white"></i>
                        </button>
                        <p
                          class="text-blue mr-3 text-center"
                          style="width: 30px"
                        >
                          {{ comment.likes }}
                        </p>
                        <button
                          v-on:click="comment.likes--"
                          :class="[
                            comment.likes < 0 ? 'btn-danger' : 'btn-light',
                            'btn circle-border',
                          ]"
                        >
                          <i class="far fa-thumbs-down text-white"></i>
                        </button>
                      </div>

                      <div class="d-flex">
                        <p class="text-muted mr-4">
                          <i class="fas fa-eye"></i> {{ comment.views }} views
                        </p>
                        <p class="text-muted">
                          <i class="far fa-comment-dots"></i>
                          {{ comment.comments }} comments
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- discussions END -->

          <!-- challenges START  -->
          <div v-else-if="challenges"></div>
          <!-- challenges END -->

          <!-- myAccount START -->
          <div v-else-if="myAccount">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Basic Information</h4>

                <form>
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      aria-describedby="nameHelp"
                      v-model="user.firstName"
                    />
                  </div>

                  <div class="form-group">
                    <label for="exampleInputEmail1">Email (Required)</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      v-model="user.email"
                    />
                    <small id="emailHelp" class="form-text text-muted"
                      >We'll never share your email with anyone else.</small
                    >
                  </div>

                  <div class="form-group">
                    <label for="username">Username (Required)</label>
                    <input
                      type="text"
                      class="form-control"
                      id="username"
                      v-model="user.username"
                    />
                  </div>

                  <div class="form-group">
                    <label for="country">Country</label>
                    <input
                      type="text"
                      class="form-control"
                      id="country"
                      v-model="user.country"
                    />
                  </div>

                  <div class="form-group">
                    <label for="website">Website</label>
                    <input
                      type="text"
                      class="form-control"
                      id="website"
                      v-model="user.website"
                    />
                  </div>

                  <div class="form-group">
                    <label for="instagram">Instagram</label>
                    <input
                      type="text"
                      class="form-control"
                      id="instagram"
                      v-model="user.instagram"
                    />
                  </div>

                  <button type="button" class="btn btn-blue text-white">
                    Update My Profile
                  </button>
                </form>
              </div>
            </div>
          </div>
          <!-- myAccount END -->
        </div>

        <div class="col-3">
          <template v-if="!myAccount">
            <div class="card">
              <img class="profile-dec" :src="blueShape" alt="" />
              <div class="card-body">
                <h6 class="my-account">My Profile</h6>
                <div class="d-flex flex-column align-items-center">
                  <img
                    width="70"
                    height="70"
                    class="circle-border d-flex"
                    :src="profile"
                    alt="profile"
                  />
                  <p class="font-weight-bold mt-4">{{ comments[0].name }}</p>
                  <p class="text-muted mt-2">London United Kingdom</p>
                  <div>
                    <i class="fab fa-instagram text-muted"></i>
                    <i class="fab fa-dribbble text-muted"></i>
                  </div>
                </div>

                <div>
                  <div
                    class="d-flex justify-content-between align-items-center mt-4"
                  >
                    <h6 class="mb-0">703 Badges</h6>
                    <i class="fas fa-certificate gold"></i>
                  </div>

                  <div
                    class="d-flex justify-content-between align-items-center mt-3"
                  >
                    <h6 class="mb-0">610 Badges</h6>
                    <i class="fas fa-certificate silver"></i>
                  </div>

                  <div
                    class="d-flex justify-content-between align-items-center mt-3"
                  >
                    <h6 class="mb-0">484 Badges</h6>
                    <i class="fas fa-certificate bronze"></i>
                  </div>

                  <button class="btn btn-blue btn-block text-white mt-4">
                    Edit
                  </button>
                </div>
              </div>
            </div>

            <div class="card mt-4">
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="card-title mb-0">User Information</h6>
                  <button class="btn btn-blue text-white pt-1 pb-1 pl-2 pr-2">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>

                <div class="education mt-5">
                  <div class="d-flex justify-content-between mb-3">
                    <h6 class="card-title mb-0">Education</h6>
                    <h6 class="card-title mb-0 text-blue">Add New</h6>
                  </div>

                  <h6 class="card-title">B.Cs - Information Engineering</h6>
                  <small class="text-muted"
                    >University of London United Kingdom 2018</small
                  >
                </div>

                <div class="certification mt-4">
                  <div class="d-flex justify-content-between mb-3">
                    <h6 class="card-title mb-0">Certification</h6>
                    <h6 class="card-title mb-0 text-blue">Add New</h6>
                  </div>
                  <small class="text-muted">Add your Certification</small>
                </div>
              </div>
            </div>
          </template>

          <template v-else>
            <div class="card">
              <div class="card-body">
                <h4 class="card-title mb-4">My Sttings</h4>
                <h6
                  v-on:click="turnSubMenus('basic')"
                  :class="[basicInfo ? 'text-blue' : '', 'card-title mt-5']"
                >
                  Basic Information
                </h6>
                <h6
                  v-on:click="turnSubMenus('password')"
                  :class="[
                    changePassword ? 'text-blue' : '',
                    'card-title mt-4',
                  ]"
                >
                  Change Password
                </h6>
                <h6 v-on:click="turnSubMenus('mail')" :class="[
                    mailSettings ? 'text-blue' : '',
                    'card-title mt-4',
                  ]">
                  Mail Settings
                </h6>
                <h6 v-on:click="turnSubMenus('linked')" :class="[
                    linkedAccounts ? 'text-blue' : '',
                    'card-title mt-4',
                  ]">
                  Linked Accounts
                </h6>
                <h6 v-on:click="turnSubMenus('delete')" :class="[
                    deleteAccounts ? 'text-blue' : '',
                    'card-title mt-4',
                  ]">
                  Delete Accounts
                </h6>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blueShape from "../../assets/blueShape.png";
import profile from "../../assets/profile.png";

export default {
  name: "Profile",
  data() {
    return {
      courses: false,
      discussions: false,
      challenges: false,
      myAccount: true,
      basicInfo: true,
      changePassword: false,
      mailSettings: false,
      linkedAccounts: false,
      deleteAccounts: false,
      blueShape: blueShape,

      profile: profile,
      user: {
        id: 0,
        firstName: "Randy",
        lastName: "Walsh",
        email: "randywalsh@agency.com",
        username: "RandyWalsh_76",
        country: "London United Kingdom",
        website: "randyWalsh.com",
        instagram: "randyWalsh_76",
      },
      comments: [
        {
          id: 0,
          name: "Randy Walsh",
          img: "https://www.bostonmagazine.com/wp-content/uploads/sites/2/2021/06/be-a-man-guy-t.jpg",
          time: 23,
          field: "Frontend Development",
          title: "Escriba, plugin for Copy&Paste selected overrides",
          text: "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl.",
          likes: 40,
          views: 75,
          comments: 5,
        },

        {
          id: 1,
          name: "Randy Walsh",
          img: "https://www.bostonmagazine.com/wp-content/uploads/sites/2/2021/06/be-a-man-guy-t.jpg",
          time: 32,
          field: "UI/UX Design",
          title: "Escriba, plugin for Copy&Paste selected overrides",
          text: "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl.",
          likes: 10,
          views: 41,
          comments: 7,
        },

        {
          id: 2,
          name: "Randy Walsh",
          img: "https://www.bostonmagazine.com/wp-content/uploads/sites/2/2021/06/be-a-man-guy-t.jpg",
          time: 39,
          field: "Backend Development",
          title: "Escriba, plugin for Copy&Paste selected overrides",
          text: "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl.",
          likes: -16,
          views: 46,
          comments: 2,
        },

        {
          id: 3,
          name: "Randy Walsh",
          img: "https://www.bostonmagazine.com/wp-content/uploads/sites/2/2021/06/be-a-man-guy-t.jpg",
          time: 45,
          field: "Frontend Development",
          title: "Escriba, plugin for Copy&Paste selected overrides",
          text: "Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl.",
          likes: 7,
          views: 15,
          comments: 10,
        },
      ],
    };
  },

  methods: {
    turnCourses() {
      this.courses = true;
      this.discussions = false;
      this.challenges = false;
      this.myAccount = false;
      return 1;
    },
    turnDiscussions() {
      this.courses = false;
      this.discussions = true;
      this.challenges = false;
      this.myAccount = false;
      return 1;
    },
    turnChallenges() {
      this.courses = false;
      this.discussions = false;
      this.challenges = true;
      this.myAccount = false;
      return 1;
    },
    turnMyAccount() {
      this.courses = false;
      this.discussions = false;
      this.challenges = false;
      this.myAccount = true;
      return 1;
    },

    turnSubMenus(menu) {
      if (menu == "basic") this.basicInfo = true;
      else this.basicInfo = false;
      if (menu == "password") this.changePassword = true;
      else this.changePassword = false;
      if (menu == "mail") this.mailSettings = true;
      else this.mailSettings = false;
      if (menu == "linked") this.linkedAccounts = true;
      else this.linkedAccounts = false;
      if (menu == "delete") this.deleteAccounts = true;
      else this.deleteAccounts = false;
    },
  },
};
</script>

<style scoped>
.fa-plus {
  font-size: 0.8rem;
}

.gold {
  color: #ffa70b;
  font-size: 1.7rem;
}

.silver {
  color: #adab9f;
  font-size: 1.7rem;
}

.bronze {
  color: #a78478;
  font-size: 1.7rem;
}

.fa-instagram,
.fa-dribbble {
  font-size: 1.5rem;
  margin: 10px 4px;
}

.my-account {
  position: absolute;
  top: 20px;
  left: 10px;
  color: white;
}

.profile-dec {
  height: 100px;
}

.btn-light {
  background-color: #aaa;
}

.comment-card:last-child {
  margin-bottom: 0 !important;
}
</style>
