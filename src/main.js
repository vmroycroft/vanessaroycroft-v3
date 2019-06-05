import Vue from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faGrinBeam, faPen } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// set up font awesome icons used in the project
library.add([faHeart, faGrinBeam, faPen, faGithubAlt]);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

// custom directives
Vue.directive('scroll', {
	inserted: function(el, binding) {
		let f = function(evt) {
			if (binding.value(evt, el)) {
				window.removeEventListener('scroll', f);
			}
		};
		window.addEventListener('scroll', f);
	}
});

new Vue({
	render: h => h(App)
}).$mount('#app');
