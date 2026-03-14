import bohdanTV from '$lib/assets/img/bohdan-tv.png';
import bohdanSideEye from '$lib/assets/img/bohdan-over-the-shoulder-look.png';
import bohdanCounter from '$lib/assets/img/bohdan-counter.png';
import bohdanDog from '$lib/assets/img/bohdan-dog.png';

import { EPages } from '$lib/pages';
import type { MenuSlide } from '$lib/types';

export const menuState: MenuSlide[] = [
	{
		key: 'main',
		label: 'Головна',
		img: bohdanTV,
		alt: 'Bohdan Krushelnitsky with a cig in his mouth holding a retro tv like he is trying to peddle it to you for not very reasonable price',
		href: EPages.HOME
	},
	{
		key: 'works',
		label: 'Роботи',
		img: bohdanSideEye,
		href: EPages.WORKS
	},
	{
		key: 'film',
		label: 'Фільм',
		img: bohdanCounter,
		href: EPages.FILM,
		imgStyles: ['top-8.5!']
	},
	{
		key: 'about',
		label: 'Інфо',
		img: bohdanDog,
		href: EPages.ABOUT
	}
] as const;
