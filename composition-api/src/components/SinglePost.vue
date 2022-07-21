<template>
  <div class="single-post">
    <div>
      <router-link :to="{ name: 'Details', params: { id: post.id } }">
        <h3>{{ post.title }}</h3>
      </router-link>
      <p>{{ snippet }}</p>
    </div>
    <div class="divTag">
      <span class="tag" v-for="tag in post.tags" :key="tag"># {{ tag }}</span>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "SinglePost",
  props: {
    post: { type: Object },
  },
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 50) + "...";
    });

    return { snippet };
  },
};
</script>

<style>
.single-post {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  padding: 10px;
  max-width: 500px;
  border: 1px solid black;
}
.divTag {
  display: flex;
}
.tag {
  margin-right: 10px;
  padding: 5px;
  background: lightgray;
  border-radius: 5%;
  color: white;
}
</style>
