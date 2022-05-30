<template>
	<main>
		<!-- created articlepage based on each article slug -->
		<article v-for="article in result" :key="article._id" class="articlePage">
			<h1 class="articlePage__title"> {{ article.title}}</h1>
				<img class="articlePage__image" :src="article.articleImage.asset.url" :alt="article.caption">
				<p class="articlePage__description">{{ article.description }}</p>
				<h2 class="articlePage__subtitle">{{ article.subtitle}}</h2>
				<p class="articlePage__description">{{ article.about }}</p>
				<p class="articlePage__description">{{ article.article }}</p>
		</article>
	</main>
</template>

<script>
	import query from '../groq/articlePage.groq?raw';
	import viewMixin from '../mixins/viewMixin.js';
	
	export default {
		mixins: [viewMixin],
		components: {
		},
		// grog query, to fetch information from sanity studio
		async created() {
			await this.sanityFetch(query, { 
				slug: this.$route.params.articleSlug   
			});
			this.metaTags({
				title: this.result.title,
			});
		},
	}
</script>

<style>
	.articlePage {
		display: grid;
		grid-template-columns: var(--grid-column-12);
		column-gap: var(--gap-big);
		margin: var(--outside-margin);
		padding-bottom: 100px;
	}
	.articlePage__title {
		color: black;
		text-align: center;
		margin: 20px 60px 10px 10px;
		grid-column: 3/ span 5;
		font-size: 2.3rem;
	}
	.articlePage__subtitle {
		font-weight: 600;
		margin: var(--margin-small);
		grid-column: 2/ span 5;
	}
	.articlePage__image {
		width: 40vw;
		margin: 30px 0px 20px 170px;
		grid-column: 2/ span 9;
	}
	
	.articlePage__description {
		font-size: var(--body);
		grid-column: 2/ span 10;
		text-align: justify;
		font-size: 1.2rem;
		line-height: 1.5rem;
		margin: var(--margin-small);
	}
	/* Small and medium screen devices  */
   @media screen and (max-width: 1024px) {
		.articlePage__subtitle {
		font-weight: 500;
		margin: var(--margin-small);
		grid-column: 2/ span 11;
	}
	.articlePage__description {
		grid-column: 1/ span 12;
		font-size: 0.8rem;
		margin: 15px 35px;
		text-align: justify;
	}
	.articlePage__title {
		grid-column: 3/ span 7;
	}
	.articlePage__subtitle {
		font-weight: bold;
	}

	}
 
</style>