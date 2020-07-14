<template>
  <div class="col-sm-6 offset-sm-3">
    <form @submit.prevent="addPost">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          id="title"
          type="text"
          v-model="post.title"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="body">Body</label>
        <input id="body" type="text" v-model="post.body" class="form-control" />
      </div>
      <div class="form-group">
        <button class="btn btn-info">ADD</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "add-post",
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    addPost() {
      if (!(this.post.title !== "" || this.post.body !== "")) return;
      this.$emit("add-post", this.post);
    },
  },
};
</script>

<style></style>
