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

        <ul>
          <li>JavaScript (ES6)</li>
          <li>HTML</li>
          <li>SCSS</li>
          <li>npm</li>
          <li>jQuery</li>
          <li>Vue.js</li>
          <li>Git & Subversion</li>
          <li>PHP</li>
          <li>MySQL</li>
          <li>Apache</li>
          <li>Node.js</li>
          <li>Amazon Web Services</li>
        </ul>
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
@import "../styles/theme.scss";

.section {
  background-color: $old-pink-darken;
  margin-top: -2.2em;
  position: relative;
  z-index: 2;
}
</style>
