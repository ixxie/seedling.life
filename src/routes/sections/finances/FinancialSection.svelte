<script lang="ts">
	import FinancialCalculator from './FinancialCalculator.svelte';

	let params = {
		sectionPages: 2,
		pagePrice: 0.5,
		subscribers: 100000,
		vat: 22
	};
</script>

<section id="finances">
	<div>
		<hgroup>
			<span>🪙</span>
			<h2>Forecast Your Profit</h2>
			<p>With the Interactive Calculator</p>
		</hgroup>
		<p>
			Calculating profit from publishing in <span>Seedling Life</span> depends on a variety of
			factors. This interactive calculator forecasts the profits for your organization. You can
			explore various scenarios and adjust the settings to suit your expectations.
			<FinancialCalculator />
		</p>
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
