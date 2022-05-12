<template>
   <Header />
		<main>
			<section v-for="project in result" :key="project._id" class="page">
				<h3 class="page__title"> {{ project.title}}</h3>
				<img class="page__image" :src="project.projectImage.asset.url" :alt="project.title">
				<div class="page__year">Project year
					{{ project.year}}</div>
				<p class="page__description">{{ project.description }}</p>
				<p class="page__description">{{ project.about }}</p>
			</section>
		</main>
	<Footer />
</template>



<script>
	import query from '../groq/projectPage.groq?raw';
	import viewMixin from '../mixins/viewMixin.js';
	import Header from '../components/Header.vue';
	import Footer from '../components/Footer.vue';


	export default {
		mixins: [viewMixin],
		components: {
			Header,
			Footer
		},

		async created() {
			await this.sanityFetch(query, { 
				slug: this.$route.params.projectSlug
			});
			this.metaTags({
				title: this.result.title,
			});
		},
	}
</script>

<style>
	.page {
		display: grid;
		grid-template-columns: var(--grid-column-12);
		column-gap: var(--gap-big);
		margin: var(--outside-margin);
	}
	.page__title {
		color: rgb(58, 82, 92);
		text-align: center;
		margin: 10px 0px 10px 10px;
		grid-column: 2/ span 2;
		font-size: 1.9rem;
	}
	.page__year {
		font-weight: 600;
		margin-top: var(--top-small);
	}
	.page__image {
		width: 30vw;
		margin-top: var(--top-small);
	}
	.page__description {
		font-size: var(--body);
		grid-column: 2/ span 10;
		margin: 20px 20px 0px 20px;
		text-align: justify;
		font-size: 1.2rem;
		line-height: 1.5rem;
	}
 
</style>