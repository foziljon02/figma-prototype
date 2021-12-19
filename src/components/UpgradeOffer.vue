<template>
  <div
    class="upgrade-offer d-flex justify-content-between align-items-center bg-blue rounded"
  >
    <div class="d-flex align-items-center">
      <div class="coin-img">
        <img src="../assets/coins.png" alt="coin" width="70" />
      </div>

      <div class="offer-text">
        <p class="text-white text-weight-bold" style="font-size: 1.1rem">
          You have 5 days left on your subscription
        </p>
      </div>
    </div>

    <div class="offer-btn">
      <Button
        text="Upgrade to Pro"
        btnClass="btn btn-warning p-2 pl-5 pr-5 font-weight-bold"
        style="letter-spacing: 5px"
      />
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
    name: 'UpgradeOffer',
    components: {
        Button
    }
}
</script>

<style scoped>
.upgrade-offer {
  padding: 15px 35px;
}
</style>