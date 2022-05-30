<template>
	<div class="card">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style>
	.card {
		background-color: transparent;
		width: 380px;
		height: 380px;
		border-radius: 12px;
		margin: 2rem 1rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		perspective: 1000px; 
		overflow: hidden;
	}
</style>