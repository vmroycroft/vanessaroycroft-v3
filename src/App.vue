<template>
  <div id="app" v-scroll="onScroll">
    <Header />
    <AboutMe />
    <Experience />
    <Education />
    <PlainSection />
    <Footer />
  </div>
</template>

<script>
import EventBus from "./EventBus";
import Header from "./components/Header.vue";
import AboutMe from "./components/AboutMe.vue";
import Experience from "./components/Experience.vue";
import Education from "./components/Education.vue";
import PlainSection from "./components/PlainSection.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    AboutMe,
    Experience,
    Education,
    PlainSection,
    Footer
  },
  methods: {
    onScroll() {
      EventBus.$emit("scroll");
    }
  }
};
</script>

<style lang="scss">
@import "~animate.css";

html,
body,
#app {
  height: 100vh;
  margin: 0;
}

#app {
  font-family: $font-family;
  line-height: $line-height;
  font-size: $font-size;
  /* Special case for very small phones, e.g. iPhone 5/SE */
  @media only screen and (max-width: 345px) {
    font-size: 14px;
  }
}

a {
  color: $link-color;
  text-decoration: none;
  transition: 0.4s;
}
a:hover {
  cursor: pointer;
  color: $link-color-hover;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 0 0.8em 0;
  padding: 0;
}

h1 {
  font-size: $font-size-h1;
}
h2 {
  font-size: $font-size-h2;
}
h3 {
  font-size: $font-size-h3;
}

ul {
  margin-bottom: 0;

  &:not(:last-child) {
    margin-bottom: 3em;
  }
}

.container-flex {
  display: flex;
  align-items: center;
}

.container {
  margin: auto;
  max-width: 90%;
  @media only screen and (min-width: 760px) {
    max-width: 75%;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 60%;
  }
}

.date {
  color: $pastel-grey-darken;
  font-size: 0.6em;
  margin-left: 5px;
}

.logo {
  background-color: #fff;
  border-radius: 50%;
  float: left;
  height: 50px;
  margin-right: 15px;
  width: 50px;
}

.section {
  color: $dark;
  overflow: hidden;
  padding-top: 3.5em;
  padding-bottom: 3.5em;

  &:first-of-type {
    padding-top: 2em;
  }

  h2 {
    border-left: 3px solid $silver-pink;
    padding-left: 10px;
    // padding-right: 14px;
    // transition: 0.3s;
    // display: inline-block;
    // background: linear-gradient(
    //   to right,
    //   $silver-pink 50%,
    //   rgba(0, 0, 0, 0) 50%
    // );
    // // background: linear-gradient(
    // //   to right,
    // //   rgba($silver-pink, 0.4) 50%,
    // //   rgba(0, 0, 0, 0) 50%
    // // );
    // background-size: 200% 100%;
    // background-position: right bottom;
    // transition: all 0.5s ease-out;
  }
  // &:hover h2 {
  //   background-position: left bottom;
  //   color: $silver-pink-darken;
  // }
}

.text-accent-color {
  color: $old-pink-lighten;
  text-shadow: 1px 1px 2px $dark;
}

.text-accent-font {
  font-family: $accent-font;
}
</style>