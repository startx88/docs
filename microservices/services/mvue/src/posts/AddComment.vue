<template>
  <div class="comment">
    <div class="col-sm-12">
      <button @click="show = !show" class="btn btn-link">
        Add Comment
      </button>
    </div>
    <div v-if="show" class="form-row align-items-center">
      <div class="col-sm-7">
        <input type="text" v-model="comment" class="form-control" />
      </div>
      <div class="col-sm-5">
        <button @click.prevent="addComment" class="btn btn-sm btn-primary">
          Add Comment
        </button>
      </div>
      <div class="col-sm-12">
        <span v-if="error">{{ message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "add-comment",
  props: ["postId"],
  data() {
    return {
      show: false,
      comment: "",
      error: false,
      message: "",
    };
  },

  methods: {
    addComment() {
      if (this.comment === "") {
        this.error = true;
        this.message = "Please enter comment";
        return;
      }
      this.message = "";
      this.$emit("comment", this.postId, this.comment);
    },
  },
};
</script>

<style></style>
