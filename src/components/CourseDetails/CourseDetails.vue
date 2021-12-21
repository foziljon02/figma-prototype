<template>
  <div class="row">
    <div class="col-9">
      <!-- <div style="width: 100%, height: 10px; background: black" class="test">k</div> -->
      <div class="video">
        <iframe
          class="youtube-video"
          width="900"
          height="405"
          src="https://www.youtube.com/embed/videoseries?list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div class="course-details-nav-sections">
        <div class="my-navbar d-flex mb-3">
          <p
            v-on:click="turnOverview()"
            :class="[overview ? 'current-nav' : '', 'my-nav-item text-center']"
          >
            Overview
          </p>
          <p
            v-on:click="turnFaq()"
            :class="[faq ? 'current-nav' : '', 'my-nav-item text-center']"
          >
            FAQ
          </p>
          <p
            v-on:click="turnAnnouncements()"
            :class="[
              announcements ? 'current-nav' : '',
              'my-nav-item text-center',
            ]"
          >
            Announcements
          </p>
          <p
            v-on:click="turnReviews()"
            :class="[reviews ? 'current-nav' : '', 'my-nav-item text-center']"
          >
            Reviews
          </p>
        </div>

        <!-- OVERVIEW START -->
        <div v-if="overview">
          <div class="overview">
            <JoinCard />

            <div>
              <h6 class="mt-3">About Course</h6>
              <p class="text-muted">
                Donec facilisis tortor ut augue lacinia, at viverra est semper.
                Sed sapien metus, scelerisque nec pharetra id, tempor a tortor.
                Pellentesque non dignissim neque. Ut porta viverra est, ut
                dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tincidunt
                turpis. Integer ac enim pellentesque, adipiscing metus id,
                pharetra odio. Donec bibendum nunc sit amet tortor scelerisque
                luctus et sit amet mauris. Suspendisse felis sem, condimentum
                ullamcorper est sit amet, molestie mollis nulla. Etiam lorem
                orci, consequat ac magna quis, facilisis vehicula neque.
              </p>
              <h6 class="mt-3">What You'll Learn</h6>

              <ul class="d-flex ml-3 text-muted my-ul">
                <div>
                  <li>Setting up the environment</li>
                  <li>Advanced HTML Practices</li>
                  <li>Build a portfolio website</li>
                  <li>Responsive Designs</li>
                </div>

                <div class="ml-5 pl-5">
                  <li>Understand HTML Programming</li>
                  <li>Code HTML</li>
                  <li>Start building beautiful websites</li>
                </div>
              </ul>

              <h6 class="mt-3">
                Here Is Exactly What We Cover In This Course:
              </h6>
              <p class="text-muted">
                Donec facilisis tortor ut augue lacinia, at viverra est semper.
                Sed sapien metus, scelerisque nec pharetra id, tempor a tortor.
                Pellentesque non dignissim neque. Ut porta viverra est, ut
                dignissim elit elementum ...
              </p>
            </div>
          </div>
        </div>
        <!-- OVERVIEW END -->

        <!-- FAQ START -->
        <div v-else-if="faq">
          <div class="faq">
            <JoinCard />
            <div class="card mt-5">
              <div class="faq-question-title card-body">
                <div
                  data-toggle="collapse"
                  href="#multiCollapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1"
                  class="card-title d-flex align-items-center justify-content-between"
                >
                  <h5 class="">Html Introduction</h5>
                </div>
                <p
                  class="test text-muted collapse multi-collapse"
                  id="multiCollapseExample1"
                >
                  The primary goal of this quick start guide is to introduce you
                  to Unreal Engine 4`s (UE4) development environment. By the end
                  of this guide, you`ll know how to set up and develop C++
                  Projects in UE4. This guide shows you how to create a new
                  Unreal Engine project, add a new C++ class to it, compile the
                  project, and add an instance of a new class to your level. By
                  the time you reach the end of this guide, you`ll be able to
                  see your programmed Actor floating above a table in the level
                </p>
              </div>
            </div>

            <div class="card mt-2">
              <div class="faq-question-title card-body">
                <div
                  data-toggle="collapse"
                  href="#multiCollapse2"
                  role="button"
                  aria-expanded="false"
                  aria-controls="multiCollapse2"
                  class="card-title d-flex align-items-center justify-content-between"
                >
                  <h5 class="">Some Special Tags</h5>
                </div>
                <p
                  class="test text-muted collapse multi-collapse"
                  id="multiCollapse2"
                >
                  The primary goal of this quick start guide is to introduce you
                  to Unreal Engine 4`s (UE4) development environment. By the end
                  of this guide, you`ll know how to set up and develop C++
                  Projects in UE4. This guide shows you how to create a new
                  Unreal Engine project, add a new C++ class to it, compile the
                  project, and add an instance of a new class to your level. By
                  the time you reach the end of this guide, you`ll be able to
                  see your programmed Actor floating above a table in the level
                </p>
              </div>
            </div>

            <div class="card mt-2">
              <div class="faq-question-title card-body">
                <div
                  data-toggle="collapse"
                  href="#multiCollapse3"
                  role="button"
                  aria-expanded="false"
                  aria-controls="multiCollapse3"
                  class="card-title d-flex align-items-center justify-content-between"
                >
                  <h5 class="">Your First webpage</h5>
                </div>
                <p
                  class="test text-muted collapse multi-collapse"
                  id="multiCollapse3"
                >
                  The primary goal of this quick start guide is to introduce you
                  to Unreal Engine 4`s (UE4) development environment. By the end
                  of this guide, you`ll know how to set up and develop C++
                  Projects in UE4. This guide shows you how to create a new
                  Unreal Engine project, add a new C++ class to it, compile the
                  project, and add an instance of a new class to your level. By
                  the time you reach the end of this guide, you`ll be able to
                  see your programmed Actor floating above a table in the level
                </p>
              </div>
            </div>

            <div class="card mt-2">
              <div class="faq-question-title card-body">
                <div
                  data-toggle="collapse"
                  href="#multiCollapse4"
                  role="button"
                  aria-expanded="false"
                  aria-controls="multiCollapse4"
                  class="card-title d-flex align-items-center justify-content-between"
                >
                  <h5 class="">Bootstrap Introduction</h5>
                </div>
                <p
                  class="test text-muted collapse multi-collapse"
                  id="multiCollapse4"
                >
                  The primary goal of this quick start guide is to introduce you
                  to Unreal Engine 4`s (UE4) development environment. By the end
                  of this guide, you`ll know how to set up and develop C++
                  Projects in UE4. This guide shows you how to create a new
                  Unreal Engine project, add a new C++ class to it, compile the
                  project, and add an instance of a new class to your level. By
                  the time you reach the end of this guide, you`ll be able to
                  see your programmed Actor floating above a table in the level
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- FAQ END -->

        <!-- ANNOUNCEMENTS START  -->
        <div v-else-if="announcements">
          <div class="announcements">
            <JoinCard />
            <div class="profile-card card mt-4">
              <div class="card-body d-flex">
                <div>
                  <img
                    width="50"
                    height="50"
                    class="circle-border"
                    src="https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&w=600&hash=9D5E5FCBEE00EB562DCD8AC8FDA8433D"
                    alt="instructor"
                  />
                </div>

                <div class="ml-3">
                  <h6>Wayne Patel</h6>
                  <p style="font-size: 0.9rem" class="text-muted">
                    Instructor | 3 years ago
                  </p>
                </div>
              </div>
            </div>

            <div class="card mt-1">
              <div class="card-body">
                <div class="card-text">
                  <p class="text muted">
                    Cras quis nulla commodo, aliquam lectus sed, blandit augue.
                    Cras ullamcorper bibendum bibendum. Duis tincidunt urna non
                    pretium porta. Nam condimentum vitae ligula vel ornare.
                    Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at
                    condimentum nisl, vitae sagittis orci. Donec id dignissim
                    nunc. Donec elit ante, eleifend a dolor et, venenatis
                    facilisis dolor. In feugiat orci odio, sed lacinia sem
                    elementum quis. Aliquam consectetur, eros et vulputate
                    euismod, nunc leo tempor lacus, ac rhoncus neque eros nec
                    lacus. Cras lobortis molestie faucibus. Cras quis nulla
                    commodo, aliquam lectus sed, blandit augue. Cras ullamcorper
                    bibendum bibendum. Duis tincidunt urna non pretium porta.
                    Nam condimentum vitae ligula vel ornare. Phasellus at semper
                    turpis. Nunc eu tellus tortor. Etiam at condimentum nisl,
                    vitae sagittis orci. Donec id dignissim nunc. Donec elit
                    ante, eleifend a dolor et, venenatis facilisis dolor. In
                    feugiat orci odio, sed lacinia sem elementum quis. Aliquam
                    consectetur, eros et vulputate euismod, nunc leo tempor
                    lacus, ac rhoncus neque eros nec lacus. Cras lobortis
                    molestie faucibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ANNOUNCEMENTS END -->

        <!-- REVIEWS START -->
        <div v-else-if="reviews">
          <div class="reviews">
            <JoinCard />
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">HTML Introduction</h5>
              </div>
            </div>

            <div class="card mt-1">
              <div
                class="card-body d-flex justify-content-between align-items-center"
              >
                <div class="d-flex justify-content-center flex-column">
                  <h4 class="text-center">4.4</h4>
                  <div class="">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                  <h6 class="text-center mt-2">Rating</h6>
                </div>

                <div class="d-flex align-items-center">
                  <div class="tracks">
                    <div class="track position-relative">
                      <div class="stick first-stick position-absolute"></div>
                    </div>

                    <div class="track position-relative">
                      <div class="stick second-stick position-absolute"></div>
                    </div>

                    <div class="track position-relative">
                      <div class="stick third-stick position-absolute"></div>
                    </div>

                    <div class="track position-relative">
                      <div class="stick forth-stick position-absolute"></div>
                    </div>

                    <div class="track position-relative">
                      <div class="stick fifth-stick position-absolute"></div>
                    </div>
                  </div>
                  <div class="rates ml-5">
                    <div class="rate d-flex">
                      <div class="text-yellow">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="ml-3">
                        <p>0.80%</p>
                      </div>
                    </div>

                    <div class="rate d-flex">
                      <div class="text-yellow">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                      </div>
                      <div class="ml-3">
                        <p>0.10%</p>
                      </div>
                    </div>

                    <div class="rate d-flex">
                      <div class="text-yellow">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                      </div>
                      <div class="ml-3">
                        <p>2.60%</p>
                      </div>
                    </div>

                    <div class="rate d-flex">
                      <div class="text-yellow">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                      </div>
                      <div class="ml-3">
                        <p>1.38%</p>
                      </div>
                    </div>

                    <div class="rate d-flex">
                      <div class="text-yellow">
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                      </div>
                      <div class="ml-3">
                        <p>0.77%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="review-card card mt-2">
              <div class="card-body">
                <h5 class="card-title">Reviews (341)</h5>

                <div class="mt-5">
                  <div
                    class="profile d-flex align-items-center justify-content-between"
                  >
                    <div class="profile d-flex align-items-center">
                      <div>
                        <img
                          width="50"
                          height="50"
                          class="circle-border"
                          src="https://thispersondoesnotexist.com/image"
                          alt=""
                        />
                      </div>
                      <h5 class="card-title ml-3">
                        Ashley Makkins
                        <small class="d-block text-muted"
                          >Student | 3 years ago</small
                        >
                      </h5>
                    </div>

                    <div class="user-rating text-yellow">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="far fa-star"></i>
                    </div>
                  </div>
                  <p class="card-text text-muted mt-3">
                    Cras quis nulla commodo, aliquam lectus sed, blandit augue.
                    Cras ullamcorper bibendum bibendum. Duis tincidunt urna non
                    pretium porta. Nam condimentum vitae ligula vel ornare.
                    Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at
                    condimentum nisl, vitae sagittis orci. Donec id dignissim
                    nunc.
                  </p>
                </div>

                <div class="mt-5">
                  <div
                    class="profile d-flex align-items-center justify-content-between"
                  >
                    <div class="profile d-flex align-items-center">
                      <div>
                        <img
                          width="50"
                          height="50"
                          class="circle-border"
                          src="https://thispersondoesnotexist.com/image"
                          alt=""
                        />
                      </div>
                      <h5 class="card-title ml-3">
                        Ashley Makkins
                        <small class="d-block text-muted"
                          >Student | 3 years ago</small
                        >
                      </h5>
                    </div>

                    <div class="user-rating text-yellow">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                      <i class="far fa-star"></i>
                    </div>
                  </div>
                  <p class="card-text text-muted mt-3">
                    Cras quis nulla commodo, aliquam lectus sed, blandit augue.
                    Cras ullamcorper bibendum bibendum. Duis tincidunt urna non
                    pretium porta. Nam condimentum vitae ligula vel ornare.
                    Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at
                    condimentum nisl, vitae sagittis orci. Donec id dignissim
                    nunc.
                  </p>
                </div>

                <div class="mt-5">
                  <div
                    class="profile d-flex align-items-center justify-content-between"
                  >
                    <div class="profile d-flex align-items-center">
                      <div>
                        <img
                          width="50"
                          height="50"
                          class="circle-border"
                          src="https://thispersondoesnotexist.com/image"
                          alt=""
                        />
                      </div>
                      <h5 class="card-title ml-3">
                        Ashley Makkins
                        <small class="d-block text-muted"
                          >Student | 3 years ago</small
                        >
                      </h5>
                    </div>

                    <div class="user-rating text-yellow">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                  <p class="card-text text-muted mt-3">
                    Cras quis nulla commodo, aliquam lectus sed, blandit augue.
                    Cras ullamcorper bibendum bibendum. Duis tincidunt urna non
                    pretium porta. Nam condimentum vitae ligula vel ornare.
                    Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at
                    condimentum nisl, vitae sagittis orci. Donec id dignissim
                    nunc.
                  </p>
                </div>

                <h5 class="card-title mt-5">Give Feedback</h5>
                <form class="mt-4" action="">
                  <div class="d-flex form-mod">
                    <div class="form-group my-form-group">
                      <label class="font-weight-bold" for="#fullName"
                        >Full Name</label
                      >
                      <input
                        id="fullName"
                        type="text"
                        class="form-control"
                        placeholder="e.g Bruce Morgan"
                      />
                    </div>

                    <div class="form-group my-form-group ml-4">
                      <label class="font-weight-bold" for="#email">Email</label>
                      <input
                        id="email"
                        type="text"
                        class="form-control"
                        placeholder="e.g example@gmail.com"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      placeholder="Your Description"
                    ></textarea>
                  </div>

                  <button type="button" class="btn btn-primary">
                    Submit Comment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- REVIEWS END -->
      </div>
    </div>

    <div class="col-3 bg-white rounded">
      <h6 class="mt-3">Course content</h6>
      <div class="mt-5">
        <div
          :class="[
            content.on ? 'bg-blue text-white pt-4 pb-4 pl-3 pr-3' : '',
            'd-flex mt-1 p-1',
          ]"
          v-for="content in contents"
          :key="content.id"
        >
          <input
            v-if="content.checkbox"
            type="checkbox"
            class="mr-1"
            style="zoom: 1.5; margin-top: 1px"
            :class="[content.checkbox ? 'ml-3' : '']"
          />
          <div>
            <div style="width: 250px" class="d-flex justify-content-between">
              <h6>Section 0 | Intro</h6>
              <h6
                v-if="!content.checkbox"
                :class="content.on ? 'down-arrow' : ''"
              >
                ^
              </h6>
            </div>
            <div class="d-flex align-items-center">
              <div
                class="play-icon bg-warning circle-border d-flex align-items-center justify-content-center"
              >
                <i class="fas fa-play text-white"></i>
              </div>
              <p
                :class="[
                  !content.on ? 'text-muted' : 'font-weight-normal',
                  'pl-1',
                ]"
              >
                1 video | 20 min
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JoinCard from "../JoinCard.vue";

