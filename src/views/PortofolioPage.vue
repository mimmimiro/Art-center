<template>
<div v-for="project in result" :key="project._id" class="project">
	<card>
	<h3 class="project__title">Title - {{ project.title}}</h3>
	<img class="project__image" :src="project.projectImage.asset.url" :alt="project.title">
	</card>
	</div>
</template>



<script>
	import query from '../groq/projectPage.groq?raw';
	import viewMixin from '../mixins/viewMixin.js';
	import Card from '../components/Card.vue';

	export default {
		mixins: [viewMixin],
		components: {
			Card,
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