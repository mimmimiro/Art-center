<template>
	<main class="article">
					<section class="article__container">
					<section class="article__section" v-for="article in result" :key="article._id">
				<div class="article__card">
					<div class="article__card-inner">
						<div class="article__card-front">
							<img class="article__image" :src="article.articleImage.asset.url" :alt="article.title" >
						</div>
					<div class="article__card-back">
						<h2>{{article.title }}</h2>
						<p></p>
						<p></p>
					</div>
				</div>
			</div>
		</section> 
	</section>
</main>
</template>

<script>
	import query from '../groq/article.groq?raw';
	import viewMixin from '../mixins/viewMixin.js';

	export default {
		mixins: [viewMixin],

		data() {
			return {
				
				result: [],
			}
		},
		// grog query, to fetch information from sanity studio
		async created() {
			await this.sanityFetch(query, {
				type: 'article' 
			});
		}
		
	}
</script>

<style>
	.article__container {
		display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: var(--gap-big);
		margin: var(--outside-margin);
		margin-top: 170px;
	}

	.article__card {
	background-color: transparent;
	width: 300px;
	height: 300px;
	border-radius: 12px;
	margin: 2rem 1rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	perspective: 1000px; 
	/* position: relative;  */
	overflow: hidden;
	top: 260px; 
	}
	.article__image {
		width: 300px;
		height: 300px;
		object-fit: cover;
	}

	/* This container is needed to position the front and back side */
	.article__card-inner {
	position: relative;
	width: 100%;
	height: 100%;
	text-align: center;
	transition: transform 0.8s;
	transform-style: preserve-3d;
	}

	/* Do an horizontal flip when you move the mouse over the flip box container */
	.article__card:hover .article__card-inner {
	transform: rotateY(180deg);
	}

	/* Position the front and back side */
	.article__card-front, .article__card-back {
	position: absolute;
	width: 100%;
	height: 100%;
	-webkit-backface-visibility: hidden; 
	backface-visibility: hidden;
	}

	/* Style the front side (fallback if image is missing) */
	.article__card-front {
	background-color: #bbb;
	color: black;
	}

	/* Style the back side */
	.article__card-back {
	background-color: rgb(249, 247, 241);
	color: rgb(71, 100, 112);
	transform: rotateY(180deg);
	}
</style>