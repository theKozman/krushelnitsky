import type { ClassValue } from 'svelte/elements';

export type MenuSlide = {
	key: string;
	label: string;
	img: string;
	alt?: string;
	href: string;
	imgStyles?: ClassValue;
};