export default {
  components: { JoinCard },
  name: "CourseDetails",
  data() {
    return {
      overview: true,
      faq: false,
      announcements: false,
      reviews: false,
      contents: [
        {
          id: 0,
          checkbox: false,
          on: true,
        },

        {
          id: 1,
          checkbox: true,
          on: false,
        },

        {
          id: 2,
          checkbox: true,
          on: false,
        },

        {
          id: 3,
          checkbox: true,
          on: false,
        },

        {
          id: 4,
          checkbox: true,
          on: false,
        },

        {
          id: 5,
          checkbox: true,
          on: false,
        },

        {
          id: 6,
          checkbox: true,
          on: false,
        },

        {
          id: 7,
          checkbox: true,
          on: false,
        },

        {
          id: 8,
          checkbox: false,
          on: false,
        },

        {
          id: 9,
          checkbox: false,
          on: false,
        },

        {
          id: 10,
          checkbox: false,
          on: false,
        },

        {
          id: 11,
          checkbox: false,
          on: false,
        },
      ],
    };
  },

  methods: {
    turnOverview() {
      this.overview = true;
      this.faq = false;
      this.announcements = false;
      this.reviews = false;
      return 1;
    },
    turnFaq() {
      this.overview = false;
      this.faq = true;
      this.announcements = false;
      this.reviews = false;
      return 1;
    },
    turnAnnouncements() {
      this.overview = false;
      this.faq = false;
      this.announcements = true;
      this.reviews = false;
      return 1;
    },
    turnReviews() {
      this.overview = false;
      this.faq = false;
      this.announcements = false;
      this.reviews = true;
      return 1;
    },
  },
};
</script>

<style scoped>
.youtube-video {
  border-radius: 10px !important;
}

.fa-play {
  font-size: 0.5rem;
}

.play-icon {
  width: 16px;
  height: 17px;
  background: black;
}

.down-arrow {
  transform: rotateX(180deg);
}

.my-ul {
  line-height: 38px;
  margin-left: 23px !important;
}

.faq-question-title {
  padding-bottom: 0 !important;
}

.track {
  background-color: rgba(81, 91, 229, 0.1207);
  border-radius: 10px;
  height: 8px;
  width: 500px;
  margin: 20px 0;
}

.stick {
  background-color: #2f3ced;
  border-radius: 10px;
  height: 8px;
}

.first-stick {
  width: 400px;
}

.second-stick {
  width: 250px;
}

.third-stick {
  width: 200px;
}

.forth-stick {
  width: 100px;
}

.fifth-stick {
  width: 50px;
}

.rate {
  margin: 4px 0;
}

#fullName,
#email {
  border: 1px solid #ddd !important;
  padding: 22px;
  width: 421px;
}
</style>
