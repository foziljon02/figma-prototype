<template>
  <div class="menus">
    <p class="mb-4 font-weight-bold">Main Menu</p>
    <Button
      text="Dashboard"
      logo="fas fa-home mr-2"
      btnClass="btn btn-primary btn-blue btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
      :currentPage="currentPage"
    />

    <Button
      text="eBook"
      logo="fas fa-book mr-2"
      btnClass="btn btn-text-muted btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
      :currentPage="currentPage"
    />

    <Button
      text="My Courses"
      logo="fas fa-database mr-2"
      btnClass="btn btn-text-muted btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
      :currentPage="currentPage"
    />

    <Button
      text="Purchase a course"
      logo="fas fa-wallet mr-2"
      btnClass="btn btn-text-muted btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
      :currentPage="currentPage"
    />

    <Button
      text="Copmleted Courses"
      logo="far fa-square mr-2"
      btnClass="btn btn-text-muted btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
      :currentPage="currentPage"
    />

    <Button
      text="Code Challenges"
      logo="fab fa-react mr-2"
      btnClass="btn btn-text-muted btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
      :currentPage="currentPage"
    />

    <Button
      text="Community"
      logo="fas fa-comments mr-2"
      btnClass="btn btn-text-muted btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
      :currentPage="currentPage"
    />
    <Settings />
  </div>

</template>

<script>
import Button from "./Button.vue";
import Settings from './Settings.vue'

export default {
  name: "Menu",
  components: {
    Button,
    Settings,
  },
  props: {
    currentPage: String,
  }
};
</script>
