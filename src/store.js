export default {
	state() {
		return {
			cardMain: [
				{ id: 1, title: `Graphic Design` },
				{ id: 2, title: `Frontend` },
				{ id: 3, title: `Art` },
			],
		};
	},
	getters: {
		getCardMain(state) {
			return state.cardMain;
	  },
	}
};
