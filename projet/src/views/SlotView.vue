<template>
  <div class="slot">
    <Slot />
  </div>
</template>

<script>
// @ is an alias to /src
import Slot from "@/components/Slot.vue";

export default {
  name: "SlotView",
  components: {
    Slot,
  },
};
</script>
