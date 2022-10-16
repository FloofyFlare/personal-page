<template>
  <div class="centered">
    <h1 id="centerText">Create an account</h1>
  </div>
  <div class="form">
    <form>
      <div>
        <label class="logInLabel">Username:</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label class="logInLabel">Password:</label>
        <input type="text" name="password" />
      </div>
      <div>
        <label class="logInLabel">Repeat Password:</label>
        <input type="text" name="repeatPass" />
      </div>
      <div class="logInLabel">
        <router-link to="/main">
          <input type="submit" name="repeatPass" value="Sign Up!" />
        </router-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class LogIn extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "src/styles/LogInPage.scss";
</style>
