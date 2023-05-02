<script lang="ts">
	import RangeSlider from 'svelte-range-slider-pips';

	import { fmtSmall } from '../utils';

	let rawPriceRange = [0.25, 0.75];
	const formatPrice = (v: number) => `€${fmtSmall(v)}`;
	export let priceRange = { min: 0.25, mean: 0.5, max: 0.75 };
	$: priceRange = {
		min: rawPriceRange[0],
		mean: (rawPriceRange[0] + rawPriceRange[1]) / 2,
		max: rawPriceRange[1]
	};
</script>

<div>
	<p>
		We expect subscribers will pay an average of <b>€{fmtSmall(priceRange.mean)}</b> per page, with
		a low estimate of €{fmtSmall(priceRange.min)} per page and a high estimate of €{fmtSmall(
			priceRange.max
		)} per page.
	</p>
	<RangeSlider
		min={0.25}
		max={1.5}
		step={0.05}
		formatter={formatPrice}
		range
		pushy
		pips
		first="label"
		last="label"
		float
		bind:values={rawPriceRange}
	/>
</div>
