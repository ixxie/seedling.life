<script lang="ts">
	export let slug: string;
</script>

<div id={slug}>
	<article>
		<slot />
	</article>
</div>

<style>
	div {
		display: flex;
		width: 100%;
		height: 100vh;
		justify-content: center;
		flex-shrink: 0;
		scroll-snap-align: start;
		scroll-snap-stop: always;
	}

	article {
		z-index: 1;
		flex-shrink: 1;
		background-color: rgb(255, 255, 255, 0.8);
		background-blend-mode: color-burn;
		width: 100%;
		max-width: 600px;
		max-height: 100%;
		margin: 2em 1em 2em 1em;
		padding: 2em 3em 2em 3em;
		vertical-align: top;
		overflow-y: scroll;
		scrollbar-color: var(--primary-color) transparent;
	}

	@media (max-width: 800px) {
		article {
			padding: 1.5em 1em 1.5em 1em;
		}
	}
</style>
