export interface DeckApi {
	active: number;
	first: boolean;
	last: boolean;
	slugs: string[];
	activeSlug: string;
	prevSlide: Function;
	nextSlide: Function;
}
