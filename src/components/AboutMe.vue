<template>
  <section class="section">
    <div class="container">
      <h2 class="text-accent-font">About Me</h2>
      <div class="summary">
        <p>
          I'm a well-rounded, hard-working team player with 8 years of
          experience throughout the software development life cycle. I'm
          dedicated to efficiently solving problems and providing an exceptional
          user experience through thoughtful web application design and
          development.
        </p>
        <p>
          I write uncluttered and understandable code, as well as the
          requirements specifications, software design, and user documentation
          to go along with it.
        </p>
        <p>
          I have experience with a variety of frameworks, libraries, and tools
          on both the frontend and backend. Some technologies I use day-to-day
          are:
        </p>

        <div class="grid-container">
          <span class="item lg">JavaScript (ES6)</span>
          <span class="item">HTML</span>
          <span class="item">SCSS</span>
          <span class="item">PHP</span>
          <span class="item md">jQuery</span>
          <span class="item md">Vue.js</span>
          <span class="item">npm</span>
          <span class="item md">Subversion</span>
          <span class="item">Git</span>
          <span class="item">SQL</span>
          <span class="item md">Apache</span>
          <span class="item md">Node.js</span>
          <span class="item lg">Amazon Web Services</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMe",
  props: {}
};
</script>

<style lang="scss" scoped>
.section {
  background-color: $old-pink-darken;
  margin-top: -1.5em;
  position: relative;
  z-index: 2;
}

p:first-child {
  margin-top: 0;
}

.grid-container {
  margin-top: 2em;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  .item {
    // font-family: $accent-font;
    padding: 0.75em 0;
    text-align: center;
    border: 3px solid $old-lavender-lighten;
    // color: $old-lavender-lighten;
    color: $pastel-grey;
    &.md {
      grid-column: span 2;
    }
    &.lg {
      grid-column: span 3;
    }
    &.xl {
      grid-column: span 4;
    }

    &:nth-child(2n) {
      border-color: $pastel-grey-darken;
      // color: $pastel-grey-darken;
    }
    &:nth-child(3n) {
      border-color: $old-silver-lighten;
      // color: $old-silver-lighten;
    }
  }
}
</style>
