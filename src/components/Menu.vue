<template>
  <div class="menus">
    <p class="font-weight-bold">Main Menu</p>
    <Button
      :menu="true"
      action="/"
      text="Dashboard"
      logo="fas fa-home mr-2"
      btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
      :currentPage="currentPage"
    />

    <Button
      :menu="true"
      action="ebooks"
      text="eBook"
      logo="fas fa-book mr-2"
      btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
      :currentPage="currentPage"
    />

    <Button
      :menu="true"
      action="mycourses"

      text="My Courses"
      logo="fas fa-database mr-2"
      btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
      :currentPage="currentPage"
    />

    <Button
      :menu="true"
      action="buy"
      text="Purchase Courses"
      logo="fas fa-wallet mr-2"
      btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
      :currentPage="currentPage"
    />

    <Button
      :menu="true"
      action="completed"
      text="Copmleted Courses"
      logo="far fa-square mr-2"
      btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
      :currentPage="currentPage"
    />

    <Button
      :menu="true"
      action="challenges"
      text="Code Challenges"
      logo="fab fa-react mr-2"
      btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
      :currentPage="currentPage"
    />

    <Button
      :menu="true"
      action="community"
      text="Community"
      logo="fas fa-comments mr-2"
      btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
      :currentPage="currentPage"
    />

    <div class="settings">
      <p class="mt-4 font-weight-bold">Settings</p>

      <Button
        :menu="true"
        action="profile"
        text="Profile"
        logo="far fa-star mr-2"
        btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
        :currentPage="currentPage"
      />

      <Button
        :menu="true"
        action="/"
        text="Settings"
        logo="fas fa-cog mr-2"
        btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
        :currentPage="currentPage"
      />

      <Button
        :menu="true"
        action="/"
        text="Log out"
        logo="fas fa-sign-out-alt mr-2 "
        btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
        :currentPage="currentPage"
      />
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
// import Settings from "./Settings.vue";

export default {
  name: "Menu",
  components: {
    Button,
    // Settings,
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
.menus p:first-child {
  margin-bottom: 29px !important;
}

</style>