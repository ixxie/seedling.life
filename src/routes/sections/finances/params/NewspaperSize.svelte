<script lang="ts">
	import RangeSlider from 'svelte-range-slider-pips';

	let rawPageRange = [12, 36];
	const formatPage = (v: number) => `${v} pages`;
	export let pageRange = { min: 12, mean: 24, max: 36 };
	$: pageRange = {
		min: rawPageRange[0],
		mean: (rawPageRange[0] + rawPageRange[1]) / 2,
		max: rawPageRange[1]
	};
</script>

<p>
	We expect subscribers will order newspapers with an average of <b>{pageRange.mean} pages</b>, with
	a low estimate of {pageRange.min} pages and a high estimate of {pageRange.max} pages.
</p>
<RangeSlider
	min={12}
	max={48}
	step={4}
	formatter={formatPage}
	range
	pushy
	pips
	first="label"
	last="label"
	float
	bind:values={rawPageRange}
/>
