<template>
  <div class="card my-card">
    <div class="card-body centerify equal-size text-center">
      <div class="profile d-flex align-items-center">
        <img
          width="50"
          class="rounded-img"
          src="https://thispersondoesnotexist.com/image"
          alt="person"
        />
        <p class="font-weight-bold ml-2">{{ mentor.name }}</p>
      </div>

      <div class="speciality">
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
            mentor.industry == 'Android Development' ? 'text-bg-green-dim text-success' : '',
            'rounded p-1 pl-2 pr-2',
          ]"
        >
          {{ mentor.industry }}
        </span>
      </div>

      <div class="job-title">
        <p>{{ mentor.jobTitle }}</p>
      </div>

      <div class="num-of-courses">
        <p>{{ mentor.numOfCourses }} Courses</p>
      </div>

      <div class="followers">
        <p>{{ mentor.numOfFollowers }} followers</p>
      </div>

      <div class="rating d-flex align-items-center">
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
.profile {
  width: 180px;
}

.speciality {
  width: 200px;
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
