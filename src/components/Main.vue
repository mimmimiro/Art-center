<template>
	<main class="frontpage">
		<div :style="image" class="image"></div>
	
	
		<Rating  />
	</main>

</template>

<script>
	import Rating from '../components/Rating.vue'
	export default {
		components: {
			Rating
		},
		data() {
            return {
                image: {backgroundImage: "url(./images/tree.jpeg)"}
            };
        }
	}
</script>
<style>
	.image {
	 height: 100vh;
    width: 100vw;
    background-position:center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
	}

	
	

</style>