<script lang="ts">
	import { BetterCallNice, PageTemplate, StyleZip, TabList, MakeLoveWork } from '$lib';
	import { setTabsState } from '$lib/stores';

	const tabsState = setTabsState({
		initialState: [
			{
				label: 'MAKE LOVE NOT BABIES',
				client: 'sanja.jeweler',
				anchor: 'make-love-not-babies',
				component: MakeLoveWork
			},
			{
				label: 'STYLEZIP',
				client: 'streets.sb',
				anchor: 'stylezip',
				component: StyleZip
			},
			{
				label: 'BETTER CALL NICE',
				client: 'tastytail.lviv',
				anchor: 'better-call-nice',
				component: BetterCallNice
			}
		]
	});

	const { currentTab } = $derived(tabsState);
</script>

<section class="relative flex h-[calc(100svh-var(--footer-height))] flex-col border border-black">
	<PageTemplate>
		{#snippet sidebar()}
			<TabList />
		{/snippet}

		{#if currentTab}
			<currentTab.component />
		{/if}
	</PageTemplate>
</section>
