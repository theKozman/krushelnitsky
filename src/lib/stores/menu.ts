import { getContext, setContext } from 'svelte';

type MenuSlide = {
	key: string;
	img: string;
	preview: string;
};

interface MenuState {
	slides: MenuSlide[];
	activeSlide: MenuSlide | null;
	keys: string[];

	setActiveSlide: (key: string) => void;
}

class Menu implements MenuState {
	slides = $state<MenuSlide[]>([]);
	activeSlide = $state<MenuSlide | null>(null);

	constructor(slides: MenuSlide[]) {
		this.slides = slides;
	}

	get keys() {
		return this.slides.map((s) => s.key);
	}

	setActiveSlide = (key: string) => {
		this.activeSlide = this.slides.find((s) => s.key === key) || null;
	};
}

const DEFAULT_KEY = '$_menu_state';

export const getMenuState = (key = DEFAULT_KEY) => {
	return getContext(key);
};

export const setMenuState = (key = DEFAULT_KEY) => {
	const menuState = new Menu([]);
	return setContext(key, menuState);
};
