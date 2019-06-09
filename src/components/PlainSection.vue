<template>
  <div class="section"></div>
</template>

<script>
export default {
  name: "PlainSection"
};
</script>

<style lang="scss" scoped>
@import "../styles/theme.scss";

.section {
  background: $old-lavender-lighten;
  height: 1vh;
  position: relative;
  z-index: 2;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

  &:hover,
  &:focus {
    color: $old-lavender;
  }
}
</style>
