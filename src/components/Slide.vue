<template>
	<main>
		<figure>
		<section  v-for="(project, currentIndex) in result" :key="project">
			<router-link :to="{ name: 'portofolioPage', params: { projectSlug: project.slug.current }}">
				<button class="project__button">
					<img class="project__image" :src="project.projectImage.asset.url" :alt="project.projectCaption"> 
					<h3 class="project__title"> {{ project.projectCaption}}</h3>
				</button>
			</router-link>
		</section>
	</figure>
	<!-- slideshow glides based on the timer method, but the images can be switched with the button as well -->
			<button class="previous" @click="previous" ><img class="previous__image" src="/images/pointb.png" alt="previous"> </button>
     		<button class="next" @click="next"><img class="next__image" src="/images/point.png" alt="next"></button>
	</main>
	
</template>

<script>
	import query from '../groq/project.groq?raw';
	import viewMixin from '../mixins/viewMixin.js';

	export default {
		mixins: [viewMixin],
		data() {
			return {
				timer: null,
			   currentIndex: 0,
				result: []

			}
		},
		mounted() {
    		this.startSlideshow();
  		},
		// grog query, to fetch information from sanity studio
		async created() {
			await this.sanityFetch(query, {
				type: 'projects' 
			});
		},
		methods: { 
		startSlideshow() {
      		this.timer = setInterval(this.next, 6000);
    		},
			next() {
			  this.currentIndex = this.currentIndex === this.result.length - 1 ? 0 : this.currentIndex + 1;
				console.log(next)
				
			},
			previous() {
				 this.currentIndex === 0 ? this.result.length - 1 : this.currentIndex - 1;
				
			},
	 	},
		computed: {
			project() {
				return this.result[this.currentIndex];
		},
		
		}
		
	}
</script>

<style>

</style>