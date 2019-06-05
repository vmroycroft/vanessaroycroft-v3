<template>
  <div id="app" v-scroll="onScroll">
    <Header />
    <AboutMe />
    <Experience />
    <Education />
    <SectionButton />
    <Footer />
  </div>
</template>

<script>
import EventBus from "./EventBus";
import Header from "./components/Header.vue";
import AboutMe from "./components/AboutMe.vue";
import Experience from "./components/Experience.vue";
import Education from "./components/Education.vue";
import SectionButton from "./components/SectionButton.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    AboutMe,
    Experience,
    Education,
    SectionButton,
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
@import url("https://fonts.googleapis.com/css?family=Nixie+One|Roboto");
@import "./styles/theme.scss";
@import "~animate.css";

html,
body,
#app {
  height: 100vh;
  margin: 0;
}

body {
  font-family: $font;
  font-size: 14px;
  line-height: 1.5;
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

ul {
  margin-bottom: 0;
}

.text-accent-color {
  color: $old-pink-lighten;
  text-shadow: 1px 1px 2px $dark;
}

.text-accent-font {
  font-family: $accent-font;
}

h1 {
  font-size: 2.3em;
}
h2 {
  font-size: 1.7em;
}

.container {
  max-width: 90%;
  margin: auto;
}

.section {
  color: $dark;
  overflow: hidden;
  padding-top: 3em;
  padding-bottom: 3em;

  h2 {
    border-left: 3px solid $silver-pink;
    padding-left: 10px;
  }
}

.logo {
  background-color: #fff;
  border-radius: 50%;
  float: left;
  height: 50px;
  margin-right: 15px;
  width: 50px;
}

.date {
  color: $pastel-grey-darken;
  font-size: 0.6em;
  margin-left: 5px;
}

ul:not(:last-child) {
  margin-bottom: 50px;
}

.box {
  display: flex;
  align-items: center;
}
</style>