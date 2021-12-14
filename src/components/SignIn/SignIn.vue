<template>
<div class="center-h-d">
  <div class="sign-in-container card text-center d-flex justfy-content-center">
    <div class="sign-in__logo d-flex justify-content-center">
      <div class="logo"></div>
      <h5 class="align-self-center mt-1 ml-2">E-studieses</h5>
    </div>

    <div class="sign-in-display-container text-left pt-3">
      <h5>Sign In</h5>
      <p class="text-muted">Please sign in first to access all features</p>
    </div>

    <div class="btn-container text-center">
      <button class="btn btn-block btn-google mt-2 mb-2">
        <i class="fab fa-google text-danger"></i>
        Continue with Google
      </button>
      <!-- <Button text="Continue with Google" btnClass="btn btn-primary btn-block" /> -->
    </div>

    <div class="btn-container">
      <button class="btn btn-primary btn-block">
        <i class="fab fa-facebook-f"></i>
        Continue with Facebook
      </button>
    </div>

    <form action="" class="mt-2">
      <div class="fieldset d-flex justify-content-center">
        <div class="fieldset-line"></div>
        <legend class="w-auto px-2 text-muted sign-in__legend">OR</legend>
        <div class="fieldset-line"></div>
      </div>
      <div class="form-group text-left">
        <label for="email" class="font-weight-bold">Email Address:</label>
        <input
          type="text"
          class="form-control"
          id="email"
          placeholder="e.g example@gmail.com"
          name="email"
        />
      </div>
      <div class="form-group text-left">
        <label for="password" class="font-weight-bold">Password:</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="e.g example@gmail.com"
          name="password"
        />
      </div>

      <div class="form-bottom d-flex justify-content-between alig-items-baseline">
        <div class="form-check text-left d-flex align-items-center">
          <label class="form-check-label" for="rememberMe">
            <input
              type="checkbox"
              class="form-check-input checkbox"
              id="rememberMe"
            />
            &nbsp; Keep me Sign In
          </label>
        </div>
        <div class="forgot mt-3">
            <p class="tex-muted"><a class="forgot-link" href="#">Forgot Password</a></p>
        </div>
      </div>

      <div class="btn-container">
        <button class="btn btn-primary btn-block p-2 mt-2">Sign In</button>
      </div>
    </form>

    <div>
        <p>Don't Hava Account? <a class="text-primary" href="#">Sign Up</a> </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "SignIn",
  components: {},
};
</script>

<style scoped>
.center-h-d {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sign-in-container {
  width: 400px;
  padding: 25px 30px 10px 30px;
  
}

.sign-in__logo p {
  margin-left: 5px;
}

.sign-in__legend {
  font-size: 0.9rem;
}

.logo {
  width: 35px;
  height: 35px;
  background: blue;
  border-radius: 50%;
}

.fieldset {
  align-items: center;
}

.fieldset-line {
  width: 150px;
  height: 0.5px;
  background: #888;
}

.checkbox {
  height: 1.1rem;
  width: 20px;
}

.forgot-link {
    color: #888;
    text-decoration: none;
}

/* .btn-google {
    border: 1px solid #999;
} */
</style>
