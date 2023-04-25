<script lang="ts">
	const rows = [
		{ count: 12, cost: 2.49 },
		{ count: 16, cost: 2.69 },
		{ count: 20, cost: 2.9 },
		{ count: 24, cost: 3.1 },
		{ count: 28, cost: 3.31 },
		{ count: 32, cost: 3.51 },
		{ count: 36, cost: 3.71 },
		{ count: 40, cost: 3.92 },
		{ count: 44, cost: 4.12 },
		{ count: 48, cost: 4.32 }
	];
	const highlighted = [12, 24, 36, 48];
	let showAll = false;

	let pageCount = 2;
	let pagePrice = 0.5;
	let subs = 100000;
	let vat = 22;

	const countPresets = [2, 4, 6, 8, 10, 12];
	const pricePresets = [0.25, 0.5, 0.75, 1, 1.25];
	const subPresets = [
		{ value: 2500, label: '2.5K' },
		{ value: 5000, label: '5K' },
		{ value: 10000, label: '10K' },
		{ value: 100000, label: '100K' },
		{ value: 500000, label: '500K' },
		{ value: 1000000, label: '1M' }
	];
	const vatPresets = [0, 16, 18, 20, 22, 24, 26];

	let info: string | undefined;
</script>

<section class="left" id="finances">
	<div>
		<hgroup>
			<span>🪙</span>
			<h2>Finances Look Promising</h2>
			<p>Try the Interactive Calculator</p>
		</hgroup>

		<p>
			The prices offered by <a href="https://printnewspaper.com">printnewspaper.com</a> vary depending
			on the page count, size and circulation of the newspaper. I made a preliminary calculation focused
			on the smaller tabloid format under reasonable scenarios.
		</p>
		<h3>How much could you make?</h3>
		<p>
			The following is an estimate of the profit for each participating organization seperately. I
			believe this shows the potential for this platform to generate significant funds for
			paritcipating organizations.
		</p>
		<div class="scrollbox">
			<table id="outputs">
				<thead>
					<tr>
						<th>Page<br />Count</th>
						<th>Monthly<br />Subscription Fee</th>
						<th>Total Profit<br />(after tax)</th>
					</tr>
				</thead>
				{#each rows as print}
					{@const retailPrice = print.count * pagePrice}
					{@const profitBeforeTax = subs * (retailPrice - print.cost)}
					{@const profitAfterTax = (profitBeforeTax * (100 - vat)) / 100}
					{@const highlight = highlighted.includes(print.count)}
					{#if highlight || showAll}
						<tr>
							<td>{print.count}</td>
							<td>
								€{retailPrice.toLocaleString('en-US', {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2
								})}
							</td>
							<td>€{profitAfterTax.toLocaleString('en-US', { maximumFractionDigits: 0 })}</td>
						</tr>
					{/if}
				{/each}
			</table>
		</div>
		<div class="center">
			<button on:click={() => (showAll = !showAll)}
				>{showAll ? '- show less' : '+ show more'}</button
			>
		</div>
		<h3>settings</h3>
		<p>
			These settings allow you to explore different scenarios. Click the info buttons for more
			details.
		</p>
		<div class="center">
			<div class="scrollbox">
				<table id="inputs">
					<tr>
						<td>
							📈 Subscriptions
							<button
								class="help"
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
								{#each subPresets as preset}
									<button
										class:activeSub={subs == preset.value}
										on:click={() => (subs = preset.value)}
									>
										{preset.label}
									</button>
								{/each}
							</div>
						</td>
					</tr>
					<tr>
						<td>
							📄 Section Size
							<button
								class="help"
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
								{#each countPresets as preset}
									<button class:active={pageCount == preset} on:click={() => (pageCount = preset)}>
										{preset}
									</button>
								{/each}
							</div>
						</td>
					</tr>
					<tr>
						<td>
							🪙 Page Price
							<button
								class="help"
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
								{#each pricePresets as preset}
									<button class:active={pagePrice == preset} on:click={() => (pagePrice = preset)}>
										€{preset.toFixed(2)}
									</button>
								{/each}
							</div>
						</td>
					</tr>
					<tr>
						<td
							>🏦 VAT
							<button
								class="help"
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
								{#each vatPresets as preset}
									<button class:active={vat == preset} on:click={() => (vat = preset)}>
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
				<button on:click={() => (info = undefined)}>🗙</button>
			</div>
		{/if}
	</div>
	<figure>
		<img
			src="https://images.unsplash.com/photo-1580519542036-c47de6196ba5"
			alt="Colorful currency bills of various denominations"
		/>
		<caption>
			Image credit: <a href="https://unsplash.com/photos/SAYzxuS1O3M">
				10 and one 10 dollar bill
			</a>
			by <a href="https://unsplash.com/@ninjason">Jason Leung</a>.
		</caption>
	</figure>
</section>

<style>
	button {
		background-color: #5e5e5e;
		color: white;
		padding: 0.1rem 0.3rem;
		border: 0;
		border-radius: 0.3rem;
		opacity: 0.8;
		font-weight: bold;
	}

	button.active {
		background-color: var(--secondary-color);
	}

	button.activeSub {
		background-color: var(--primary-color);
	}

	th,
	td {
		text-align: center;
		padding: 0.2rem;
		min-width: max-content;
	}

	h3 {
		text-transform: uppercase;
		color: var(--secondary-color);
		text-align: center;
		font-size: 0.95em;
		margin-top: 1rem;
	}

	.center {
		margin: 0;
		padding: 0;
		display: flex;
		place-content: center;
		width: 100%;
		overflow: visible;
	}

	#inputs {
		width: 100%;
	}

	#inputs td {
		width: max-content;
	}

	#inputs td {
		font-weight: bold;
		text-transform: uppercase;
		padding: 0;
		text-align: left;
		font-size: smaller;
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

	table {
		margin: 0.5rem 0;
	}

	.help {
		background-color: #5e5e5e;
		width: 20px !important;
		height: 20px !important;
		border-radius: 10px;
		text-align: center;
		font-size: smaller;
		padding: 0;
		opacity: 0.5;
	}

	.info {
		font-size: smaller;
		background-color: white;
		padding: 0.5rem;
		width: 100%;
		display: flex;
		justify-content: space-between;
		gap: 0.5rem;
	}

	.info button,
	.center > button {
		height: fit-content;
		color: #333;
		background-color: transparent;
	}

	.scrollbox {
		overflow-x: scroll;
		overflow-y: visible;
	}
</style>
