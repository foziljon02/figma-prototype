<template>
  <div class="settings">
    <p class="mt-4 font-weight-bold">Settings</p>

    <Button
      text="Profile"
      logo="far fa-star mr-2"
      btnClass="btn btn-text-muted btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
    />

    <Button
      text="Settings"
      logo="fas fa-cog mr-2"
      btnClass="btn btn-text-muted btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
    />

    <Button
      text="Log out"
      logo="fas fa-sign-out-alt mr-2 "
      btnClass="btn btn-text-muted btn-block pt-2 pb-2 pl-4 mt-2 btn-font text-left"
    />
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
    name: 'Settings',
    components: { Button }
};
</script>
