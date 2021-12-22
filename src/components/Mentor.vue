<template>
  <div class="card my-card">
    <div class="card-body centerify equal-size text-center">
      <div class="profile d-flex align-items-center my-font">
        <img
          width="30"
          height="30"
          class="rounded-img"
          src="https://thispersondoesnotexist.com/image"
          alt="person"
        />
        <p class="name font-weight-bold ml-2">{{ mentor.name }}</p>
      </div>

      <div class="speciality my-font">
        <span
          :class="[
            mentor.industry == 'UI/UX Design'
              ? 'text-bg-yellow-dim text-yellow'
              : '',
            mentor.industry == 'Frontend Development'
              ? 'text-danger text-bg-red-dim'
              : '',
            mentor.industry == 'Backend Development'
              ? 'text-bg-blue-dim text-blue'
              : '',
            mentor.industry == 'Android Development'
              ? 'text-bg-green-dim text-success'
              : '',
            'rounded p-1 pl-2 pr-2',
          ]"
        >
          {{ mentor.industry }}
        </span>
      </div>

      <div class="job-title my-font">
        <p>{{ mentor.jobTitle }}</p>
      </div>

      <div class="num-of-courses my-font">
        <p>{{ mentor.numOfCourses }} Courses</p>
      </div>

      <div class="followers my-font">
        <p>{{ mentor.numOfFollowers }} followers</p>
      </div>

      <div class="rating d-flex align-items-center my-font">
        <i class="fas fa-star text-yellow"></i>
        <p class="ml-1">{{ mentor.rating }}</p>
      </div>

      <div class="add-speak centerify">
        <i
          class="fas fa-plus text-yellow text-bg-yellow-dim mentor-icon-size"
        ></i>
        <i
          class="far fa-comment ml-2 text-blue text-bg-blue-dim mentor-icon-size"
        ></i>
      </div>

      <div class="three-dots">
        <i class="fas fa-ellipsis-v text-muted"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mentor",
  props: { mentor: Object },
};
</script>

<style scoped>
.my-font {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 24px;
}

.name {
  margin-left: 14px !important;
}

.card-body {
  padding: 23px;
}

.profile {
  width: 140px;
}

.speciality {
  width: 180px;
  line-height: 14px;
  line-height: 14px;
  color: #ff6868;
}

.job-title {
  width: 170px;
}

.num-of-courses {
  width: 90px;
}

.followers {
  width: 110px;
}

.rating {
  width: 40px;
}

.centerify {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.rounded-img {
  border-radius: 50%;
}

.mentor-icon-size {
  padding: 5px;
  font-size: 0.7rem;
}
</style>
