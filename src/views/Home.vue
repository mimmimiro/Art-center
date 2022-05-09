
<template>
<Header />
  
</template>

<script>
  import Header from '../components/Header.vue';
     export default {
	     components: {
		    Header
	  },
	
		mounted() {
			//console.log(this.$route.params.page)
		}
  }
</script>

<style>
   .home__image {
		width: 30%;
		margin-left: 300px;
		margin-top: 100px;
	}
	.title {
		color:#633930;
		text-align: center;
		margin-top: 20px;
	}

</style>



