<template>
  <div class="receiver">
    <h1>Récepteur</h1>
    <Radio @message-sent="updateMessage" />
    <div>{{ message }}</div>
  </div>
</template>

<script>
import Radio from "./Radio.vue";

export default {
  name: "ReceiverComponent",
  components: {
    Radio,
  },
  methods: {
    updateMessage(payload) {
      this.message = payload.message;
    },
  },
  data: () => ({
    message: "Pas de message",
  }),
};
</script>

<style>
.receiver {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 50vh;
}
</style>
