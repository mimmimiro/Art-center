<template>
		<section class="slideshow">
			<h2 class="slideshow__container-title">{{ caption }}</h2>
			<section class="slideshow__container" v-for="slide, index in result"
					:key="slide._id">
				<figure>
					<img class="slideshow__container-image"
					:src="slide.artistImage.asset.url"
					:alt="slide.title"
					:class="{ active: isActive(index) }"
					@mouseover="stopRotation"
					@mouseout="startRotation"
					/>
				</figure>
			</section>
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
				speed: 3000,
				timer: null
			}
		},
		methods: {
			startRotation() {
				this.timer = setInterval(this.next, this.speed);
			},

			stopRotation() {
				clearTimeout(this.timer);
				this.timer = null;
			},

			next() {
				var current = this.current;
				var next = current + 1;

				if (next > this.result.length - 1) {
				next = 0;
				}
				this.current = next;
				this.setActive(this.current);
			},

			previous() {
				var current = this.current;
				var previous = current - 1;

				if (previous < 0) {
				prev = this.result.length -1;
				}

				this.current = previous;
				this.setActive(this.current);
			},

			isActive (slide) {
				return this.current === slide;
			},

			setActive (slide) {
				this.current = slide;
			},
			},

			async created() {
			await this.sanityFetch(query, {
				type: 'artists' 
			});
		},

			mounted  () {
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
		padding: 0;
		width: 99vw;
		height: 50vh;
		color: #34495e;
		background-color: rgb(250, 223, 114);
	}

	.slideshow__container-title {
		margin: 1.5rem;
		font-size: 3rem;
		padding-top: 10px;
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
			width: 80vw;
			height: 30vh;
			top: 1700px;
			left: 80px;
		}
		.slideshow {
			width: 100vw;
			height: 20vh;
		}
		.slideshow__container-title {
			padding-top: 190px;
		}
	}
</style>