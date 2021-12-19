<template>
    <div class="join-card card rounded">
            <div
              class="my-card-body d-flex align-content-center justify-content-between"
            >
              <div class="">
                <h6>Teach the world online</h6>
                <p>
                  Create an online video course, reach students across the
                  globe, and earn money
                </p>
              </div>
              <button class="btn btn-light my-btn">Become a mentor</button>
            </div>
          </div>
</template>

<script>
export default {
    name: 'JoinCard'
}
</script>

<style scoped>
.my-card-body {
  padding: 10px 30px;
}

.join-card {
  background: rgba(81, 91, 229, 0.1207);
  padding: 20px;
}

.my-btn {
  background: transparent;
  border: 1px solid #888;
}
</style>