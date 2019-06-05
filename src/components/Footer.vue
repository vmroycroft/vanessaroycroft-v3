<template>
  <footer class="footer">
    <div class="reveal"></div>
    <div>
      <span class="icon-right">Designed & Built by Vanessa Roycroft</span>
      <font-awesome-icon icon="grin-beam" class="text-accent-color" />
    </div>
    <div>
      <!-- <font-awesome-icon
        :icon="['fab', 'github-alt']"
        class="text-accent-color"
      />
      <span class="icon-left">vmroycroft</span> -->
      <span>@vmroycroft | vmroycroft@gmail.com</span>
      <!-- <font-awesome-icon icon="pen" class="text-accent-color" />
      <span class="icon-left">vmroycroft@gmail.com</span> -->
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
@import "../styles/theme.scss";

$footer-height: 20vh;

.footer {
  background: $old-lavender-darken;
  color: $pastel-grey-lighten;
  padding-bottom: 1em;
  font-family: $accent-font;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
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
