<template>
  <TopBorder msg="EM-Chat"></TopBorder>
</template>

<script lang="ts">
import TopBorder from "@/components/TopBorder.vue"; // @ is an alias to /src
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    TopBorder,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "src/styles/style.scss";
</style>
