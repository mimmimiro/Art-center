<template>
	<section class="container">
		<header class="container__header">
			<img class="container__header-logo" src="/images/logo.png" alt="app-logo">
			<nav class="header__navigation">
				<RouterLink class="header__navigation-link" :to="{ name: 'home' }">Home</RouterLink>
				<RouterLink class="header__navigation-link" :to="{ name: 'portfolio' }">Projects</RouterLink>
			   <RouterLink class="header__navigation-link" :to="{ name: 'about' }">About</RouterLink>
			</nav>
		</header>	
	</section>
</template>


<script>
	export default {
		data() {
			return {
			}
		},
	}
</script>

<style scoped>
	.container {
		display: grid;
		grid-template-columns: var(--grid-column-12);
		grid-gap: var(--gap-big);
	}
	.container__header {
		background-color: var(--main-background);
		grid-column: 1/ span 12;
		display: grid;
		height: 120px;
	}
	.header__navigation {
		grid-column: 11 / span 2;
		padding-top: 70px;
		font-size: 1.3rem;
	}
	.header__navigation-link {
		text-decoration: none;
		color: var(--foreground);
		font-weight: bold;
		font-size: 1.5rem;
		padding: var(--padding-medium);
	}
	.header__navigation-link:hover,
	.header__navigation-link:focus {
		color:darkgoldenrod;
	}
	
	.container__header-logo {
		transition: transform 1s ease-in-out;
		width: 40%;
		padding: 10px 0px 0px 0px;
		grid-column: 1/ span 4;
		grid-row: 1;
		margin-left: var(--left-medium);
	}
	.container__header-logo:hover {
		transform: rotateZ(360deg);
	}
	/* Small and medium screen devices  */
   @media screen and (max-width: 1024px) {
      .container__header-logo {
          grid-column: 1 / span 2;             
   	}  
		.header__navigation-link {
			font-size: 1.9rem;
			font-weight: bold;
		}

	}
   
</style>