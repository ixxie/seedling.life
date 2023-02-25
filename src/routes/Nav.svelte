<script lang="ts">
	import ArrowLeft from 'carbon-icons-svelte/lib/ArrowLeft.svelte';
	import ArrowRight from 'carbon-icons-svelte/lib/ArrowRight.svelte';

	import type { DeckApi } from './types';

	export let deck: DeckApi;
	let info = false;

	const size = 20;
</script>

<section>
	<menu>
		<button on:click={() => deck.prevSlide()} class:hide={deck.first}>
			<ArrowLeft {size} />
		</button>
		<nav id="nav-slide">
			{#each deck.slugs as slug, i}
				<a href={slug} class:filled={i <= deck.active}>●</a>
			{/each}
		</nav>
		<button on:click={() => deck.nextSlide()} class:hide={deck.last}>
			<ArrowRight {size} />
		</button>
	</menu>
</section>

<style>
	.hide {
		visibility: hidden;
	}

	* {
		text-transform: uppercase;
		font-size: small;
		font-weight: bold;
		text-decoration: none;
	}

	section {
		width: 100%;
		position: fixed;
		bottom: 0;
		display: flex;
		flex-flow: row;
		justify-content: center;
	}

	menu {
		width: 600px;
		opacity: 0.6;
		margin: 0;
		padding: 0;
		height: 3em;
		display: flex;
		flex-flow: row;
		align-items: center;
		justify-content: space-between;
		gap: 0.5em;
	}

	@media (max-width: 800px) {
		menu {
			height: 2.5em;
			padding-left: 1em;
			padding-right: 1em;
		}
	}

	button {
		background-color: transparent;
		border: none;
		z-index: 2;
	}

	#nav-slide {
		width: 100%;
		max-width: 200px;
		display: flex;
		flex-flow: row;
		align-items: center;
		justify-content: space-between;
		gap: 0.5em;
	}

	a {
		color: var(--text-color);
		opacity: 0.4;
	}

	.filled {
		opacity: 0.9;
	}
</style>
