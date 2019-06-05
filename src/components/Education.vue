<template>
  <section class="section">
    <div class="container">
      <h2 class="text-accent-font">Education</h2>
      <div class="box">
        <img class="logo" src="../assets/images/umw-seal.png" />
        <div>
          <b>Computer Science, B.S.</b>
          <br />
          <b>University of Mary Washington</b>
          <span class="date">2011</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Education"
};
</script>

<style lang="scss" scoped>
@import "../styles/theme.scss";

.section {
  background-color: $old-pink-darken;
  position: relative;
  z-index: 2;
}
</style>
