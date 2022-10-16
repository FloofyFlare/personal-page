<template>
  <div>
    <header class="menu">
      <nav class="navBar">
        <div class="titleMenu"></div>
        <div class="titleMenu" id="titleDiv">
          <router-link class="titleFont" to="/"> {{ msg }}</router-link>
        </div>
        <div class="titleMenu" id="logInDiv">
          <router-link to="/logIn"><p id="logIn">Log In</p></router-link>
        </div>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class TopBorder extends Vue {
  msg!: string;
}
</script>

<style lang="scss">
@import "src/styles/topBorder.scss";
</style>
