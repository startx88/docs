<template>
  <div class="posts">
    <add-post @add-post="PostAdd"></add-post>

    <div class="row">
      <div class="col-sm-12">
        <h1>Posts</h1>
        <hr />
      </div>
      <post v-for="post of posts" :key="post.id" :post="post">
        <template slot-scope="comments">
          <add-comment :postId="post.id" @comment="AddComment" />
          <comments :comments="comments" />
        </template>
      </post>
    </div>
  </div>
</template>

<script>
import AddPost from "./AddPost";
import axios from "axios";
import Post from "./Post";
import AddComment from "./AddComment";
import Comments from "./Comments";
export default {
  name: "posts",
  components: {
    AddPost,
    Post,
    AddComment,
    Comments
  },
  data() {
    return {
      posts: []
    };
  },
  methods: {
    async getPosts() {
      const response = await axios.get("http://dev.com/posts");
      const data = await response.data;
      this.posts = Object.values(data);
    },
    async PostAdd(postInfo) {
      const response = await axios.post("http://dev.com", postInfo);
      const data = await response.data;
      if (response.status === 201) {
        this.posts.push(data);
      }
    },
    async AddComment(postId, comment) {
      const response = await axios.post(
        `http://dev.com/posts/${postId}/comments`,
        { body: comment }
      );
      const data = await response.data;
      this.comments = data;
    }
  },
  created() {
    this.getPosts();
  }
};
</script>

<style></style>
