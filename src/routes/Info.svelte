<script lang="ts">
	import TouchInteraction from 'carbon-icons-svelte/lib/TouchInteraction.svelte';
	import Keyboard from 'carbon-icons-svelte/lib/Keyboard.svelte';
	import Help from 'carbon-icons-svelte/lib/Help.svelte';
	import Cursor from 'carbon-icons-svelte/lib/Cursor_1.svelte';
	import ArrowLeft from 'carbon-icons-svelte/lib/ArrowLeft.svelte';
	import ArrowRight from 'carbon-icons-svelte/lib/ArrowRight.svelte';

	import { fade } from 'svelte/transition';

	const size = 20;

	let info = false;
	function showInfo() {
		info = true;
		setTimeout(() => {
			info = false;
		}, 5000);
	}

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<section id="nav-info" transition:fade>
	<menu>
		{#if info && innerWidth > 800}
			<span>
				Use <Keyboard {size} /> arrow keys <TouchInteraction {size} />
				swipe or <Cursor {size} /> or click <ArrowLeft {size} />
				<ArrowRight {size} />
			</span>
		{:else if info && innerWidth <= 800}
			<span>
				<TouchInteraction {size} />
				swipe or <Cursor {size} /> or press <ArrowLeft {size} />
				<ArrowRight {size} />
			</span>
		{:else}
			<button on:click={showInfo} transition:fade><Help {size} /></button>
		{/if}
	</menu>
</section>

<style>
	* {
		text-transform: uppercase;
		font-size: small;
		font-weight: bold;
		text-decoration: none;
		vertical-align: middle;
		transition: opacity 2s ease-in-out;
		opacity: 0.6;
		margin: 0;
		padding: 0;
	}

	* :global(svg) {
		min-height: 100%;
	}

	menu,
	span {
		height: 3em;
		width: 100%;
		max-width: 600px;
		position: fixed;
		top: 0;
		display: flex;
		flex-flow: row;
		align-items: center;
		gap: 0.5em;
	}

	span {
		justify-content: center;
	}

	menu {
		justify-content: space-around;
	}

	button {
		background-color: transparent;
		border: none;
		z-index: 2;
	}

	#nav-info {
		display: flex;
		gap: 0.5em;
		top: 0;
		height: 3em;
		min-width: 100%;
		position: fixed;
		flex-flow: row;
		align-items: center;
		justify-content: space-around;
	}
</style>
