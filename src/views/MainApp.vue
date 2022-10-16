<template>
  <div>
    <Feed></Feed>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Feed from "@/components/Feed.vue";

@Options({
  components: {
    Feed,
  },
})
export default class MainApp extends Vue {}
</script>
