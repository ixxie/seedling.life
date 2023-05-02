<script lang="ts">
	import RangeSlider from 'svelte-range-slider-pips';

	export let sectionSize = [2];
	const formatSectionSize = (v: number) => `${v} pages`;
</script>

<p>
	We assume you will publish a {sectionSize} page section every month.
</p>
<RangeSlider
	min={2}
	max={12}
	step={2}
	formatter={formatSectionSize}
	pips
	first="label"
	last="label"
	float
	bind:values={sectionSize}
/>
