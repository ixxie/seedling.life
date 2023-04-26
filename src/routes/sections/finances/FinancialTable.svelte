<script lang="ts">
	import type { FinancialParams } from './types';
	export let params: FinancialParams;

	const rows = [
		{ pages: 12, cost: 2.49 },
		{ pages: 16, cost: 2.69 },
		{ pages: 20, cost: 2.9 },
		{ pages: 24, cost: 3.1 },
		{ pages: 28, cost: 3.31 },
		{ pages: 32, cost: 3.51 },
		{ pages: 36, cost: 3.71 },
		{ pages: 40, cost: 3.92 },
		{ pages: 44, cost: 4.12 },
		{ pages: 48, cost: 4.32 }
	];
	const highlighted = [12, 24, 36, 48];

	interface PrintParams {
		pages: number;
		cost: number;
	}

	let showAll = false;

	const fmtLarge = (n: number) => n.toLocaleString('en-US', { maximumFractionDigits: 0 });
	const fmtSmall = (n: number) =>
		n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
	const fmtDetailed = (n: number) =>
		n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 });

	function calculate(params: FinancialParams, print: PrintParams) {
		const retailPrice = print.pages * params.pagePrice;
		const totalProfitBeforeTax = params.subscribers * (retailPrice - print.cost);
		const shareOfProfit = params.sectionPages / print.pages;
		const profitBeforeTax = totalProfitBeforeTax * shareOfProfit;
		const profitAfterTax = (profitBeforeTax * (100 - params.vat)) / 100;

		return {
			...print,
			retailPrice,
			totalProfitBeforeTax,
			shareOfProfit,
			profitBeforeTax,
			profitAfterTax
		};
	}

	let calc: undefined | ReturnType<typeof calculate>;
</script>

{#if !calc}
	<div class="scrollbox">
		<table id="outputs">
			<thead>
				<tr>
					<th>Page<br />Count</th>
					<th>Monthly<br />Subscription Fee</th>
					<th>Total Profit<br />(after tax)</th>
					<th />
				</tr>
			</thead>
			{#each rows as print}
				{@const results = calculate(params, print)}
				{@const highlight = highlighted.includes(print.pages)}
				{#if highlight || showAll}
					<tr>
						<td>{print.pages}</td>
						<td>
							€{fmtSmall(results.retailPrice)}
						</td>
						<td
							>€{fmtLarge(results.profitAfterTax)}
							<button class="help" aria-label="show calculation" on:click={() => (calc = results)}>
								❔
							</button>
						</td>
					</tr>
				{/if}
			{/each}
		</table>
	</div>
	<div class="center">
		<button on:click={() => (showAll = !showAll)}>{showAll ? '- show less' : '+ show more'}</button>
	</div>
{:else if calc}
	<div class="info">
		<div class="cols">
			<p>
				ℹ️
				<b>Calculation</b> - profit from publishing a <b>{params.sectionPages} page section</b>
				a <b>{calc.pages} page tabloid format newspaper</b> at a
				<b>€{params.pagePrice} page price</b>
				and
				<b>{params.vat}% VAT</b>:
			</p>
			<p>
				<b>Retail Price</b><br />
				= Page Count x Page Price <br />
				= {calc.pages} x €{fmtSmall(params.pagePrice)}<br />
				= <b>€{fmtSmall(calc.retailPrice)}</b>
			</p>
			<p>
				<b>Total Profit Before Tax</b><br />
				= Subscribers x (Retail Price - Printing Cost) <br />
				= {fmtLarge(params.subscribers)} x (€{fmtSmall(calc.retailPrice)} - €{fmtSmall(
					calc.cost
				)})<br />= {fmtLarge(params.subscribers)} x €{fmtSmall(calc.retailPrice - calc.cost)}<br />
				= <b>€{fmtLarge(calc.totalProfitBeforeTax)}</b>
			</p>
			<p>
				<b>Share of Profit</b><br />
				= (Section Pages / Total Pages) x 100%<br />
				= ({params.sectionPages} / {calc.pages}) x 100% = {fmtDetailed(
					params.sectionPages / calc.pages
				)} x 100%<br />
				= <b>{fmtSmall(calc.shareOfProfit * 100)}%</b>
			</p>
			<p>
				<b>Organization Profit Before Tax</b><br />
				= Total Profit Before Tax x Share of Profit<br />
				= €{fmtLarge(calc.totalProfitBeforeTax)} x {fmtSmall(calc.shareOfProfit * 100)}%<br />
				= <b>€{fmtLarge(calc.profitBeforeTax)}</b>
			</p>
			<p>
				<b>Organization Profit Afer Tax</b><br />
				= Org. Profit Before Tax x (100 - VAT)%<br />
				= €{fmtLarge(calc.profitBeforeTax)} x (100 - {fmtSmall(params.vat)})%<br />
				= €{fmtLarge(calc.profitBeforeTax)} x {fmtSmall(100 - params.vat)}%<br />
				= <b>€{fmtLarge(calc.profitAfterTax)}</b>
			</p>
		</div>
		<button on:click={() => (calc = undefined)} aria-label="close calculation"> ✖️ </button>
	</div>
{/if}

<style>
	.cols {
		columns: 2;
	}

	@media (max-width: 500px) {
		.cols {
			columns: 1;
		}
	}

	p {
		margin-top: 0;
		break-inside: avoid;
	}
</style>
