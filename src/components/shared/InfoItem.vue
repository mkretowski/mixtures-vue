<template>
  <Message
    :severity="type"
    class="animate__animated animate__shakeY animate__delay-2s"
    ><slot></slot
  ></Message>
</template>

<script>
import Message from "primevue/message";

export default {
  name: "InfoItem",
  components: {
    Message,
  },
  props: {
    type: String,
  },
};
</script>
