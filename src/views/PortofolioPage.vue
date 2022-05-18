<template>
		<main>
			<section v-for="project in result" :key="project._id" class="page">
				<h3 class="page__title"> {{ project.title}}</h3>
				<img class="page__image" :src="project.projectImage.asset.url" :alt="project.caption">
				<div class="page__year">Project year
					{{ project.year}}
				</div>
					<img class="page__item" :src="project.itemImage.asset.url" :alt="project.title">
				<p class="page__description">{{ project.description }}</p>
				<p class="page__description">{{ project.about }}</p>
			</section>
		</main>
</template>



<script>
	import query from '../groq/projectPage.groq?raw';
	import viewMixin from '../mixins/viewMixin.js';
	
	export default {
		mixins: [viewMixin],
		components: {
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
		color: black;
		text-align: center;
		margin: 20px 60px 10px 10px;
		grid-column: 2/ span 2;
		font-size: 2.3rem;
	}
	.page__year {
		font-weight: 600;
		margin-top: var(--top-small);
	}
	.page__image {
		width: 30vw;
		margin: 70px 50px;
	}
	.page__item {
		width: 30vw;
		margin: 20px;
	}
	.page__description {
		font-size: var(--body);
		grid-column: 2/ span 10;
		margin: 15px 20px 0px 20px;
		text-align: justify;
		font-size: 1.2rem;
		line-height: 1.5rem;
	}
	/* Small and medium screen devices  */
   @media screen and (max-width: 1024px) {
		.page__description {
			font-size: 0.8rem;
			grid-column: 1/ span 12;
			margin: 10px 45px;
		}
		.page__item {
			grid-column: 10/ span 3;
		}
		.page__image {
			grid-column: 1/ span 2;
		}

	}
 
</style>