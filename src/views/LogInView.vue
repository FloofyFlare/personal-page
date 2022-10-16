<template>
  <div>
    <LogIn></LogIn>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LogIn from "@/components/LogIn.vue";

@Options({
  components: {
    LogIn,
  },
})
export default class LogInView extends Vue {}
</script>
