<template>
	<Header />
		<main class="portofolio">
			 <!-- project section - all the projects are fetched from Sanity -->
			<h1 class="project__header">{{ title }}</h1>
			<div v-if="loading">Loading....</div>
			<div v-else>
					<span class="category">Choose category</span> 
					<select class="category__dropdown" v-model="category">
							<option valeu="Ceramic">Ceramic</option>
							<option valeu="painting">Painting</option>
							<option valeu="Graphics">Graphics</option>
					</select>
				<section class="project">
					<section  v-for="project in result" :key="project._id">
						<card class="project__card">
							<router-link :to="{ name: 'portofolioPage', params: { projectSlug: project.slug.current }}">	
								<button class="project__button">
									<img class="project__image" :src="project.projectImage.asset.url" :alt="project.title"> 
									<h3 class="project__title"> {{ project.title}}</h3>
									
									<!-- <div class="project__category">{{ project.category.type }}</div> -->
								</button>
					    	</router-link>
						</card>
					</section>
				</section>
			</div>
		</main>
</template>

<script>
   import query from '../groq/project.groq?raw';
	import viewMixin from '../mixins/viewMixin.js';
	import Card from '../components/Card.vue';
	import Header from '../components/Header.vue';

	export default {
		mixins: [viewMixin],
		components: {
			Card,
			Header
		},
		data() {
			return {
				title: 'Portofolio',
				result: [],
				category: ''
			}
		},

		computed: {
			 result(){
                return this.result.filter(project => !project.category.type.indexOf(this.category))
			 
		}
		},
		// grog query, to fetch information from sanity studio
		async created() {
			await this.sanityFetch(query, {
				type: 'projects' 
			});
		}
	}
</script>

<style>
	.portofolio {
		background-color: rgb(251, 248, 241);
		width: 100%;
	}
	.project {
		display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: var(--gap-big);
		margin: var(--outside-margin);
		margin-top: var(--top-large);
	}
	.project__header {
		color: rgb(71, 100, 112);
		text-align: center;
		font-size: 1.9rem;
	}
	.category { 
		color: rgb(71, 100, 112);
		margin: 0px 5px 10px 40px;
		padding-top: 10px;
		font-size: 1.6rem;
	}
	.category__dropdown {
		border-radius: 7px;
		font-size: 1.1rem;
		background-color: white;
		padding: 3px;
	}
	
	.project__image {
		width: 300px;
		height: 300px;
		object-fit: cover;
	}
	.project__title {
		color: rgb(71, 100, 112);
	}
	 .project__card:hover {
		transform: scale(1.1);
	} 

	
</style>