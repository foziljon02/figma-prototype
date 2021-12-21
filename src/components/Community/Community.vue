<template>
  <div>
    <div class="community-nav d-flex justify-content-between mb-5">
      <p class="text-blue ml-1">
        All Discussions <span class="font-weight-bold">"18.000 Questions"</span>
      </p>
      <div class="d-flex">
        <p class="ml-5">Latest</p>
        <p class="ml-5">Unanswered</p>
        <p class="ml-5">Trending</p>
        <p class="ml-5">Popular This Week</p>
        <p class="ml-5">Popular This Month</p>
      </div>
    </div>

    <div class="row">
      <div class="col-8">
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
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <h6 class="card-title m-0">{{ comment.name }}</h6>
                  <small class="text-muted mt-0"
                    >Asked {{ comment.time }}m ago</small
                  >
                </div>

                <div>
                  <p class="text-danger text-bg-red-dim p-1 rounded">{{ comment.field }}</p>
                </div>
              </div>

              <div>
                <h6 class="card-title mt-3">
                  {{ comment.title }}
                </h6>

                <p class="card-text text-muted">
                  {{ comment.text }}
                </p>

                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center mt-4">
                    <button
                      v-on:click="comment.likes++"
                      :class="[comment.likes > 0 ? 'btn-blue' : 'btn-light' ,'btn circle-border mr-3']"
                    >
                      <i class="far fa-thumbs-up text-white"></i>
                    </button>
                    <p class="text-blue mr-3 text-center" style="width: 30px" >{{ comment.likes }}</p>
                    <button
                      v-on:click="comment.likes--"
                      :class="[comment.likes < 0 ? 'btn-danger' : 'btn-light' ,'btn circle-border']"
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

      <div class="col-4">
        <div class="card">
          <div class="card-body bg-blue rounded">
            <p class="text-white text-center">Start New Discussion</p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h6 class="card-title">Discussion</h6>
            <h6 class="text-blue mt-5">
              <i class="far fa-comment-dots"></i> All Discussions
            </h6>
            <div class="mt-4">
              <h6><i class="far fa-star"></i> Following</h6>
            </div>

            <div class="d-flex align-items-center justify-content-between mt-4">
              <h6>
                <i class="fas fa-globe-americas text-blue"></i> UI/UX Design
              </h6>
              <p class="text-blue text-bg-blue-dim pl-2 pr-2 rounded">354</p>
            </div>

            <div class="d-flex align-items-center justify-content-between mt-3">
              <h6>
                <i class="fas fa-globe-americas text-yellow"></i> Angular Js
              </h6>
              <p class="text-yellow text-bg-yellow-dim pl-2 pr-2 rounded">
                684
              </p>
            </div>

            <div class="d-flex align-items-center justify-content-between mt-3">
              <h6><i class="fas fa-globe-americas text-danger"></i> Laravel</h6>
              <p class="text-danger text-bg-red-dim pl-2 pr-2 rounded">197</p>
            </div>

            <div class="d-flex align-items-center justify-content-between mt-3">
              <h6><i class="fas fa-globe-americas text-success"></i> Vue</h6>
              <p class="text-green text-bg-green-dim pl-2 pr-2 rounded">197</p>
            </div>

            <div class="d-flex align-items-center justify-content-between mt-3">
              <h6>
                <i class="fas fa-globe-americas text-primary"></i> Bootstrap
              </h6>
              <p class="text-primary text-bg-blue-dim pl-2 pr-2 rounded">845</p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h6 class="card-title">Pipular Tags</h6>

            <div class="row m-0">
              <p class="ml-2 text-blue text-bg-blue-dim rounded pl-1 pr-1 mb-3">
                sketch
              </p>
              <p class="ml-2 text-blue text-bg-blue-dim rounded pl-1 pr-1 mb-3">
                algular
              </p>
              <p class="ml-2 text-blue text-bg-blue-dim rounded pl-1 pr-1 mb-3">
                bootstrap
              </p>
              <p class="ml-2 text-blue text-bg-blue-dim rounded pl-1 pr-1 mb-3">
                vue
              </p>
              <p class="ml-2 text-blue text-bg-blue-dim rounded pl-1 pr-1 mb-3">
                plugin
              </p>
              <p class="ml-2 text-blue text-bg-blue-dim rounded pl-1 pr-1 mb-3">
                symbols
              </p>
              <p class="ml-2 text-blue text-bg-blue-dim rounded pl-1 pr-1 mb-3">
                text
              </p>
              <p class="ml-2 text-blue text-bg-blue-dim rounded pl-1 pr-1 mb-3">
                html 5
              </p>
              <p class="ml-2 text-blue text-bg-blue-dim rounded pl-1 pr-1 mb-3">
                css 3
              </p>
              <p class="ml-2 text-blue text-bg-blue-dim rounded pl-1 pr-1 mb-3">
                javascript
              </p>

              <p class="ml-2 text-blue text-bg-blue-dim rounded pl-1 pr-1 mb-3">
                sketch
              </p>
              <p class="ml-2 text-blue text-bg-blue-dim rounded pl-1 pr-1 mb-3">
                algular
              </p>
              <p class="ml-2 text-blue text-bg-blue-dim rounded pl-1 pr-1 mb-3">
                bootstrap
              </p>
              <p class="ml-2 text-blue text-bg-blue-dim rounded pl-1 pr-1 mb-3">
                vue
              </p>

              <p class="ml-2 text-blue text-bg-blue-dim rounded pl-1 pr-1 mb-3">
                sketch
              </p>
              <p class="ml-2 text-blue text-bg-blue-dim rounded pl-1 pr-1 mb-3">
                algular
              </p>
              <p class="ml-2 text-blue text-bg-blue-dim rounded pl-1 pr-1 mb-3">
                bootstrap
              </p>
              <p class="ml-2 text-blue text-bg-blue-dim rounded pl-1 pr-1 mb-3">
                vue
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Community",
  data() {
    return {
      comments: [
        {
          id: 0,
          name: "Nocholas Simmons",
          img: "https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859",
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
          name: "Michel Jeckson",
          img: "https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg",
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
          name: "Jorge Nikken",
          img: "https://static.toiimg.com/photo/83890830/83890830.jpg?v=3",
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
          name: "Nocholas Simmons",
          img: "https://www.muscleandfitness.com/wp-content/uploads/2015/08/what_makes_a_man_more_manly_main0.jpg?quality=86&strip=all",
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
};
</script>

<style scoped>
.btn-light {
  background-color: #aaa;
}

.comment-card:last-child {
  margin-bottom: 0 !important;
}
</style>
