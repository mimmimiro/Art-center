<template>
		<main class="portfolio">
			 <!-- project section - all the projects are fetched from Sanity -->
			<h1 class="portfolio__header">{{ title }}</h1>
			<p class="portfolio__text">Featuring detailed projects of artwork, these projects contain a wealth of knowledge about ideas explored, artists studied and artistic techniques and processes used, making them valuable learning tools for others.
				<br>
				<br>
				What makes our projects unique and different is our innovative approach to an art form and design element. We specialize in customized with a focus on interior design and art enhancement. We offer high quality picture framing with an attention to detail that is reflected in each new piece whether it be an individual art piece or multiple pieces for entire hotel project.
			</p>
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
	import Card from './Card.vue';

	export default {
		mixins: [viewMixin],
		components: {
			Card,
		},
		data() {
			return {
				title: 'Our projects',
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
	.portfolio {
		background-color: rgb(249, 247, 241);
		width: 100%;
	}
	.portfolio__text {
		font-size: 1.2rem;
		margin: 10px 40px 10px 40px;
	}
	.project {
		display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: var(--gap-big);
		margin: var(--outside-margin);
		margin-top: var(--top-small);
	}
	.portfolio__header {
		color: rgb(71, 100, 112);
		text-align: center;
		font-size: 1.9rem;
	}
	.category { 
		margin: 0px 5px 0px 40px;
		padding-top: 10px;
		font-size: 1.2rem;
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
	/* Small and medium screen devices  */
   @media screen and (max-width: 1024px) {
      .portofolio {
          width: 100%;          
   	}  
		.project {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	
</style>