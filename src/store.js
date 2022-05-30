export default {
	state() {
		return {
			portofolio: 
				{
					title: 'Our projects',
					lead: 'Featuring detailed projects of artwork, these projects contain a wealth of knowledge about ideas explored, artists studied and artistic techniques and processes used, making them valuable learning tools for others.',
					text: 'What makes our projects unique and different is our innovative approach to an art form and design element. We specialize in customized with a focus on interior design and art enhancement. We offer high quality picture framing with an attention to detail that is reflected in each new piece whether it be an individual art piece or multiple pieces for entire hotel project.',
					quote: '"Art is not what you see, but what you make others see."'
				},
				artCenter: {
					title: 'Welcome to the Art Center',
					about: 'Learn to create. Influence change. This is our mission statement—and our answer to how art and design impact our global society. Part call-to-action. Part promise. All opportunity.',
				}
				
		};
	},
	getters: {
		getPortofolio(state) {
			return state.portofolio;
	  },

	   getArtCenter(state) {
			return state.artCenter;
		}
	}
};
