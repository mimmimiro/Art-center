<template>
	<Header />
			<!-- <h2 class="about__title">Art teacher - Designer</h2>   -->
			<main class="about">
				<img class="about__image" src="/images/me.jpg" alt="">
			<span class="about__resume">
					2021 - 2022
					<br>
					Årstudium i frontend-utvikling
					Høyskolen Kristiania
					<br>
					<br>
					2018 - 2021
					<br>
					Bachelorgrad i design, kunst og håndverk
					OsloMet storbyuniversitetet
			</span>
		<article class="about__article">
				<p>"Welcome! I'm Mimie Janssen, and I know I can help you create stunning visuals. As someone who has worked with art and  design for over a decade, I know that a designer need to capture their audiences' attention. With my powerful design skills and knack for color, 
				 I have the right background for your artistic needs.
				 <br>
				 <br>
				<p>While handcraft and  design are my two passions, I also enjoy surfing, doing crosswords and exploring the world. I am insanely curious about different cultures, so you'll also find my nose buried in a book or travel blog.</p>
				<br>Want to learn more? Fill out the contact form below! I would love to learn about your wishes and find the way I can help."
				</p>	
		</article>
	</main>
</template>

<script>
	import Header from '../components/Header.vue';
	
	export default {
	  components: {
		    Header
	  },
	}
</script>

<style>
	.about {
		display: grid;
		grid-template-columns: var(--grid-column-12);
		column-gap: var(--gap-big);
		margin: var(--outside-margin);
	}
	.about__article {
		font-size: var(--body);
		grid-column: 2/ span 10;
		margin: 50px 20px 100px 20px;
		text-align: justify;
		font-family: cursive;
	}
	.about__image {
		width: 30vw;
		margin-left: 30px;
		/* position: relative; */
	}
	.about__title {
		color:#633930;
		text-align: center;
		margin-top: 20px;
	}
	.about__resume {
	 background: rgb(248, 206, 172);
	 box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
	 color: #2e3402;
	 width: 590px;
	 height: 200px;
	 margin: 60px;
	 border-radius: 590px;
	 text-align: center;
	 padding-top: 20px;
	 line-height: 1.6rem;
	 font-size: 1.3rem;
	 position: absolute;
	 top: 460px;
	 right: 190px;
	 letter-spacing: 0.05em;
	}
</style>