<template>
  <footer class="footer">
    <div class="reveal"></div>
    <div>
      <span class="icon-right">Designed & Built by Vanessa Roycroft</span>
      <font-awesome-icon icon="grin-beam" class="text-accent-color" />
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
$footer-height: 10vh;
// $footer-height: 20vh;

.footer {
  background: $old-lavender-darken;
  color: $pastel-grey-lighten;
  padding-bottom: 1em;
  font-family: $accent-font;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  // position: fixed;
  // bottom: 0;
  // right: 0;
  // left: 0;
  height: $footer-height;
}

.reveal {
  background-image: url(../assets/images/pinstripe-light.png);
  height: 100%;
  width: 100%;
  margin-bottom: 1em;
}

span {
  font-size: 0.75em;

  &.icon-left {
    margin-left: 5px;
  }
  &.icon-right {
    margin-right: 5px;
  }
}
</style>
