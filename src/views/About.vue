<template>
	<Header />
			<!-- <h2 class="about__title">Art teacher - Designer</h2>   -->
		<main class="about">
				<img class="about__image" src="/images/me.jpg" alt="">
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
	<ContactForm />
	<Footer />
</template>

<script>
	import Header from '../components/Header.vue';
	import Footer from '../components/Footer.vue';
	import ContactForm from '../components/ContactForm.vue';
	
	export default {
	  components: {
		    Header,
			 Footer,
			 ContactForm
	  },
	  data() {
		  return {
			  name: '',
			  email: '',
		  }
	  }
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
		margin: 30px 20px 100px 20px;
		text-align: justify;
		font-size: 1.2rem;
	}
	.about__image {
		width: 30vw;
		margin-left: 30px;
		/* position: relative; */
	}
	.about__contact-title {
		color: #2e3402;
		text-align: center;
		margin: 0px 0px 10px 0px;
	}
	
</style>