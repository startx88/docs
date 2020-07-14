<template>
  <div class="col-sm-4 mb-3">
    <div class="card">
      <div class="card-body">
        <h6>{{ post.title }}</h6>
        <p>{{ post.body }}</p>

        <slot v-bind="post.comments" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "post",
  props: ["post"],
};
</script>

<style></style>
