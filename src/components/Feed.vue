<template>
  <div class="centered">
    <h1 id="centerText">Feed</h1>
    <div class="chatFeed inline">
      <h2><span id="user">Greg </span>: Hello EM-Chat</h2>
    </div>
    <div class="chatFeed inline">
      <h2>
        Ron :
        <a
          href="http://www.script-o-rama.com/movie_scripts/a1/bee-movie-script-transcript-seinfeld.html"
        >
          click me ;)</a
        >
      </h2>
    </div>
    <div class="chatFeed inline">
      <h2><span id="user"> Greg </span>: thx for the notes ❤️</h2>
    </div>
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
@import "src/styles/Main.scss";
</style>
