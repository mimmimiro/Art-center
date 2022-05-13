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
	 height: 100%;
    width: 100%; 
    background-position: right;
    background-repeat: no-repeat;
    background-size: contain, cover;
    background-attachment: fixed;
	}

	
	

</style>