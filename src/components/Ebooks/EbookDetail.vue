<template>
  <div class="e-book-detail">
    <main-template currentPage="eBook">
      <div class="h6">Popular E-book</div>
      <div class="row">
        <div class="col-3">
          <div class="my-separator rounded">
            <div class="my-card-body">
              <div class="card">
                <img
                  class="e-book-detail-img rounded"
                  src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/601074f1f2695e0489881421_6002086f72b727cdc501cd31_web-design-101.jpeg"
                  alt="book"
                />
                <h6 class="card-title mt-2">
                  UX Design : The definitive Beginner’s Guide
                </h6>
              </div>

              <div class="d-flex align-items-center mt-4">
                <div class="instructor d-flex align-items-center">
                  <img width="30" :src="fire" alt="instructor logo" />
                  <p style="font-size: 0.9rem" class="font-weight-bold">
                    Brad Traversy
                  </p>
                </div>

                <div class="rating text-yellow d-flex">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>

              <div class="mt-5">
                <p>200 Visited</p>
                <p>12 Dec 2019 Published</p>
                <p>300 Downloaded</p>
              </div>

              <div class="d-flex align-items-center mt-5 buttons-container">
                <button class="btn my-btn-light btn-block">Read</button>
                <button class="btn btn-primary btn-block mt-0 ml-1">Buy</button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-9 bg-white rounded">
          <div class="">
            <div class="my-card-body">
              <div class="course-details-nav-sections">
                <div class="my-navbar d-flex">
                  <p
                    v-on:click="turnOverview()"
                    :class="[
                      overview ? 'current-nav' : '',
                      'my-nav-item text-center',
                      'pb-3',
                    ]"
                  >
                    Overview
                  </p>
                  <p
                    v-on:click="turnFaq()"
                    :class="[
                      faq ? 'current-nav' : '',
                      'my-nav-item text-center',
                    ]"
                  >
                    FAQ
                  </p>
                  <p
                    v-on:click="turnAnnouncements()"
                    :class="[
                      announcements ? 'current-nav' : '',
                      'my-nav-item text-center',
                      'pb-3',
                    ]"
                  >
                    Announcements
                  </p>
                  <p
                    v-on:click="turnReviews()"
                    :class="[
                      reviews ? 'current-nav' : '',
                      'my-nav-item text-center',
                      'pb-3',
                    ]"
                  >
                    Reviews
                  </p>
                </div>

                <!-- OVERVIEW START -->
                <div v-if="overview">
                  <div class="overview">
                    <p class="my-card-title mt-4 mb-2">
                      Learn The Basics of Vue Js
                    </p>

                    <p class="card-text text-muted">
                      Description Lorem ipsum dolor sit amet, consectetuer
                      adipiscing elit, sed diam nonummy nibh euismod tincidunt
                      ut laoreet dolore magna aliquam erat volutpat.
                      <br />
                      <br />
                      Ut wisi enim ad minim veniam, quis nostrud exerci tation
                      ullamcorper Nam liber tempor cum soluta nobis eleifend
                      option congue nihil imperdiet doming id quod mazim
                      placerat facer possim assum. Lorem ipsum dolor sit amet,
                      consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod quis nostrud exerci tation ullamcorper tincidunt
                      ut laoreet dolore magna aliquam erat volutpat.
                      <br />
                      <br />
                      Ut wisi enim ad minim veniam, quis nostrud exerci tation
                      ullamcorper suscipit lobortis nisl ut aliquip ex ea
                      commodo consequat.
                      <br />
                      <br />
                      Lorem ipsum dolor mazim placerat facer possim assum. Lorem
                      ipsum dolor sit amet, consectetuer adipiscing elit, sed
                      diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat.
                      <br />
                      <br />
                      Ut wisi enim ad minim veniam,suscipit lobortis nisl ut
                      aliquip ex ea commodo consequat Assum consectetuer
                      adipiscing elit, sed diam nonummy nibh euismod tincidunt
                      Diam nonummy nibh euismod erat volutpat. Ut wisi enim ad
                      minim veniam, quis nostrud exerci tation ullamcorper
                      suscipit lobortis nisl ut aliquip ex ea commodo consequat
                      laoreet dolore magna aliquam erat volutpat. Ut wisi enim
                      ad minim veniam
                      <br />
                      <br />
                      Book Information
                      <br />
                      Page Count: 118
                    </p>
                  </div>
                </div>
                <!-- OVERVIEW END -->

                <!-- FAQ START -->
                <div v-else-if="faq"></div>
                <!-- FAQ END -->

                <!-- ANNOUNCEMENTS START  -->
                <div v-else-if="announcements"></div>
                <!-- ANNOUNCEMENTS END -->

                <!-- REVIEWS START -->
                <div v-else-if="reviews"></div>
                <!-- REVIEWS END -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </main-template>
  </div>
</template>

<script>
import fire from "../../assets/fire.png";
import MainTemplate from "../MainTemplate/MainTemplate.vue";

export default {
  name: "EbookDetail",
  components: { MainTemplate },
  data() {
    MainTemplate;
    return {
      fire: fire,
      overview: true,
      faq: false,
      announcements: false,
      reviews: false,
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
.e-book-detail-img {
  height: 300px;
}

.rating {
  font-size: 0.8rem;
}

.my-btn-light {
  background: #eee;
}

.my-nav-item {
  margin-right: 50px !important;
}

.my-nav-item:hover {
  cursor: pointer;
}

.current-nav {
  border-bottom: 3px solid #2f3ced;
}

.my-card-body {
  padding: 15px;
}

.my-card-title {
  font-weight: bold;
}

.buttons-container {
  position: relative;
  bottom: 0;
}

.my-separator {
  background: #fff;
  padding: 5px;
}
</style>
