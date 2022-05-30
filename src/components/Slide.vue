<template>
		<section class="slideshow">
			<h2 class="slideshow__container-title">{{ caption }}</h2>
			<section class="slideshow__container" v-for="slide, index in result" :key="slide._id">
				<figure>
					<!-- slideshow carousel - the pictures changes every 3 sekunds, and the slide stops when the mouse hovers -->
					<img class="slideshow__container-image"
					:src="slide.artistImage.asset.url"
					:alt="slide.title"
				   :class="{ active: isActive(index) }" 
					@mouseover="stopRotation"
					@mouseout="startRotation"
					/>
					<p class="slideshow__container-caption">{{ slide.caption}}</p>
				</figure>
			</section>
     			<button class="next" @click="next"><img class="next__image" src="/images/point.png" alt="next"></button>
     			<button class="previous" @click="previous"><img class="next__image" src="/images/pointb.png" alt="previous"></button>

	</section>
</template>

<script>
	import query from '../groq/artist.groq?raw';
	import viewMixin from '../mixins/viewMixin.js';

	export default {
		mixins: [viewMixin],
		components: {
		},
		data() {
			return {
				current: 0,
				caption: 'The artists!',
				result: [],
				timer: null
			}
		},
		// grog query, to fetch information from sanity studio
		async created() {
			await this.sanityFetch(query, {
				type: 'artists' 
			});
		},
		methods: {
			// methods to stop and start the rotation of the slides, when the mouse hovers over/away from the pictures
			startRotation() {
				this.timer = setInterval(this.next, 3000);
			},

			stopRotation() {
				slideTimeout(this.timer);
				this.timer = null;
			},

			next() {
				this.current = this.current === this.result.length - 1 ? 0 : this.current + 1;
				this.makeActive(this.current);
			},

			previous() {
				this.current = this.current === 0 ? this.result.length - 1 : this.current - 1;
				this.makeActive(this.current);
			},

			isActive(slide) {
				return this.current === slide;
			},

			makeActive(slide) {
				this.current === slide;
			},
			},

			mounted() {
				this.startRotation();
			}
	}
</script>

<style>
	.slideshow {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0;
		padding: var(--padding-small);
		width: 100vw;
		height: 50vh;
		color: #34495e;
		background-color: rgb(250, 223, 114);
	}

	.slideshow__container-title {
		margin: 1.5rem;
		font-size: 3rem;
		padding-top: var(--padding-small);
	}
	.slideshow__container-caption {
		font-weight: bold;
		margin: 0;
		padding: 5px;
	}

	.slideshow__container-image {
		overflow:visible;
		display: block;
		position: absolute;
		top: 1300px;
		left: 250px;
		width: 60vw;
		height: 60vh;
		object-fit: cover;
		opacity: 0;
		transition: opacity 1s;
		box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
		border-radius: 8px;
	}

	.slideshow__container-image:hover {
		cursor: pointer;
	}
	.active {
		opacity: 1;
	}
	/* Small and medium screen devices  */
   @media screen and (max-width: 1024px) {
		.slideshow__container-image {
			width: 60vw;
			height: 25vh;
			top: 1700px;
			left: 200px;
		}
		.slideshow {
			width: 100%;
			height: 20vh;
		}
		.slideshow__container-title {
			padding-top: 190px;
		}
		.slideshow__container-caption {
			padding-top: 130px;
			margin: 10px;
			font-weight: bold;
		}
	}
</style>