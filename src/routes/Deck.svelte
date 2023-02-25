<script lang="ts">
	import { swipe } from 'svelte-gestures';

	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	import Nav from './Nav.svelte';
	import Info from './Info.svelte';

	let element: HTMLElement;
	$: slides = element ? Object.values(element.children) : [];
	$: slugs = slides.map((s) => `#${s.id}`);

	$: activeSlug = $page.url.hash || slugs[0];
	$: active = slugs.indexOf(activeSlug);
	$: first = active == 0;
	$: last = active == slugs.length - 1;

	// slide navigation

	const nextSlide = () => {
		if (!last) goto(slugs[active + 1]);
	};

	const prevSlide = () => {
		if (!first) goto(slugs[active - 1]);
	};

	type Direction = 'left' | 'right' | 'top' | 'bottom';

	function handleSwipe({ detail: { direction } }: { detail: { direction: Direction } }) {
		if (direction == 'right') {
			prevSlide();
		} else if (direction == 'left') {
			nextSlide();
		}
	}

	function handleKeydown(event) {
		let key = event.key;
		let code = event.code;
		if (key == 'ArrowLeft') {
			prevSlide();
		} else if (key == 'ArrowRight') {
			nextSlide();
		}
	}

	export let deck = {
		active,
		first,
		last,
		slugs,
		activeSlug,
		prevSlide,
		nextSlide
	};
	$: deck = {
		active,
		first,
		last,
		slugs,
		activeSlug,
		prevSlide,
		nextSlide
	};
</script>

<svelte:window on:keydown={handleKeydown} />

<Info />
<article
	bind:this={element}
	use:swipe={{ timeframe: 300, minSwipeDistance: 100, touchAction: 'pan-y' }}
	on:swipe={handleSwipe}
>
	<slot />
</article>
<Nav {deck} />

<style>
	article {
		flex-shrink: 1;
		display: flex;
		scroll-snap-type: x mandatory;
		overflow-x: scroll;
		scroll-behavior: smooth;
	}
</style>
