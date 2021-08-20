<script>
export default {
  name: "GxButton",
};
</script>
<template>
  <button v-on="$listeners">
    <slot />
  </button>
</template>