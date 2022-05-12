<template>
	<main class="card">
		<card>
			<div class="card__title">{{ title }}</div>
			<span class="card__review">{{ review }}</span>
			<div class="card__image"><img class="image" :src="image"></div>
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

	methods: {
		async fetchNew() {
			const url = 'https://randomuser.me/api/';
			const res = await fetch(url);
			const { results }   = await res.json();
			console.log(results);
			this.name = `${results[0].name.first} ${results[0].name.last}`;
			this.image = results[0].picture.medium
		}
	}
}
</script>

<style >
	.card {
		position: fixed;
		overflow: hidden;
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
	.image {
		width: 20%;
		border-radius: 50%;
		border: 1px solid #000;
	}

</style>