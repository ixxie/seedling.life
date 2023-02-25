<script>
	import { onMount } from 'svelte';
	import { Gradient } from './minigl';

	const gradient = new Gradient();

	onMount(() => {
		gradient.initGradient('#gradient-canvas');
	});
</script>

<canvas id="gradient-canvas" />

<style>
	#gradient-canvas {
		position: fixed;
		z-index: 0;
		width: 100vw;
		height: 100vh;
		--gradient-color-1: #fae900;
		--gradient-color-2: #00ffb3;
		--gradient-color-3: #00eeff;
		--gradient-color-4: #307a64;
	}
</style>
