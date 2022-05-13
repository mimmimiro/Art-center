<template>
	<main class="card">
		<card>
			<div class="card__title">{{ title }}</div>
			<span class="card__review">{{ review }}</span>
			<div ><img class="card__image" :src="image"></div>
			<span class="name">{{ name }}</span>
		</card>
	</main>
</template>

<script>
	import Card from '../components/Card.vue'
	export default {
		components: {
			Card
		},
		name: 'home',
	data() {
		return {
			title: 'Review',
			review: '"Great service"',
			name: '',
			image: ''
		}
	},
	created() {
		this.fetchNew();
	},

	//  an asynchronous HTTP request in JavaScript/vue with the deconstructed fetch method
	methods: {
		async fetchNew() {
			const url = 'https://randomuser.me/api/';
			const response = await fetch(url);
		try {
			await this.handleResponse(response)

			// The catch() function is only used if fetch() could not send a request. This typically means that there was an error
		} catch(error) {
			console.log(error)
			this.error = error;
		}
		},
		async handleResponse(response) {
			if(response.status >= 200 && response.status < 300) {
			const { results }   = await response.json();
			console.log(results);
			this.name = `${results[0].name.first} ${results[0].name.last}`;
			this.image = results[0].picture.medium
			return true;
			}  else {
				if(response.status === 404) {
					throw new Error('Url is not right');
				}
				if(response.status === 500) {
					throw new Error('server not working!');
				}
				} 
				throw new Error ('oh, no! something went wrong')
		}
	}
}
</script>

<style >
	.card {
		position: fixed;
		overflow: hidden;
		top: 500px;
	}
	.card__title {
		text-align: center;
		color: rgb(71, 100, 112);
		font-weight: 600;
		font-size: 1.4rem;
	}
	.card__review {
		font-size: 1.2rem;
	}
	.card__image {
		text-align: right;
	}

	.name {
		font-size: 1rem;
	}
	.card__image {
		width: 30%;
		border-radius: 50%;
		border: 1px solid #000;
	}

</style>