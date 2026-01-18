<script lang="ts">
	import { getTabsState } from '$lib/stores';
	import TabLink from './TabLink.svelte';

	const tabsState = getTabsState();
</script>

<div class="relative grow border-r border-black">
	<!-- OVERLAY -->
	<div
		class="absolute top-0 left-0 flex h-full w-full grid-rows-3 flex-col justify-start gap-6 px-6 pt-2 pb-6"
	>
		<h2 class="text-[2.5rem]">Роботи</h2>

		<div class="col-span-3 flex w-full flex-col gap-6 overflow-auto">
			{#each tabsState?.tabs as tab}
				<TabLink {...tab} />
			{/each}
		</div>
	</div>
</div>
