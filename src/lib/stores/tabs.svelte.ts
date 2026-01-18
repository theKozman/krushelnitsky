import { page } from '$app/state';
import { getContext, setContext, type Component } from 'svelte';

export type TTab = {
	label: string;
	client: string;
	anchor: string;
	component: Component;
};

interface TabsState {
	tabs: TTab[];
	currentTab: TTab | null;
}

class Tabs implements TabsState {
	tabs: TabsState['tabs'];
	currentTab: TTab | null;

	constructor(tabs: TTab[]) {
		this.tabs = $state(tabs);
		this.currentTab = $derived(
			this.tabs.find(({ anchor }) => anchor === page.url.hash.replace('#', '')) || null
		);
	}
}

const DEFAULT_KEY = Symbol('$_tabs_state');

export const setTabsState = ({
	key = DEFAULT_KEY,
	initialState = []
}: {
	key?: Symbol | string;
	initialState?: TTab[];
}) => {
	const tabsState = new Tabs(initialState);
	return setContext(key, tabsState);
};

export const getTabsState = (key = DEFAULT_KEY) => {
	return getContext<ReturnType<typeof setTabsState>>(key);
};
