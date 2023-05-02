<script lang="ts">
	import { DonationSize, NewspaperSize, SectionSize, Subscribers, Vat } from './params';

	import { calculate, fmtSmall, fmtFancy } from './utils';

	// subscriber
	let subRange = { min: 10000, mean: 15000, max: 20000 };
	let priceRange = { min: 0.25, mean: 0.5, max: 0.75 };
	let pageRange = { min: 12, mean: 24, max: 36 };

	// publisher
	let vat = [22];
	let sectionSize = [2];

	// all
	let results: { [key: string]: ReturnType<typeof calculate> };
	$: results = {
		expected: calculate({
			minPages: pageRange.min,
			maxPages: pageRange.max,
			subscribers: subRange.mean,
			pagePrice: priceRange.mean,
			vat: vat[0],
			sectionSize: sectionSize[0]
		}),
		pessimistic: calculate({
			minPages: pageRange.min,
			maxPages: pageRange.max,
			subscribers: subRange.min,
			pagePrice: priceRange.min,
			vat: vat[0],
			sectionSize: sectionSize[0]
		}),
		optimistic: calculate({
			minPages: pageRange.min,
			maxPages: pageRange.max,
			subscribers: subRange.max,
			pagePrice: priceRange.max,
			vat: vat[0],
			sectionSize: sectionSize[0]
		})
	};

	let scenario = 'expected';
	const scenarios: { slug: string; label: string }[] = [
		{ slug: 'pessimistic', label: '💩 Pessimistic' },
		{ slug: 'expected', label: '👍 Expected' },
		{ slug: 'optimistic', label: '🚀 Optimistic' }
	];
	$: result = results[scenario];

	let param: string = 'subscribers';
	const params: { slug: string; label: string }[] = [
		{ slug: 'subscribers', label: '📈 Subscribers' },
		{ slug: 'donation', label: '💰 Donation' },
		{ slug: 'section', label: '📄 Published Pages' },
		{ slug: 'newspaper', label: '📰 Newspaper Size' },
		{ slug: 'vat', label: '💸 VAT' }
	];

	let calc = false;
</script>

<hr />
<h3>scenarios</h3>

<menu>
	{#each scenarios as s}
		<button class:active-scenario={scenario == s.slug} on:click={() => (scenario = s.slug)}
			>{s.label}</button
		>
	{/each}
</menu>

{#each scenarios as s}
	<div class:show={scenario == s.slug}>
		<span class="forecast">
			You can
			<em>Earn {fmtFancy(result.profitAfterTax, 'EUR')} Profit*</em>
			<br />
			by publishing
			<br />
			<em>{sectionSize} Pages Every Month</em>
			<br />
			to
			<em>
				{fmtFancy(result.subscribers)} Subscribers<br />
			</em>
			donating<br />
			<em>€{fmtSmall(result.retailPrice)} per Newspaper</em>
			<br />
			on average.
		</span>
		<span class="forecast" style="margin-top: 1.5rem;">
			* after {vat}% tax
		</span>
	</div>
{/each}

<hr />
<h3>assumptions</h3>

<menu>
	{#each params as p}
		<button class:active-param={param == p.slug} on:click={() => (param = p.slug)}>{p.label}</button
		>
	{/each}
</menu>

<div class:show={param == 'subscribers'}>
	<Subscribers bind:subRange />
</div>
<div class:show={param == 'donation'}>
	<DonationSize bind:priceRange />
</div>
<div class:show={param == 'newspaper'}>
	<NewspaperSize bind:pageRange />
</div>
<div class:show={param == 'section'}>
	<SectionSize bind:sectionSize />
</div>
<div class:show={param == 'vat'}>
	<Vat bind:vat />
</div>

<summary>
	<button on:click={() => (calc = !calc)}>
		{#if calc}
			- hide calculation
		{:else}
			+ show calculation
		{/if}
	</button>
	{#if calc}
		<detail>
			<p>
				<b>Retail Price</b><br />
				= Page Count x Page Price <br />
			</p>
			<p>
				<b>Total Profit Before Tax</b><br />
				= Subscribers x (Retail Price - Printing Cost) <br />
			</p>
			<p>
				<b>Share of Profit</b><br />
				= (Section Pages / Total Pages) x 100%<br />
			</p>
			<p>
				<b>Organization Profit Before Tax</b><br />
				= Total Profit Before Tax x Share of Profit<br />
			</p>
			<p>
				<b>Organization Profit Afer Tax</b><br />
				= Org. Profit Before Tax x (100 - VAT)%<br />
			</p>
		</detail>
	{/if}
</summary>

<style>
	menu {
		display: flex;
		flex-flow: row wrap;
		gap: 0.5rem;
		margin: 2rem 0;
		justify-content: center;
		padding: 0 3rem;
	}

	@media (max-width: 600px) {
		menu {
			padding: 0;
		}
	}

	.active-scenario {
		background-color: var(--primary-color);
	}

	.active-param {
		background-color: var(--secondary-color);
	}

	div {
		display: none;
		width: 100%;
		margin-top: 1rem;
		margin: 0;
		padding: 0;
	}

	.show {
		display: block;
	}

	div > .forecast {
		display: flex;
		flex-flow: column;
		gap: 0.5rem;
		place-content: center;
	}

	.forecast {
		font-family: Averia Sans Libre;
		color: var(--primary-color);
		font-size: 1.2rem;
		line-height: 1.4rem;
		display: inline-block;
		text-align: center;
	}

	.forecast em {
		font-size: 2rem;
		line-height: 2.2rem;
		font-style: normal;
	}

	hr {
		margin: 2rem 3rem;
		opacity: 0.3;
	}

	summary {
		margin-top: 1rem;
		display: flex;
		flex-flow: column;
		gap: 0.5rem;
		align-items: center;
	}
</style>
