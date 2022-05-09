<template>
	<Header />
		<main>
			 <!-- project section - all the projects are fetched from Sanity -->
			<!-- <h1 class="project__header">{{ title }}</h1> -->
			<div v-if="loading">Loading....</div>
				<div class="projecta" v-else>
					<h3>Category</h3> 
					<select v-model="category">
							<option valeu="Graphic design">Graphic design</option>
							<option valeu="Art">Art</option>
							<option valeu="Frontend">Frontend</option>
					</select>
					<section class="project">
					<section  v-for="project in result" :key="project._id">
						
						<card>
							<router-link :to="{ name: 'portofolioPage', params: { projectSlug: project.slug.current }}">	
							<button class="project__button">
							<h3 class="project__title"> {{ project.title}}</h3>
							<img class="project__image" :src="project.projectImage.asset.url" :alt="project.title"> 
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
				title: 'portofolio',
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
	.project {
		display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: var(--gap-big);
		margin: var(--outside-margin);
		margin-top: var(--top-large);
	}
	.project__header {
		color:#633930;
		text-align: center;
	}
	.project__title {
		color: #633930;
	}
	
	.project__image {
		width: 20vw;
		height: 35vh;
		margin: 20px 25px 20px 30px;
		
	}
	/* .project__button {
		background-color: 276448;
		color: azure;
		width: 200px;
		padding: 5px;
		border-radius: 6px;
		margin-top: 10px;
	} */

	
</style>