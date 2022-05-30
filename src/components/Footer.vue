<template>
	<footer class="footer">
		<div class="footer__title">{{title}}</div>
		<nav class="footer__navigation">
			<RouterLink class="footer__navigation-link" :to="{ name: 'about' }">
				<figure class="footer__navigation-social">
					<img class="footer__navigation-link--social" src="/images/flipkart.png" alt="facebook icon"> {{facebook}} 
					<img src="/images/arrow.png" alt="arrow-icon" class="footer__navigation-icon"></figure> 
				<figure class="footer__navigation-social">
					<img class="footer__navigation-link--social" src="/images/twitter.png" alt="twitter icon"> {{twitter}} 
					<img src="/images/arrow.png" alt="arrow-icon" class="footer__navigation-icon"></figure> 
			</RouterLink>
			<p class="footer__navigation-mail"> {{mail}} </p>
		</nav>
	</footer>	
</template>


<script>
export default {
	data() {
		return {
			title: '@CartaDesign',
			facebook: 'Facebook',
			twitter: 'Twitter',
			mail: 'artcenter@info.com',
		};
	},
}
</script>

<style>
	.footer {
		display: grid;
		grid-template-columns: var(--grid-column-12);
		grid-gap: var(--gap-big);
		padding-bottom: var(--bottom-small);
		font-size: var(--body);
		background-color: var(--main-background);
		margin-top: var(--top-large);
	}

	.footer__title {
		grid-column: 1 / span 1;
		color: var(--foreground);
		padding-left: var(--left-small);
		padding-top: var(--top-medium);
		font-weight: bold;
	}
	
	.footer__navigation {
		grid-column: 9 / span 3;
		/* padding-top: var(--top-small); */
	}
	.footer__navigation-icon {
		width: 20px;
	}
	.footer__navigation-link {
		text-decoration: none;
		color: var(--foreground);
		font-weight: bold;
	}
	.footer__navigation-link--social {
		width: 20px;
		color: var(--foreground);
	}
	
	.footer__navigation-mail {
		margin-top: var(--top-medium);
		color: var(--foreground);
		font-weight: bold;
	}
   /* Small and medium screen devices  */
   @media screen and (max-width: 1024px) {
		.footer__navigation {
			grid-column: 6 / span 5;
			font-size: 1.3rem;
			margin-bottom: 15px;
			padding-bottom: 15px;
		}
		.footer__title {
			grid-column: 1 / span 1;
			padding-left: var(--left-small);
			margin-left: var(--left-small);
			font-size: 1.3rem;

		}
	}
</style>