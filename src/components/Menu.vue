<template>
  <div class="menus">
    <p class="main-manu font-weight-bold">Main Menu</p>
    <router-link to="/" exact>
      <button
        id="myFirstBtn"
        :class="[
          currentPage == 'Dashboard' ? 'btn-blue text-white' : 'text-muted',
          'menu-btn btn btn-block text-left d-flex align-items-center',
        ]"
      >
        <i class="fas fa-home"></i>
        <p>Dashboard</p>
      </button>
    </router-link>

    <!-- <Button
      action="/"
      text="Dashboard"
      logo="fas fa-home"
      btnClass="btn btn-block text-left"
      :currentPage="currentPage"
    /> -->

    <router-link to="/ebooks" exact>
      <button
        id="myBtn"
        :class="[
          currentPage == 'eBook' ? 'btn-blue text-white' : 'text-muted',
          'menu-btn btn btn-block text-left d-flex align-items-center',
        ]"
      >
        <i class="fas fa-home"></i>
        <p>eBook</p>
      </button>
    </router-link>

    <!-- <Button
      :menu="true"
      action="ebooks"
      text="eBook"
      logo="fas fa-book mr-2"
      btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 text-left"
      :currentPage="currentPage"
    /> -->

    <router-link to="/mycourses" exact>
      <button
        id="myBtn"
        :class="[
          currentPage == 'My Courses' ? 'btn-blue text-white' : 'text-muted',
          'menu-btn btn btn-block text-left d-flex align-items-center',
        ]"
      >
        <i class="fas fa-home"></i>
        <p>My Courses</p>
      </button>
    </router-link>

    <!-- <Button
      :menu="true"
      action="mycourses"
      text="My Courses"
      logo="fas fa-database mr-2"
      btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 text-left"
      :currentPage="currentPage"
    /> -->

    <router-link to="/buy" exact>
      <button
        id="myBtn"
        :class="[
          currentPage == 'Purchase Courses'
            ? 'btn-blue text-white'
            : 'text-muted',
          'menu-btn btn btn-block text-left d-flex align-items-center',
        ]"
      >
        <i class="fas fa-home"></i>
        <p>Purchase Courses</p>
      </button>
    </router-link>

    <!-- <Button
      :menu="true"
      action="buy"
      text="Purchase Courses"
      logo="fas fa-wallet mr-2"
      btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 text-left"
      :currentPage="currentPage"
    /> -->

    <router-link to="/completed" exact>
      <button
        id="myBtn"
        :class="[
          currentPage == 'Copmleted Courses'
            ? 'btn-blue text-white'
            : 'text-muted',
          'menu-btn btn btn-block text-left d-flex align-items-center',
        ]"
      >
        <i class="fas fa-home"></i>
        <p>Copmleted Courses</p>
      </button>
    </router-link>

    <!-- <Button
      :menu="true"
      action="completed"
      text="Copmleted Courses"
      logo="far fa-square mr-2"
      btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 text-left"
      :currentPage="currentPage"
    /> -->

    <router-link to="/challenges" exact>
      <button
        id="myBtn"
        :class="[
          currentPage == 'Code Challenges'
            ? 'btn-blue text-white'
            : 'text-muted',
          'menu-btn btn btn-block text-left d-flex align-items-center',
        ]"
      >
        <i class="fas fa-home"></i>
        <p>Code Challenges</p>
      </button>
    </router-link>

    <!-- <Button
      :menu="true"
      action="challenges"
      text="Code Challenges"
      logo="fab fa-react mr-2"
      btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 text-left"
      :currentPage="currentPage"
    /> -->

    <router-link to="/community" exact>
      <button
        id="myBtn"
        :class="[
          currentPage == 'Community' ? 'btn-blue text-white' : 'text-muted',
          'menu-btn btn btn-block text-left d-flex align-items-center',
        ]"
      >
        <i class="fas fa-home"></i>
        <p>Community</p>
      </button>
    </router-link>

    <!-- <Button
      :menu="true"
      action="community"
      text="Community"
      logo="fas fa-comments mr-2"
      btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 text-left"
      :currentPage="currentPage"
    /> -->

    <div class="settings">
      <p class="mt-4 font-weight-bold">Settings</p>

      <router-link to="/profile" exact>
        <button
          id="myBtn"
          :class="[
            currentPage == 'Profile' ? 'btn-blue text-white' : 'text-muted',
            'menu-btn btn btn-block text-left d-flex align-items-center',
          ]"
        >
          <i class="fas fa-home"></i>
          <p>Profile</p>
        </button>
      </router-link>

      <!-- <Button
        :menu="true"
        action="profile"
        text="Profile"
        logo="far fa-star mr-2"
        btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 text-left"
        :currentPage="currentPage"
      /> -->


      <router-link to="/" exact>
        <button
          id="myBtn"
          :class="[
            currentPage == 'Settings' ? 'btn-blue text-white' : 'text-muted',
            'menu-btn btn btn-block text-left d-flex align-items-center',
          ]"
        >
          <i class="fas fa-home"></i>
          <p>Settings</p>
        </button>
      </router-link>

      <!-- <Button
        :menu="true"
        action="/"
        text="Settings"
        logo="fas fa-cog mr-2"
        btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 text-left"
        :currentPage="currentPage"
      /> -->

      <router-link to="/" exact>
        <button
          id="myBtn"
          :class="[
            currentPage == 'Log out' ? 'btn-blue text-white' : 'text-muted',
            'menu-btn btn btn-block text-left d-flex align-items-center',
          ]"
        >
          <i class="fas fa-home"></i>
          <p>Log out</p>
        </button>
      </router-link>

      <!-- <Button
        :menu="true"
        action="/"
        text="Log out"
        logo="fas fa-sign-out-alt mr-2"
        btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 text-left"
        :currentPage="currentPage"
      /> -->
    </div>
  </div>
</template>

<script>

export default {
  name: "Menu",
  components: {
  },
  props: {
    currentPage: String,
    dashboard: Boolean,
    eBook: Boolean,
    myCourses: Boolean,
  },
};
</script>

<style scoped>
#myFirstBtn {
  margin-top: 29px;
}

.menu-btn {
  padding: 16px 21px 16px 32px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 22px;
  /* identical to box height, or 169% */

  color: #ffffff;
}

.menu-btn p {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 22px;
  /* identical to box height, or 169% */
}

.fa-home {
  margin-right: 21px;
}

.menus {
  margin-top: 7px;
}

.main-menu {
  height: 24px;
  left: 0%;
  right: 67.81%;
  top: calc(50% - 24px / 2 - 325.5px);

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */
}

.menus p:first-child {
  margin-bottom: 29px !important;
}
</style>
