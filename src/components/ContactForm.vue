<template>
	<form class="about__contact">
				<h1 class="about__contact-title">Contact Us</h1>
					<input class="about__contact-input" type="text" placeholder="Name" v-model="name" />
					<input class="about__contact-input" type="email" placeholder="E-mail" v-model="email" />
					<input class="about__contact-message" type="message" placeholder="E-mail" v-model="message" />
		      <button class="about__contact-button" @click="submitForm">Submit</button>
	  		</form>
</template>

<script>
	export default {
	  data() {
		  return {
			  name: '',
			  email: '',
			  message: ''
		  }
	  }
	}
</script>

<style>
	.about__contact {
	 display: flex;
	 flex-direction: column;
	 background: rgb(250, 241, 208);
	 box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
	 color: #2e3402;
	 width: 700px;
	 height: 200px;
	 margin: 10px 0px 200px 100px;
	 border-radius: 700px;
	 text-align: center;
	 padding-top: 20px;
	 /* position: inherit; */
	 /* top: 960px; */
	 right: 190px;
	}
	.about__contact-input  {
		border: 1px solid black;
		padding: 10px 10px;
		font-size: 0.7em;
		margin-bottom: 0.8em;
		font-weight: bold;
		width: 300px;
		border-radius: 7px;
		margin: 5px 0px 5px 200px;
		}
	.about__contact-message {
		border: 1px solid black;
		padding: 70px 10px;
		font-size: 0.8em;
		font-weight: bold;
	}
	
</style>