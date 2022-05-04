<template>
		<main>
			
			 <!-- project section - all the projects are fetched from Sanity -->
			<h1 class="project__header">{{ title }}</h1>
			<div v-if="loading">waiting</div>
				<div class="project" v-else>
					<section class="project__section" v-for="project in result" :key="project._id">
						<card>
							<h3 class="project__title">Title - {{ project.title}}</h3>
							<img class="project__image" :src="project.projectImage.asset.url" :alt="project.title"> 
							<div class="project__category">{{ project.category.type }}</div>
							<div class="project__description"> {{ project.description }}</div>
							<div class="project__year">{{ project.year}}</div>
							<button class="project__button"  @click="showSingleProject(project)" v-if="!showProject"
							>show project</button>
						</card>
					</section>
				</div>
				<button> here
				 <div v-if="showProject === true" class="modal__dropdown">
							<h2 class="modal__header">{{ project.title}}</h2>
							<div v-for="project in modal" :key="project._id"></div>
      			</div>
					</button>
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
				modal: [],
				showProject: false,
				
			}
		},
		// grog query, to fetch information from sanity studio
		async created() {
			await this.sanityFetch(query, {
				type: 'projects' 
			});
			
		},
		computed: {
		 toggle() {
			if(this.showProject) {
				return false
			}
			else return true
		 }
		},
		methods: {
    		showSingleProject(project) {
      		this.modal.push(project);
				console.log(project)
			 }

		}
		
		
	}
</script>

<style>
.project__button {
	background-color: coral;
}

	.__dropdown {
      background: white;
      border: 1px solid lightgray;
      border-radius: 10px;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
      color: #333;
      font-size: 1.3rem;
      overflow: auto;
      padding: 15px;
      /* position: absolute; */
      right: 0;
      width: 12rem;
		margin: 10px;
	}
</style>

