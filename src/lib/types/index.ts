import type { ClassValue } from 'svelte/elements';

export type MenuSlide = {
	key: string;
	label: string;
	img: string;
	alt?: string;
	href: string;
	imgStyles?: ClassValue;
};

export type VideoItem = {
	key: string;
	type: 'horizontal' | 'vertical';
	title: string;
	subtitle?: string;
	about?: string;
	src: string;
	for?: string;
	budget?: string;
	gear: Array<{
		label: string;
		img?: string;
	}>;
};
