<template>
  <main>
    <section class="darkBackground">
      <div class="divRows">
        <div>
          <h2 class="fadeIn largeFont alt-text-color">Powerful together</h2>
          <p class="mediumFont">A chat platform made for empowerment</p>
        </div>
        <div>
          <img id="togetherImage" src="@/assets/pexels-monstera-5384623.jpg" />
        </div>
      </div>
      <div class="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="lightBackground"
          ></path>
        </svg>
      </div>
    </section>
    <section class="lightBackground">
      <div class="divRows">
        <div>
          <h2 class="fadeIn largeFont alt-text-color">
            A disconected World is no world at all
          </h2>
          <p class="mediumFont">
            EM-Chat is here to direct the future of change.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class HomePage extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "src/styles/homePage.scss";
</style>
