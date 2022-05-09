<template>
	<Header />
		<section class="main">
		<!-- <section  v-for="title in cardMain" :key="title.id"> -->
		
			<!-- <div>{{ title.title[1] }}</div> -->
			<div><RouterLink class="header__navigation-link" to="/portfoliomain/frontend">Frontend</RouterLink></div>
			<div><RouterLink class="header__navigation-link" to="/portfoliomain/graphics">Graphic Design</RouterLink></div>
			<div><RouterLink class="header__navigation-link" to="/portfoliomain/frontend">Art</RouterLink></div>
			
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
	mounted() {
		console.log(this.$route.params.category)
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