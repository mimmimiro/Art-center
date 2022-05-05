import Home from './views/Home.vue';
import PortofolioPage from './views/PortofolioPage.vue';

export default [
	{ 
		name: 'home', 
		path: '/', 
		component: Home 
	},

	{
		name: 'portofolioPage',
		path: '/:projectSlug',
		component: PortofolioPage
	}
];
