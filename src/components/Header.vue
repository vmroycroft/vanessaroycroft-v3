<template>
  <header class="header">
    <div class="top-bar resize-larger">
      <span class="text-accent-font top-bar-name animated fadeOut hidden"
        >Vanessa Roycroft</span
      >
    </div>
    <div>
      <h1 class="text-accent-color text-accent-font animated main-name hidden">
        Vanessa Roycroft
      </h1>
      <div class="description animated hidden">
        I'm a full stack developer with a background in software engineering.
        <div class="interests">
          I
          <font-awesome-icon icon="heart" class="text-accent-color" />
          snowboarding, running, & learning.
        </div>
      </div>
    </div>
    <div class="angle-left"></div>
    <div class="angle-right"></div>
  </header>
</template>

<script>
import EventBus from "../EventBus";

export default {
  name: "Header",
  data: function() {
    return {};
  },
  mounted: function() {
    // wait a sec to give a smoother load transition
    this.mainName = document.querySelector(".main-name");
    setTimeout(() => {
      this.mainName.classList.replace("hidden", "fadeInUp");
      this.mainName.addEventListener("animationend", function() {
        document
          .querySelector(".description")
          .classList.replace("hidden", "fadeIn");
      });
    }, 1000);

    // keep an eye on scrolling
    this.topBar = document.querySelector(".top-bar");
    this.topBarName = document.querySelector(".top-bar-name");
    const description = document.querySelector(".description");
    this.target = description.offsetTop + description.clientHeight;
    EventBus.$on("scroll", this.repositionName);
  },
  methods: {
    repositionName: function() {
      if (window.scrollY > this.target) {
        this.topBarName.classList.remove("hidden");
        this.topBarName.classList.replace("fadeOut", "fadeIn");
        this.topBar.classList.replace("resize-larger", "resize-smaller");
      } else {
        this.topBarName.classList.replace("fadeIn", "fadeOut");
        this.topBar.classList.replace("resize-smaller", "resize-larger");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_angled-edges.scss";
@import "../styles/theme.scss";

$top-bar-height: 15vh;

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $old-silver-darken;
  background-image: linear-gradient(to bottom, $old-silver, $old-silver-darken);
  color: $pastel-grey-lighten;
  height: 100%;
  text-align: center;
  padding: 0 10px;
  position: relative;
  z-index: 3;
}

.top-bar-name {
  text-shadow: none;
  color: $dark;
  font-size: 1.7em;
  font-weight: bold;
  animation-duration: 0.25s;
}

.hidden {
  visibility: hidden;
}

.interests {
  color: $old-lavender-lighten;
  margin-top: 0.75em;
}

h1 {
  margin-top: 0;
}

.top-bar {
  position: fixed;
  top: 0;
  width: 100%;
  height: $top-bar-height;
  background: $silver-pink-lighten;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  &.resize-smaller {
    transition: 0.5s;
    height: 8vh;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  }
  &.resize-larger {
    transition: 0.5s;
    height: $top-bar-height;
    box-shadow: none;
  }
}

.angle-left,
.angle-right {
  height: 100%;
  width: 100%;
}

.angle-left {
  @include angled-edge("inside bottom", "upper right", $old-pink-darken, 25);
  position: absolute;
  left: 0;
}

.angle-right {
  @include angled-edge("inside bottom", "upper left", $old-pink-darken, 25);
  position: absolute;
  right: 0;
}

/* Large devices (laptops/desktops, 1024px and up) */
@media only screen and (min-width: 1024px) {
  h1 {
    font-size: 3.5em;
  }
  .description {
    font-size: 1.3em;
  }
}
</style>
