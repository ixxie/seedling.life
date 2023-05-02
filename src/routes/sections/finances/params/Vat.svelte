<script lang="ts">
	import RangeSlider from 'svelte-range-slider-pips';

	export let vat = [22];
	const formatVat = (v: number) => `${v}%`;
</script>

<p>
	We assume your VAT rate is {vat}%.
</p>
<RangeSlider
	min={0}
	max={30}
	step={1}
	formatter={formatVat}
	pips
	first="label"
	last="label"
	float
	bind:values={vat}
/>
