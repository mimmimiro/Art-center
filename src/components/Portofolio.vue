<template>
		<main>
			 <!-- project section - all the projects are fetched from Sanity -->
			<h1 class="project__header">{{ title }}</h1>
			<div v-if="loading">Loading....</div>
				<div class="project" v-else>
					<section class="project__section" v-for="project in result" :key="project._id">
						<card>
							<h3 class="project__title">Title - {{ project.title}}</h3>
							<img class="project__image" :src="project.projectImage.asset.url" :alt="project.title"> 
							<div class="project__category">{{ project.category.type }}</div>
							<div class="project__description"> {{ project.description }}</div>
							<div class="project__year">{{ project.year}}</div>
							
							<!-- <router-link :to="{ name: 'portofolioPage', params: { projectSlug: project.slug.current }}">	
								<button class="project__button"
							>show project
							</button>
					      </router-link> -->
							
						</card>
					</section>
				</div>
		</main>
</template>

<script>
   import query from '../groq/project.groq?raw';
	import viewMixin from '../mixins/viewMixin.js';
	import Card from '../components/Card.vue';

	export default {
		mixins: [viewMixin],
		components: {
			Card,
			// Cart
		},
		data() {
			return {
				title: 'portofolio',
				result: [],
			}
		},
		// grog query, to fetch information from sanity studio
		async created() {
			await this.sanityFetch(query, {
				type: 'projects' 
			});
			
		},
	}
</script>

<style>
	.project__button {
		background-color: coral;
	}

	
</style>