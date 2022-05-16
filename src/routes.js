import Home from './views/Home.vue';
import PortofolioPage from './views/PortofolioPage.vue';
import Portfolio from './components/Portfolio.vue';
import About from './views/About.vue';
import ContactForm from './components/ContactForm.vue';
import ArticlePage from './views/ArticlePage.vue';

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
		name: 'articlePage',
		path: '/:articleSlug',
		component: ArticlePage
	},
	{ 
		name: 'portfolio', 
		path: '/Portfolio', 
		component: Portfolio 
	},
	
];
