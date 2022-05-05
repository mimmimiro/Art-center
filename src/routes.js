import Home from './views/Home.vue';
import Portofolio from './views/Portofolio.vue';

export default [
	{ 
		name: 'home', 
		path: '/', 
		component: Home 
	},

	{
		name: 'portofolio',
		path: '/:projectSlug',
		component: Portofolio
	}
];
