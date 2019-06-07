<template>
	<!-- <a
    class="section-btn"
    href="http://vanessaroycroft.com/Vanessa_Roycroft_Resume.pdf"
    target="_blank"
  >
    <span>View my full resume</span>
  </a> -->
	<div class="section-btn"></div>
</template>

<script>
	export default {
		name: "SectionButton"
	};
</script>

<style lang="scss" scoped>
	@import "../styles/theme.scss";

	$footer-height: 20vh;

	.section-btn {
		background: $old-lavender-lighten;
		color: $pastel-grey-lighten;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.25em;
		letter-spacing: 2px;
		min-height: 100px;
		position: relative;
		text-transform: uppercase;
		text-decoration: none;
		margin-bottom: $footer-height;
		z-index: 2;
		box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
			0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

		&:hover,
		&:focus {
			color: $old-lavender;
		}
	}
</style>
