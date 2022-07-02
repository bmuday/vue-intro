<template>
  <div class="receiver">
    <Receiver />
  </div>
</template>

<script>
// @ is an alias to /src
import Receiver from "@/components/Receiver.vue";

export default {
  name: "ReceiverView",
  components: {
    Receiver,
  },
};
</script>
