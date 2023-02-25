<script lang="ts">
	export let icon: object;
	export let size: number = 32;
</script>

<section>
	<svelte:component this={icon} {size} />
	<span><slot /></span>
</section>

<style>
	section {
		display: flex;
		align-items: center;
		gap: 1em;
	}
</style>
