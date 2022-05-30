<template>
	<main class="article">
			<!-- All the articles are fetched from sanity, and dynamic routing to indivdual articlepage -->
		<article class="article__container">
			<section class="article__section" v-for="article in result" :key="article._id">
				<router-link :to="{ name: 'articlePage', params: { articleSlug: article.slug.current }}">
					<section class="article__card">
						<section class="article__card-inner">
							<figure class="article__card-front">
								<img class="article__image" :src="article.articleImage.asset.url" :alt="article.title" >
							</figure>
							<div class="article__card-back">
								<h2 class="article__card-back-title">{{article.title }}</h2>
								<p class="article__card-text">{{ article.quote }}</p>
							</div>
						</section>
					</section>
				</router-link>
			</section> 
		</article>
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
		width: 400px;
		height: 400px;
		border-radius: 12px;
		margin: 2rem 1rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		perspective: 1000px; 
		overflow: hidden;
		top: 260px; 
	}
	.article__image {
		width: 400px;
		height: 400px;
		object-fit: cover;
	}

	.article__card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.8s;
		transform-style: preserve-3d;
	}

	/*horizontal flip when you move the mouse over the flip box container */
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

	.article__card-front {
		background-color: #bbb;
		color: black;
	}

	.article__card-back {
		background-color: #f9f7f1;
		color: #000;
		transform: rotateY(180deg);
		padding: 1em;
		
	}
	.article__card-back-title {
		margin: 15px;
	}
		/* Small screen devices  */
   @media screen and (max-width: 1024px) {
      .article {
          width: 100%;          
   	}  
		.article__container {
			grid-template-columns: repeat(2, 1fr);
			margin-left: 40px;
		}
		.article__card-back {
			background-color: rgb(249, 247, 241);
			color: black;
			transform: rotateY(180deg);
		}
		.article__card:hover .article__card-inner {
			transform: rotateY(180deg);
		}

	}
</style>