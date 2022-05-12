import Home from './views/Home.vue';
import PortofolioPage from './views/PortofolioPage.vue';
import Portfolio from './components/Portfolio.vue';
import About from './views/About.vue';
import ContactForm from './components/ContactForm.vue';

export default [
	{ 
		name: 'home', 
		path: '/', 
		component: Home 
	},
	{ 
		name: 'about', 
		path: '/About', 
		component: About
	},
	
	{ 
		name: 'form', 
		path: '/form', 
		component: ContactForm
	},

	{
		name: 'portofolioPage',
		path: '/:projectSlug',
		component: PortofolioPage
	},
	{ 
		name: 'portfolio', 
		path: '/Portfolio', 
		component: Portfolio 
	},
	
];
