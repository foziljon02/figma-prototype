<template>
  <div class="e-books">
    <div class="popular-books-section">
      <p class="font-weight-bold">Popular E-Book</p>
      <div class="popular-books row">
        <div class="col-4" v-for="book in popularBooks" :key="book.id">
          <div class="card">
            <div class="card-body d-flex">
              <div class="pic">
                <img
                  width="70"
                  height="86"
                  class="book-pic rounded"
                  :src="book.img"
                  alt="book"
                />
              </div>

              <div class="book-infos ml-3">
                <h6 class="card-title book-title">
                  {{ book.name }}
                </h6>

                <div class="d-flex align-items-center">
                  <img width="30" :src="book.instructor.img" alt="" />
                  <h6 class="author-name">{{ book.instructor.name }}</h6>
                </div>

                <div class="text-yellow">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="best-programming">
        <SectionLine text="Best Programming Books" link="View All" />
        <div class="books">
          <div class="d-flex best-books-line">
            <div class="mt-3 mr-3" v-for="book in bestBooks" :key="book.id">
              <div class="card">
                <div class="card-body">
                  <div class="book-img-container">
                    <img class="book-img" :src="book.img" alt="book" />
                  </div>

                  <div class="mt-2">
                    <h6 class="card-title line-overflow-2">
                      {{ book.name }}
                    </h6>

                    <div class="d-flex">
                      <img
                        width="30"
                        :src="book.instructor.img"
                        alt="instructor"
                      />
                      <p class="font-weight-bold">{{ book.instructor.name }}</p>
                    </div>

                    <div class="text-yellow mt-1">
                      <i style="font-size: 0.9rem" class="fas fa-star ml-1"></i>
                      <i style="font-size: 0.9rem" class="fas fa-star ml-1"></i>
                      <i style="font-size: 0.9rem" class="fas fa-star ml-1"></i>
                      <i style="font-size: 0.9rem" class="fas fa-star ml-1"></i>
                      <i style="font-size: 0.9rem" class="far fa-star ml-1"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="best-programming">
        <SectionLine text="Best Design Books" link="View All" />
        <div class="books">
          <div class="d-flex best-books-line">
            <div class="mt-3 mr-3" v-for="book in bestBooks" :key="book.id">
              <div class="card">
                <div class="card-body">
                  <div class="book-img-container">
                    <img class="book-img" :src="book.img" alt="book" />
                  </div>

                  <div class="mt-2">
                    <h6 class="card-title line-overflow-2">
                      {{ book.name }}
                    </h6>

                    <div class="d-flex">
                      <img
                        width="30"
                        :src="book.instructor.img"
                        alt="instructor"
                      />
                      <p class="font-weight-bold">{{ book.instructor.name }}</p>
                    </div>

                    <div class="text-yellow mt-1">
                      <i style="font-size: 0.9rem" class="fas fa-star ml-1"></i>
                      <i style="font-size: 0.9rem" class="fas fa-star ml-1"></i>
                      <i style="font-size: 0.9rem" class="fas fa-star ml-1"></i>
                      <i style="font-size: 0.9rem" class="fas fa-star ml-1"></i>
                      <i style="font-size: 0.9rem" class="far fa-star ml-1"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../../assets/logo.png";
import SectionLine from "../SectionLine.vue";

export default {
  components: { SectionLine },
  name: "EBooks",
  data() {
    return {
      bestBooks: [
        {
          id: 0,
          img: "https://images-na.ssl-images-amazon.com/images/I/81EOoULpRsL.jpg",
          name: "Programming Visual illusions for everyone",
          instructor: {
            name: "Brad Traversy",
            img: logo,
          },
          rating: 4,
        },

        {
          id: 1,
          img: "http://img.tradepub.com/free/w_webd02/images/w_webd02c8.jpg",
          name: "CSS Programming Cook Book : Hot recipes for css Development",
          instructor: {
            name: "InsideCode M",
            img: logo,
          },
          rating: 4,
        },

        {
          id: 2,
          img: "https://www.perlego.com/books/RM_Books/packt_pub_vpnckweg/9781788474528.jpg",
          name: "Firebase Cookbook: Over 70 firebase consepts that are essential to learn",
          instructor: {
            name: "Brad Traversy",
            img: logo,
          },
          rating: 4,
        },

        {
          id: 3,
          img: "https://images-na.ssl-images-amazon.com/images/I/81EOoULpRsL.jpg",
          name: "Programming Visual illusions for everyone",
          instructor: {
            name: "Brad Traversy",
            img: logo,
          },
          rating: 4,
        },

        {
          id: 4,
          img: "http://img.tradepub.com/free/w_webd02/images/w_webd02c8.jpg",
          name: "CSS Programming Cook Book : Hot recipes for css Development",
          instructor: {
            name: "InsideCode M",
            img: logo,
          },
          rating: 4,
        },

        {
          id: 5,
          img: "https://images-na.ssl-images-amazon.com/images/I/81EOoULpRsL.jpg",
          name: "Firebase Cookbook: Over 70 firebase consepts that are essential to learn",
          instructor: {
            name: "Brad Traversy",
            img: logo,
          },
          rating: 4,
        },

        {
          id: 6,
          img: "https://images-na.ssl-images-amazon.com/images/I/81EOoULpRsL.jpg",
          name: "Programming Visual illusions for everyone",
          instructor: {
            name: "Brad Traversy",
            img: logo,
          },
          rating: 4,
        },

        {
          id: 7,
          img: "https://images-na.ssl-images-amazon.com/images/I/81EOoULpRsL.jpg",
          name: "Vue.js 2 and Bootstrap 4 Web development course for all levels",
          instructor: {
            name: "InsideCode M",
            img: logo,
          },
          rating: 4,
        },

        {
          id: 8,
          img: "https://images-na.ssl-images-amazon.com/images/I/81EOoULpRsL.jpg",
          name: "Firebase Cookbook: Over 70 firebase consepts that are essential to learn",
          instructor: {
            name: "Brad Traversy",
            img: logo,
          },
          rating: 4,
        },
      ],
      popularBooks: [
        {
          id: 9,
          img: "https://images-na.ssl-images-amazon.com/images/I/81EOoULpRsL.jpg",
          name: "Vue2 Basics : Learn the basics of one of the most popular framework",
          instructor: {
            name: "Brad Traversy",
            img: logo,
          },
          rating: 4,
        },

        {
          id: 10,
          img: "http://img.tradepub.com/free/w_webd02/images/w_webd02c8.jpg",
          name: "CSS Programming Cook Book : Hot recipes for css Development",
          instructor: {
            name: "InsideCode M",
            img: logo,
          },
          rating: 4,
        },

        {
          id: 11,
          img: "https://images-na.ssl-images-amazon.com/images/I/81EOoULpRsL.jpg",
          name: "Firebase Cookbook: Over 70 firebase consepts that are essential to learn",
          instructor: {
            name: "Brad Traversy",
            img: logo,
          },
          rating: 4,
        },
      ],
    };
  },
};
</script>

<style scoped>

.best-programming .books {
    overflow-x: auto;
} 

.best-programming .books::-webkit-scrollbar {
  width: 0;
}

/* Track */
.best-programming .books::-webkit-scrollbar-track {
  background: none;
}

/* Handle */
.best-programming .books::-webkit-scrollbar-thumb {
  background: transparent;
}

/* Handle on hover */
.best-programming .books::-webkit-scrollbar-thumb:hover {
  background: transparent;
}

.book-title {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.author-name {
  font-size: 0.9rem;
}

.book-img {
  width: 240px;
  height: 310px;
}

.line-overflow-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
