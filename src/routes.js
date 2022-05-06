import Home from './views/Home.vue';
import PortofolioPage from './views/PortofolioPage.vue';
import Portofolio from './components/Portofolio.vue';
import PortofolioMain from './components/Portofolio/PortofolioMain.vue';
import Frontend from './components/Portofolio/Frontend.vue';
import GraphicDesign from './components/Portofolio/GraphicDesign.vue';
import Art from './components/Portofolio/Art.vue';
// import Form from './components/Form.vue';

export default [
	{ 
		name: 'home', 
		path: '/', 
		component: Home 
	},
	{ 
		name: 'frontend', 
		path: '/Frontend', 
		component: Frontend 
	},
	{ 
		name: 'graphicDesign', 
		path: '/GraphicDesign', 
		component: GraphicDesign 
	},
	{ 
		name: 'art', 
		path: '/Art', 
		component: Art 
	},
	// { 
	// 	name: 'form', 
	// 	path: '/form', 
	// 	component: Form
	// },

	{
		name: 'portofolioPage',
		path: '/:projectSlug',
		component: PortofolioPage
	},
	{ 
		name: 'portofolio', 
		path: '/Portofolio', 
		component: Portofolio 
	},
	{ 
		name: 'portofolioMain', 
		path: '/PortofolioMain', 
		component: PortofolioMain
	},
];
