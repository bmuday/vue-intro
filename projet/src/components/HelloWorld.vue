<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    displayBtn() {
      this.$refs.btn.classList.add("active");
      this.$refs.input.focus();
      console.log(this.$refs.btn);
    },
  },
};
</script>

<template>
  <div class="hello">
    <input type="text" name="" id="" ref="input" />
    <button @click="displayBtn" ref="btn">Click Me</button>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
