<template>
<div class="center-h-d">
  <div class="sign-in-container card text-center d-flex justfy-content-center">
    
    <Logo class="justify-content-center" />

    <div v-if="signIn" class="sign-in-true">
        <div class="sign-in-display-container text-left pt-3">
            <h5>Sign In</h5>
            <p class="text-muted">Please sign in first to access all features</p>
        </div>
    </div>
    <div v-else>
        <div class="sign-in-display-container text-left pt-3">
            <h5>Sign Up</h5>
            <p class="text-muted">Please sign up first to access all features</p>
        </div>
    </div>

    <Button 
      btnClass="btn btn-block mb-2" 
      logo="fab fa-google text-danger" 
      text="Continue with Google" />

    <Button btnClass="btn btn-blue text-white btn-block" logo="fab fa-facebook-f text-white" text="Continue with Facebook" />

    <form action="" class="mt-2">
      <Fieldset legend="OR" />
      
      <InputField class="text-left" label="Email Address" labelFor="email" inputType="text" myPlaceholder="e.g example@gmail.com" />

      <InputField class="text-left" label="Password" labelFor="password" inputType="password" myPlaceholder="Your password" />

      <div id="keep" class="form-bottom d-flex justify-content-between align-items-center">
        <div class="form-check text-left d-flex align-items-center">
          <label class="form-check-label" for="rememberMe">
            <input
              type="checkbox"
              class="form-check-input checkbox"
              id="rememberMe"
            />
            &nbsp; Keep me Signed In
          </label>
        </div>
        <div class="forgot">
            <p class="tex-muted"><a class="forgot-link" href="#">Forgot Password</a></p>
        </div>
      </div>

      <div v-if="signIn" class="btn-container mt-4">
        <Button text="Sign In" btnClass="btn btn-blue text-white btn-block p-2 mt-2" />
      </div>

      <div v-else class="btn-container mt-4">
        <Button text="Sign Up" btnClass="btn btn-primary btn-block p-2 mt-2" />
      </div>

    </form>

    <div v-if="signIn">
        <p class="have-account">Don't Hava Account? <button v-on:click="signIn = !signIn" class="btn sign-in-btn">Sign Up</button></p>
    </div>

    <div v-else>
        <p class="have-account">Already Hava Account? <button v-on:click="signIn = !signIn" class="btn sign-in-btn">Sign In</button></p>
    </div>
  </div>
</div>
</template>

<script>
import Logo from '../Logo.vue';
import InputField from '../InputField.vue';
import Button from '../Button.vue';
import Fieldset from '../Fieldset.vue'

export default {
  name: "SignIn",
  components: {Logo, InputField, Button, Fieldset},
  data() {
      return {
          signIn: true
      }
  },

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

.sign-in-btn:active {
  border: none;
}

.sign-in-btn:focus {
  border: none;
}

.checkbox {
  height: 1.1rem;
  width: 20px;
}

.forgot-link {
    color: #888;
    text-decoration: none;
}

.have-account {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* .btn-google {
    border: 1px solid #999;
} */
</style>
