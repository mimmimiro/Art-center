<template>
	<form class="contact">
				<h1 class="contact__title">Contact Us</h1>
					<input class="contact__input" type="name" placeholder="Name" v-model="name" />
					<div class="contact__validate" :class="{invalid: emailValidity === 'invalid'}">
					<input class="contact__validate-email" type="email" placeholder="E-mail" v-model="email" @blur="validateInput"/>
					<p v-if="emailValidity === 'invalid'">Please enter a valid email!</p>
					</div>
					<input class="contact__message" type="message" placeholder="Message" v-model="message" />
		      <button class="contact__button" @click="submitForm">Submit</button>
	  		</form>
</template>

<script>
	export default {
	  data() {
		  return {
			  name: '',
			  email: '',
			  message: '',
			  emailValidity: ''
		  }
	  },
	  methods: {
		  validateInput() {
				if (this.email === '') {
				this.emailValidity = 'invalid';
				} else {
				this.emailValidity = 'valid';
				}
    		}
	  }
	}
</script>

<style>
	.contact {
	 display: flex;
	 flex-flow: column nowrap;
	 background: rgb(250, 241, 208);
	 box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
	 color: #1c2001;
	 width: 700px;
	 height: 400px;
	 margin: 10px 0px 200px 100px;
	 border-radius: 700px;
	 text-align: center;
	 padding-top: 20px;
	 right: 190px;
	}
	.contact__input  {
		border: 1px solid black;
		color: black;
		padding: 10px 10px;
		font-size: 0.9em;
		margin-bottom: 0.8em;
		font-weight: bold;
		width: 400px;
		border-radius: 7px;
		margin: 5px 0px 5px 150px;
		}
	.contact__message {
		border: 1px solid black;
		padding: 70px 10px;
		font-size: 1em;
		font-weight: bold;
		width: 400px;
		margin: 5px 0px 5px 150px;
	}
	.contact__button {
		background: rgb(71, 100, 112);
		border: solid rgb(71, 100, 112);
		color: white;
		cursor: pointer;
		padding: 10px 50px;
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		margin: 5px 0px 5px 240px;
		font-size: 0.8em;
		width: 200px;
		border-radius: 5px;
		}
		
	.contact__button:hover {
		background: #276448;
		border: solid 1px #276448;
		}
	.contact__validate-email {
		border: 1px solid black;
		color: black;
		padding: 10px 10px;
		font-size: 0.9em;
		margin-bottom: 0.8em;
		font-weight: bold;
		width: 400px;
		border-radius: 7px;
		margin: 5px 0px 5px 0px;
	}

	.contact__validate.invalid input {
 		 border-color: red;
	}
</style>