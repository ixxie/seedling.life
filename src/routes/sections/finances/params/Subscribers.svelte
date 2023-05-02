<script lang="ts">
	import RangeSlider from 'svelte-range-slider-pips';
	import Select from 'svelte-select';

	import { fmtFancy } from '../utils';

	interface Scale {
		min: number;
		max: number;
		step: number;
		pipstep: number;
		formatter: (v: number) => string;
		factor: number;
	}

	let scales: { [key: string]: Scale } = {
		'2-10K': {
			min: 2,
			max: 10,
			step: 1,
			pipstep: 1,
			formatter: (v: number) => `${v}K`,
			factor: 1000
		},
		'10-100K': {
			min: 10,
			max: 100,
			step: 5,
			pipstep: 10,
			formatter: (v: number) => `${v}K`,
			factor: 1000
		},
		'100K-1M': {
			min: 100,
			max: 1000,
			step: 50,
			pipstep: 50,
			formatter: (v: number) => (v == 1000 ? '1M' : `${v}K`),
			factor: 1000
		},
		'1M-5M': {
			min: 1,
			max: 5,
			step: 0.1,
			pipstep: 0.2,
			formatter: (v: number) => `${v}M`,
			factor: 1000000
		},
		'5M-100M': {
			min: 5,
			max: 100,
			step: 5,
			pipstep: 10,
			formatter: (v: number) => `${v}M`,
			factor: 1000000
		}
	};
	let scale = { index: 1, value: '10-100K', label: '10-100K' };
	$: params = scales[scale.value];

	let rawSubRange = [10, 20];
	export let subRange = { min: 10000, mean: 15000, max: 20000 };
	$: subRange = {
		min: rawSubRange[0] * params.factor,
		mean: ((rawSubRange[0] + rawSubRange[1]) * params.factor) / 2,
		max: rawSubRange[1] * params.factor
	};

	const setDefaults = (e: CustomEvent) => {
		const p = scales[e.detail.value];
		rawSubRange = [p.min, p.min + 5 * p.step];
	};
</script>

<p>
	We expect around <b>{fmtFancy(subRange.mean)} subscribers</b>, with a low estimate of {fmtFancy(
		subRange.min
	)} subscribers and a high estimate of {fmtFancy(subRange.max)} subscribers.
</p>
<div class="subscribers">
	<div>
		{#key params}
			<RangeSlider
				min={params.min}
				max={params.max}
				step={params.step}
				formatter={params.formatter}
				range
				pushy
				pips
				first="label"
				last="label"
				float
				bind:values={rawSubRange}
			/>
		{/key}
	</div>
	<div id="dropdown">
		<div>
			<Select
				items={Object.keys(scales)}
				bind:value={scale}
				showChevron
				clearable={false}
				on:change={setDefaults}
			/>
		</div>
	</div>
</div>

<style>
	:root {
		--item-is-active-bg: var(--primary-color-light);
		--item-hover-bg: var(--secondary-color-light);
		--border-focused: var(--secondary-color-light);
	}

	div {
		margin: 0;
		padding: 0;
	}

	.subscribers {
		display: flex;
		flex-flow: row nowrap;
		align-items: top;
		gap: 0.5rem;
		width: 100%;
	}

	.subscribers > div {
		flex-grow: 1;
		flex-shrink: 1;
	}

	@media (max-width: 600px) {
		.subscribers {
			flex-flow: column-reverse nowrap;
			align-items: stretch;
		}
	}

	#dropdown {
		display: flex;
		place-content: center;
		flex-grow: 0;
	}

	#dropdown > div {
		max-width: fit-content;
	}
</style>
