<template>
	<main class="card">
		<section class="card__box" aria-label="customer review">
			<div class="card__title">{{ title }}</div>
			<span class="card__review">{{ review }}</span>
			<div ><img class="card__image" :src="image"></div>
			<span class="name">-{{ name }}</span>
		</section>
	</main>
</template>

<script>
	export default {
		
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
			this.image = results[0].picture.large
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
		position:sticky;
		overflow: hidden;
		/* top: 550px; */
		width: 20%;
		height: 35%;
		border-radius: 12px;
		margin: 1rem 1rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		
	}
	.card__title {
		text-align: center;
		color: rgb(71, 100, 112);
		font-weight: 600;
		font-size: 1.5rem;
		margin: 5px;
		padding-top: 10px;
	}
	.card__review {
		font-size: 1.2rem;
		margin: 5px 0px 10px 70px;
	}

	.name {
		font-size: 1.3rem;
		margin-left: 20px;
	}
	.card__image {
		width: 45%;
		border-radius: 50%;
		border: 1px solid #000;
		margin: 20px 0px 0px 30px;
	}
	/* Small and medium screen devices  */
   @media screen and (max-width: 1024px) {
		
		.card {
			height: 15%;
			width: 20%;
		}
		.card__review,
		.card__title {
			margin-left: 10px;
		}
	}
	

</style>