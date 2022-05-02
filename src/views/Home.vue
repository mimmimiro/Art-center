<template>
		<main>
			
			 <!-- product section - all the products are fetched from Sanity -->
			<h1 class="product__header">{{ title }}</h1>
			<div v-if="loading">waiting</div>
				<div class="product" v-else>
					<section class="product__section" v-for="project in result" :key="project._id">
						<card>
							<h3 class="product__title">Title - {{ project.title}}</h3>
							<img class="product__image" :src="project.projectImage.asset.url" :alt="project.title"> 
							<div class="product__category">Category: {{ project.category.type }}</div>
							<div class="product__description"> {{ project.description }}</div>
							<div class="product__price">Price ${{ project.year}}</div>
							<button class="product__button" @click="addToCart(product)">Add to cart</button>
						</card>
					</section>
				</div>
		</main>
</template>

<script>
   import query from '../groq/project.groq?raw';
	import viewMixin from '../mixins/viewMixin.js';
	// import Card from '../components/Card.vue

	export default {
		mixins: [viewMixin],
		components: {
			// Card,
			// Cart
		},
		data() {
			return {
				title: 'portofolio',
				result: [],
				
			}
		},
		// grog query, to fetch information from sanity studio
		async created() {
			await this.sanityFetch(query, {
				type: 'projects' 
			});
			
		},
		computed: {
			 totalPrice() {
              let total = 0;
              total += this.cart.reduce((left, curent) => left + curent.price, 0);
               return total;
         }
		},
		methods: {
    		addToCart(product) {
      		this.cart.push(product);
				// console.log(product);
				console.log(this.cart);
    	},
			removeFromCart(product) {
     		 	this.cart.splice(this.cart.indexOf(product), 1);
    		},
			checkout() { 
			 this.cart = [];
			 alert(`Thank you, for shopping at our store !`);
			 }
		}
	}
</script>

