<template>
	<main class="frontpage">
		<h1 class="frontpage__header">{{ title }}</h1>
			<p class="frontpage__text">{{ about }}</p>
		<Article />
		<figure :style="image" class="image"></figure>
		<Slide />
		<Rating  />
	</main>
</template>

<script>
	import Rating from '../components/Rating.vue';
	import Article from '../components/Article.vue';
	import Slide from '../components/Slide.vue';
	
	export default {
		components: {
			Rating,
			Article,
			Slide
			
		},
		data() {
            return {
                image: {backgroundImage: "url(./images/back.png)"},
					 title: 'Welcome to the Art Center',
					 about: 'Learn to create. Influence change. This is our mission statement—and our answer to how art and design impact our global society. Part call-to-action. Part promise. All opportunity.',
            };
        }
	}
</script>
<style>
	.frontpage__header {
		top: 120px;
		position: absolute;
		overflow: hidden;
		margin: 20px 0px 20px 470px;
		text-align: center;
		font-size: 1.9rem;
	}
	.frontpage__text {
		top: 140px;
		position: absolute;
		overflow: hidden;
		margin: 40px 200px 20px 130px;
		text-align: center;
		font-size: 1.4rem;
	}
	.image {
		height: 60%;
		width: 100vw; 
		background-position: right;
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
	}
	/* Small and medium screen devices  */
   @media screen and (max-width: 1024px) {
		.frontpage__header {
			margin: 20px 0px 20px 260px;
			position: absolute;
		}
		.image {
			height: 20%;
			width: 100%;
			background-size: cover;
			/* display: none; */
		}
		.frontpage__text {
			font-size: 1.7rem;
			margin: 40px 50px 15px 80px;
			text-align: center;
			position: absolute;
		}
	}

	
	

</style>