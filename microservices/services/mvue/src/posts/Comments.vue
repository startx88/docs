<template>
  <ul v-if="comments">
    <li v-for="comment of comments" :key="comment.id">
      <span v-if="comment.status==='approved'">{{ comment.body }}</span>
      <span v-else-if="comment.status==='pending'">Just waiting for comment approval</span>
      <span v-else-if="comment.status==='rejected'">Comment {{comment.status}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "comments",
  props: ["comments"]
};
</script>

<style></style>
