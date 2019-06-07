<template>
	<section class="section">
		<div class="container">
			<h2 class="text-accent-font">Experience</h2>
			<div class="container-flex">
				<img class="logo" src="../assets/images/twi-logo.png" />
				<div>
					<b>Senior Software Engineer</b>
					<br />
					<b>Tech Wizards</b>
					<span class="date">2011 - Now</span>
				</div>
			</div>
			<ul>
				<li>
					Lead teams of engineers on the design and development of training web
					applications used by the US Navy
				</li>
				<li>
					Communicate with engineers, graphic artists, instructional systems
					designers, and testers to plan, design, develop, test, and improve
					applications
				</li>
				<li>
					Build full stack applications by writing well-organized, maintainable
					code in JavaScript and PHP using a variety of frameworks and runtimes
					such as Vue.js and Node.js
				</li>
				<li>
					Rapidly create application prototypes to confirm project feasibility
					and transition the prototypes to fully developed applications
				</li>
				<li>
					Meet with clients to determine software requirements, demonstrate
					software, and discuss feedback on applications
				</li>
				<li>
					Write and review technical documents including Software Requirements
					Specifications, Software Design Documents, Training Requirements
					Documents, Software Users Guides, Software Installation Instructions,
					Project Proposals, and White Papers
				</li>
				<li>
					Deploy and maintain web applications on remote Amazon Elastic Compute
					Cloud instances
				</li>
				<li>
					Facilitate and provide support for beta tests of training applications
					with US Navy students
				</li>
			</ul>
			<div class="container-flex">
				<img class="logo" src="../assets/images/umw-logo.jpg" />
				<div>
					<b>Application Development Scholar</b>
					<br />
					<b>University of Mary Washington</b>
					<span class="date">2010</span>
				</div>
			</div>
			<ul>
				<li>
					Designed and implemented an iPhone application which displayed
					upcoming concerts in the user’s local area
				</li>
				<li>
					Delivered a formal presentation of my work to fellow scholars and
					professors
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
	export default {
		name: "Experience"
	};
</script>

<style lang="scss" scoped>
	.section {
		background-color: $pastel-grey-lighten;
		position: relative;
		z-index: 2;
	}
</style>
