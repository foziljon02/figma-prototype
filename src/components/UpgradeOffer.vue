<template>
  <div
    class="upgrade-offer d-flex justify-content-between align-items-center bg-blue rounded"
  >
    <div class="d-flex align-items-center">
      <div class="coin-img">
        <img src="../assets/coins.png" alt="coin" width="70" />
      </div>

      <div class="m-0 p-0">
        <p class="offer-text text-white m-0 p-0">
          You have 5 days left on your subscription
        </p>
      </div>
    </div>

    <div class="offer-btn">
      <button class="btn btn-warning p-0 m-0">
        <p>
          Upgrade to Pro
        </p>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: "UpgradeOffer",
  components: {
  },
};
</script>

<style scoped>
.coin-img {
  padding: 15px 24px 15px 37px;
}

.offer-text {
  height: 34px;
  left: 11.29%;
  right: 55.83%;
  top: calc(50% - 34px / 2 + 0.5px);

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 34px;
}

.offer-btn {
  margin: 31px 39.5px 29px 0;
}

.btn-warning {
  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 26px;
  color: #fff;
  background-color: #FAA104;
  border-color: #FAA104;
}

.btn-warning p {
  margin: 7px 18px !important;
  width: 172.5px;
  height: 26px;
}
</style>
