<template>
	<Header />
		<section class="main">
		<!-- <section  v-for="title in cardMain" :key="title.id"> -->
		
			<!-- <div>{{ title.title[1] }}</div> -->
			<div><RouterLink class="header__navigation-link" :to="{ name: 'frontend' }">Frontend</RouterLink></div>
			<div><RouterLink class="header__navigation-link" :to="{ name: 'graphicDesign' }">Graphic Design</RouterLink></div>
			<div><RouterLink class="header__navigation-link" :to="{ name: 'art' }">Art</RouterLink></div>
			
		</section>
		
	
</template>

<script>
import Card from '../Card.vue';
import Header from '../Header.vue';
export default {
	components: {
		Card,
		Header
	},
	data() {
		return {


		}
	},
// 	computed: {
// 		cardMain() {
//                 return this.$store.getters.getCardMain;
// 	}
// },
}
</script>

<style>
	.main {
		display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: var(--gap-big);
		margin: var(--outside-margin);
		margin-top: var(--top-large);
	}

</style>