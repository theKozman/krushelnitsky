import { getContext, setContext } from 'svelte';

interface IsMobileState {
	isMobile: boolean | null;
}

class IsMobile implements IsMobileState {
	isMobile = $state<IsMobileState['isMobile']>(null);

	constructor() {
		$effect(() => {
			const checkScreenSize = () => {
				const styles = getComputedStyle(document.documentElement);

				const md = styles.getPropertyValue('--breakpoint-md');
				const mdValue = Number(md.split('rem')[0]);

				const remWindowWidth = window.innerWidth / 16;

				this.isMobile = remWindowWidth < mdValue;
			};

			// TODO: this doesn't work and it doesn't update isMobile correctly
			// i think it's the same thing that was with TabsState
			// effect doesn't work as expected in class constructors
			window.addEventListener('resize', checkScreenSize);

			checkScreenSize();

			return () => window.removeEventListener('resize', checkScreenSize);
		});
	}
}

const DEFAULT_KEY = '$_is_mobile_state';

export const setIsMobileState = (key = DEFAULT_KEY) => {
	const isMobileState = new IsMobile();
	return setContext(key, isMobileState);
};

export const getIsMobileState = (key = DEFAULT_KEY) => {
	return getContext<ReturnType<typeof setIsMobileState>>(key);
};
