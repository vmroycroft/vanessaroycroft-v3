<template>
	<header class="header">
		<div class="top-bar resize-larger">
			<div class="top-bar-content text-accent-font animated fadeOut hidden">
				<h2 class="top-bar-name">Vanessa Roycroft</h2>
				<span class="top-bar-icon">
					<a
						href="http://vanessaroycroft.com/Vanessa_Roycroft_Resume.pdf"
						target="_blank"
						title="Resume"
					>
						<font-awesome-icon :icon="['far', 'file']" />
					</a>
				</span>
				<span class="top-bar-icon">
					<a href="mailto:vmroycroft@gmail.com" title="Email">
						<font-awesome-icon :icon="['far', 'envelope']" />
					</a>
				</span>
				<span class="top-bar-icon">
					<a
						href="https://github.com/vmroycroft/vanessaroycroft-v3"
						target="_blank"
						title="GitHub"
					>
						<font-awesome-icon :icon="['fas', 'code-branch']" />
					</a>
				</span>
			</div>
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
			this.topBarContent = document.querySelector(".top-bar-content");
			const description = document.querySelector(".description");
			this.target = description.offsetTop + description.clientHeight;
			EventBus.$on("scroll", this.repositionName);
		},
		methods: {
			repositionName: function() {
				if (window.scrollY > this.target) {
					this.topBarContent.classList.remove("hidden");
					this.topBarContent.classList.replace("fadeOut", "fadeIn");
					this.topBar.classList.replace("resize-larger", "resize-smaller");
				} else {
					this.topBarContent.classList.replace("fadeIn", "fadeOut");
					this.topBar.classList.replace("resize-smaller", "resize-larger");
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import "../styles/_angled-edges.scss";

	$top-bar-height: 20vh;
	$top-bar-smaller-height: 13vh;

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

	.top-bar-content {
		animation-duration: 0.25s;
		color: $dark;
		font-weight: bold;
	}

	.top-bar-name {
		text-shadow: none;
		// font-size: 1.7em;
		margin-bottom: 0.25em;
	}

	.top-bar-icon {
		margin: 0 0.75em;
	}

	.hidden {
		visibility: hidden;
	}

	/* Special case for very large screens */
	@media only screen and (min-width: 1200px) {
		h1 {
			font-size: 2.8em;
		}

		.description {
			font-size: 1.1em;
		}
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
		z-index: 3;
		display: flex;
		justify-content: center;
		align-items: center;

		&.resize-smaller {
			transition: 0.5s;
			height: $top-bar-smaller-height;
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
		top: 1px;
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

	// /* Large devices (laptops/desktops, 1024px and up) */
	// @media only screen and (min-width: 1024px) {
	// }
</style>
