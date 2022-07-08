<template>
  <div class="partie2">
    <div class="error" v-if="error">
      {{ error }}
    </div>
    <div class="posts" v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts" />
    </div>
    <div class="loading" v-else>Loading...</div>
    <button @click="showPosts = !showPosts">Toggle posts</button>
    <button @click="posts.pop()">Delete a post</button>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import { ref } from "vue";
import getPosts from "../composables/getPosts";

export default {
  name: "Partie2View",
  components: { PostList },
  setup() {
    const showPosts = ref(true);

    const { posts, error, load } = getPosts();

    load();

    return { posts, error, showPosts };
  },
};
</script>

<style scoped>
.error {
  margin: 25px;
  color: red;
  text-transform: capitalize;
}

.posts,
.loading {
  margin: 25px;
}
</style>
