<template>
		<main>
			<!-- created artistpage based on each artist slug -->
			<section v-for="artist in result" :key="artist._id" class="artistPage">
				<h3 class="artistPage__title"> {{ artist.title}}</h3>
				<img class="artistPage__image" :src="artist.artistImage.asset.url" :alt="artist.caption">
				<p class="articstPage__description">{{ artist.description }}</p>
			</section>
		</main>
</template>



<script>
	import query from '../groq/artistPage.groq?raw';
	import viewMixin from '../mixins/viewMixin.js';
	
	export default {
		mixins: [viewMixin],
		components: {
		},
		// grog query, to fetch information from sanity studio
		async created() {
			await this.sanityFetch(query, { 
				slug: this.$route.params.artistSlug
			});
			this.metaTags({
				title: this.result.title,
			});
		},
	}
</script>