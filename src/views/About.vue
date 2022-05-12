<template>
	<Header />
		<main>
			<section class="about" v-for="about in result" :key="about">
				<h2 class="about__title">{{ about.title }}</h2>
					<img class="about__image" :src="about.aboutImage.asset.url" :alt="about.title">
				<article class="about__article">
						<p>{{ about.aboutMe}}
						<br>
						<br>
						<p>{{ about.contact}}</p>
						<br>
						</p>	
				</article>
			</section>
		</main>
	<ContactForm />
	<Footer />
</template>

<script>
	import query from '../groq/about.groq?raw';
	import viewMixin from '../mixins/viewMixin.js';
	import Header from '../components/Header.vue';
	import Footer from '../components/Footer.vue';
	import ContactForm from '../components/ContactForm.vue';
	
	export default {
	  mixins: [viewMixin],
	  components: {
		    Header,
			 Footer,
			 ContactForm
	  },
	  data() {
		  return {
			  
		  }
	  },
		// grog query, to fetch information from sanity studio
		async created() {
			await this.sanityFetch(query, {
				type: 'about' 
			});
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
	.about__title {
		color: rgb(58, 82, 92);
		text-align: center;
		margin: 10px 0px 10px 10px;
		grid-column: 4/ span 2;
	}
	.about__article {
		font-size: var(--body);
		grid-column: 2/ span 10;
		margin: 30px 20px 30px 20px;
		text-align: justify;
		font-size: 1.2rem;
	}
	.about__image {
		width: 30vw;
		margin: 10px 0px 10px 10px;
	}
	.about__contact-title {
		color: #2e3402;
		text-align: center;
		margin: 0px 0px 10px 0px;
	}
	
</style>