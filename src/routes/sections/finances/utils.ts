export const fmtLarge = (n: number) => n.toLocaleString('en-US', { maximumFractionDigits: 0 });
export const fmtSmall = (n: number) =>
	n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
export const fmtDetailed = (n: number) =>
	n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 });
export const fmtFancy = (n: number, cur: 'EUR' | 'USD' | undefined = undefined) => {
	let prefix;
	if (cur == 'EUR') {
		prefix = '€';
	} else if (cur == 'USD') {
		prefix = '$';
	} else {
		prefix = ''
	};
	let num;
	if (1000 <= n && n < 1000000) {
		num = n / 1000;
		return `${prefix}${num.toLocaleString('en-US', { maximumFractionDigits: 0 })}K`;
	} else if (1000000 <= n) {
		num = n / 1000000;
		return `${prefix}${num.toLocaleString('en-US', { maximumFractionDigits: 0 })}M`;
	} else {
		return `${prefix}${n.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
	}
}



export interface CalculationParams {
	minPages: number;
	maxPages: number;
	subscribers: number;
	pagePrice: number;
	vat: number;
	sectionSize: number;
}

interface PrintingCost {
	pages: number;
	cost: number;
}

const printingCosts: PrintingCost[] = [
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

export function calculate(params: CalculationParams) {
	const costs = printingCosts.filter((c) => params.minPages <= c.pages && c.pages <= params.maxPages);
	const results = costs.map((c) => calculateInstance(params, c))
	const average = (field: keyof ReturnType<typeof calculateInstance>) => {
		return results
			.map((r: ReturnType<typeof calculateInstance>) => r[field])
			.reduce((p, c) => p + c, 0) / results.length
	}
	return {
		...params,
		retailPrice: average('retailPrice'),
		totalProfitBeforeTax: average('totalProfitBeforeTax'),
		shareOfProfit: average('shareOfProfit'),
		profitBeforeTax: average('profitBeforeTax'),
		profitAfterTax: average('profitAfterTax'),
	}
}

function calculateInstance(params: CalculationParams, print: PrintingCost) {
	const retailPrice = print.pages * params.pagePrice;
	const totalProfitBeforeTax = params.subscribers * (retailPrice - print.cost);
	const shareOfProfit = params.sectionSize / print.pages;
	const profitBeforeTax = totalProfitBeforeTax * shareOfProfit;
	const profitAfterTax = (profitBeforeTax * (100 - params.vat)) / 100;

	return {
		retailPrice,
		totalProfitBeforeTax,
		shareOfProfit,
		profitBeforeTax,
		profitAfterTax
	};
}
