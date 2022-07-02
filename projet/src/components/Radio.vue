<template>
  <h2>Radio</h2>
  <button @click="sendMessage">Envoyer un message</button>
</template>

<script>
export default {
  name: "RadioComponent",
  methods: {
    sendMessage() {
      this.$emit("message-sent", {
        message: "Mon magnifique message",
      });
    },
  },
};
</script>
