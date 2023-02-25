<script>
	import { GradientBackground } from '$lib/gradient';
	import '../app.css';
</script>

<GradientBackground />

<div>
	<slot />
</div>

<style>
	div {
		max-width: 100%;
	}
</style>
