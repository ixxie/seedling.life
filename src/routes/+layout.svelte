<script>
	import { GradientBackground } from '$lib/gradient';
	import Fullscreen from '$lib/Fullscreen.svelte';
	import '../app.css';
</script>

<GradientBackground />

<Fullscreen>
	<slot />
</Fullscreen>
