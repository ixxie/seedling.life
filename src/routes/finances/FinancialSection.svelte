<script lang="ts">
	import FinancialSettings from './FinancialSettings.svelte';
	import FinancialTable from './FinancialTable.svelte';

	let params = {
		sectionPages: 2,
		pagePrice: 0.5,
		subscribers: 100000,
		vat: 22
	};
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
			on the smaller tabloid format under reasonable scenarios. For more info, click the help buttons.
		</p>
		<h3>How much could you make?</h3>
		<p>
			The following is an estimate of the profit for each participating organization seperately. I
			believe this shows the potential for this platform to generate significant funds for
			paritcipating organizations.
		</p>
		<FinancialTable {params} />
		<h3>settings</h3>
		<p>These settings allow you to explore different scenarios.</p>
		<FinancialSettings bind:params />
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
