<template>
  <div class="menus">
    <p class="mb-4 font-weight-bold">Main Menu</p>
    <Button
      :menu="true"
      text="Dashboard"
      logo="fas fa-home mr-2"
      btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
      :currentPage="currentPage"
    />

    <Button
      :menu="true"
      text="eBook"
      logo="fas fa-book mr-2"
      btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
      :currentPage="currentPage"
    />

    <Button
      :menu="true"
      text="My Courses"
      logo="fas fa-database mr-2"
      btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
      :currentPage="currentPage"
    />

    <Button
      :menu="true"
      text="Purchase Courses"
      logo="fas fa-wallet mr-2"
      btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
      :currentPage="currentPage"
    />

    <Button
      :menu="true"
      text="Copmleted Courses"
      logo="far fa-square mr-2"
      btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
      :currentPage="currentPage"
    />

    <Button
      :menu="true"
      text="Code Challenges"
      logo="fab fa-react mr-2"
      btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
      :currentPage="currentPage"
    />

    <Button
      :menu="true"
      text="Community"
      logo="fas fa-comments mr-2"
      btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
      :currentPage="currentPage"
    />

    <div class="settings">
      <p class="mt-4 font-weight-bold">Settings</p>

      <Button
        :menu="true"
        text="Profile"
        logo="far fa-star mr-2"
        btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
        :currentPage="currentPage"
      />

      <Button
        :menu="true"
        text="Settings"
        logo="fas fa-cog mr-2"
        btnClass="btn btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
        :currentPage="currentPage"
      />

      <Button
        :menu="true"
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
