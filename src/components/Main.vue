<template>
	<main class="frontpage">
			<h1 class="frontpage__header">{{ title }}</h1>
				<p class="frontpage__text">{{ about }}</p>
		<Article />
		<div :style="image" class="image"></div>
		
	
	    <!-- <Slide /> -->
		<Rating  />
	</main>
</template>

<script>
	import Rating from '../components/Rating.vue';
	import Article from '../components/Article.vue';
	// import Slide from '../components/Slide.vue';
	export default {
		components: {
			Rating,
			Article
			// Slide
		},
		data() {
            return {
                image: {backgroundImage: "url(./images/tree.jpeg)"},
					 title: 'Welcome to the Art Center',
				about: 'Learn to create. Influence change. This is our mission statement—and our answer to how art and design impact our global society. Part call-to-action. Part promise. All opportunity.',
            };
        }
	}
</script>
<style>
	.frontpage__header {
		top: 120px;
		position: fixed;
		overflow: hidden;
		margin: 20px 0px 20px 260px;
		text-align: center;
		font-size: 1.9rem;
	}
	.frontpage__text {
		top: 140px;
		position: fixed;
		overflow: hidden;
		margin: 40px 600px 20px 40px;
		text-align: center;
		font-size: 1.4rem;
	}
	.image {
	 height: 100%;
    width: 100%; 
    background-position: right;
    background-repeat: no-repeat;
    background-size: contain, cover;
    /* background-attachment: fixed; */
	}

	
	

</style>