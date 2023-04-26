<script lang="ts">
	import type { FinancialParams } from './types';
	export let params: FinancialParams;

	const presets = {
		sectionPages: [2, 4, 6, 8, 10, 12],
		pagePrice: [0.25, 0.5, 0.75, 1, 1.25],
		subscribers: [
			{ value: 2500, label: '2.5K' },
			{ value: 5000, label: '5K' },
			{ value: 10000, label: '10K' },
			{ value: 100000, label: '100K' },
			{ value: 500000, label: '500K' },
			{ value: 1000000, label: '1M' }
		],
		vat: [0, 16, 18, 20, 22, 24, 26]
	};

	let info: string | undefined;
</script>

<div class="center">
	<div class="scrollbox">
		<table id="inputs">
			<tr>
				<td> 📈 Subscriptions </td>
				<td>
					<button
						class="help"
						aria-label="show info"
						on:click={() =>
							(info = `
									Subscription count depends on how many people follow and support your
									organization. This influences how much profit you make.
							`)}
					>
						❔
					</button>
				</td>
				<td>
					<div>
						{#each presets.subscribers as preset}
							<button
								class:active={params.subscribers == preset.value}
								on:click={() => (params.subscribers = preset.value)}
							>
								{preset.label}
							</button>
						{/each}
					</div>
				</td>
			</tr>
			<tr>
				<td> 📄 Section Size </td>
				<td>
					<button
						class="help"
						aria-label="show info"
						on:click={() =>
							(info = `
									As a publishing organization, you may choose to publish different amounts of
									content. The content must fill an even number of pages in order to facilitate the
									editing process. Profit will be distributed proportional to your section size,
									which is why it influences the calculation.
							`)}
					>
						❔
					</button>
				</td>
				<td>
					<div>
						{#each presets.sectionPages as preset}
							<button
								class:active={params.sectionPages == preset}
								on:click={() => (params.sectionPages = preset)}
							>
								{preset}
							</button>
						{/each}
					</div>
				</td>
			</tr>
			<tr>
				<td> 🪙 Page Price </td>
				<td>
					<button
						class="help"
						aria-label="show info"
						on:click={() =>
							(info = `
									Since the size of the newspaper may vary depending on the subscriber's choice,
									price needs to be set per page. There will be a minimum page price, but
									subscribers may choose to raise this in order to donate more.
							`)}
					>
						❔
					</button>
				</td>
				<td>
					<div>
						{#each presets.pagePrice as preset}
							<button
								class:active={params.pagePrice == preset}
								on:click={() => (params.pagePrice = preset)}
							>
								€{preset.toFixed(2)}
							</button>
						{/each}
					</div>
				</td>
			</tr>
			<tr>
				<td>🏦 VAT </td>
				<td>
					<button
						class="help"
						aria-label="show info"
						on:click={() =>
							(info = `
								Some common VAT rates to calculate profit after tax.
							`)}
					>
						❔
					</button>
				</td>
				<td>
					<div>
						{#each presets.vat as preset}
							<button class:active={params.vat == preset} on:click={() => (params.vat = preset)}>
								{preset}%
							</button>
						{/each}
					</div>
				</td>
			</tr>
		</table>
	</div>
</div>
{#if info}
	<div class="info">
		<p>
			ℹ️ {info}
		</p>
		<button on:click={() => (info = undefined)} aria-label="close info">✖️</button>
	</div>
{/if}

<style>
	.help {
		margin: 0 0.3rem;
	}

	button {
		background-color: #808080;
	}

	button.active {
		background-color: var(--secondary-color);
	}

	#inputs td {
		font-weight: bold;
		text-transform: uppercase;
		padding: 0;
		text-align: left;
		font-size: smaller;
		white-space: nowrap;
	}

	#inputs div {
		margin: 0;
		padding: 0.5rem;
		display: flex;
		flex-flow: row nowrap;
		gap: 0.5rem;
		align-items: center;
		min-width: 0 !important;
		width: 100%;
		justify-content: space-between;
	}

	#inputs button {
		flex-grow: 1;
	}
</style>
