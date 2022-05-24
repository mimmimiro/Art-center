<template>
		<main class="portfolio">
			 <!-- project section - all the projects are fetched from Sanity -->
			<h1 class="portfolio__header">{{ title }}</h1>
				<p class="portfolio__text">Featuring detailed projects of artwork, these projects contain a wealth of knowledge about ideas explored, artists studied and artistic techniques and processes used, making them valuable learning tools for others.
					<br>
					<br>
					What makes our projects unique and different is our innovative approach to an art form and design element. We specialize in customized with a focus on interior design and art enhancement. We offer high quality picture framing with an attention to detail that is reflected in each new piece whether it be an individual art piece or multiple pieces for entire hotel project.
				</p>
				<!--The loading appears when problems with fetching from Sanity  -->
			<div v-if="loading">Loading....</div>
				<div v-else>
						<span class="category">Choose category</span> 
							<select class="category__dropdown" v-model="category">
									<option valeu="Ceramic">Ceramic</option>
									<option valeu="painting">Painting</option>
									<option valeu="Graphics">Graphics</option>
							</select>
							<p class="category__quote">{{ quote }}</p>
					<section class="project">
						<!-- All the projects fetched and dynamic routing to indivdual project -->
						<section  v-for="project in result" :key="project._id">
							<router-link :to="{ name: 'portofolioPage', params: { projectSlug: project.slug.current }}">
								<card class="project__card">
									<section class="project__card-inner">
										<figure class="project__card-front">
											<img class="project__image" :src="project.projectImage.asset.url" :alt="project.title">
										</figure>
											<div class="project__card-back">
											<h2 class="project__card-back-title">{{project.title }}</h2>
											<p class="project__card-text">{{ project.quote }}</p>
											</div>
								</section>
								</card>
							</router-link>
						</section>
					</section>
				</div>
			<div :style="image" class="image"></div>
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
				image: {backgroundImage: "url(./images/back.png)"},
				title: 'Our projects',
				result: [],
				category: '',
				quote: '"Art is not what you see, but what you make others see."'
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
		background-color: white;
		width: 100%;
	}
	.portfolio__text {
		font-size: 1.2rem;
		margin: 10px 120px 10px 120px;
		text-align:justify;
	}
	.project {
		display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: var(--gap-big);
		margin: var(--outside-margin);
		margin-top: 60px;
	}
	
	.portfolio__header {
		text-align: center;
		font-size: 1.9rem;
	}
	.project__card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.8s;
		transform-style: preserve-3d;
	}
	.category { 
		margin: 0px 5px 0px 120px;
		padding-top: 10px;
		font-size: 1.2rem;
		font-weight: bold;
	}
	.category__quote {
		top: 120px;
		position: fixed;
		overflow: hidden;
		margin: 280px 0px 400px 350px;
		text-align: center;
		font-size: 1.6rem;
		font-family: cursive;
	}
	.category__dropdown {
		border-radius: 7px;
		font-size: 1.1rem;
		background-color: white;
		padding: 3px;
	}
	
	.project__image {
		width: 380px;
		height: 380px;
		object-fit: cover;
	}
	.project__card {
		border-radius: 12px;
	}
	.project__title {
		color: rgb(71, 100, 112);
	}
	/*horizontal flip when you move the mouse over the flip box container */
	.project__card:hover .project__card-inner {
		transform: rotateY(180deg);
	}

	/* Position the front and back side */
	.project__card-front, .project__card-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden; 
		backface-visibility: hidden;
	}

	.project__card-front {
		background-color: #bbb;
		color: black;
	}

	.project__card-back {
		background-color: #f9f7f1;
		color: #000;
		transform: rotateY(180deg);
		padding: 1em;
	}
	.project__card-back-title {
		margin: 15px;
	}
	.image {
		height: 60%;
		width: 100%; 
		background-position: right;
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
	}
	
	/* Small and medium screen devices  */
   @media screen and (max-width: 1024px) {
      .portofolio {
          width: 100%;          
   	}  
		.project {
			grid-template-columns: repeat(2, 1fr);
			margin-left: 40px;
		}
		.image {
			width: 100%; 
			height: 20%;
			background-size: cover;
		}
		.category__quote {
			display: none;
		}
		.portfolio__text {
			font-size: 1rem;
			margin: 10px 40px 10px 40px;
			text-align: center;
	}
	}

	
</style>