<script lang="ts">
	import { Header, OverlayedVideo, HeroRibbon, PageTemplate } from '$lib/components';
	import { EVideoSelectorKeys, getVideoSelectorState } from '$lib/stores/video-selection.svelte';

	const videoSelector = getVideoSelectorState(EVideoSelectorKeys.HORIZONTAL);
</script>

<section
	class="relative flex min-h-[calc(100svh-var(--footer-height))] flex-col border border-black"
>
	<PageTemplate>
		{#snippet sidebar()}
			<Header />
		{/snippet}
		<div class="hidden grow flex-col md:flex">
			<OverlayedVideo videoItem={videoSelector.activeVideo} />
			<HeroRibbon />
		</div>
	</PageTemplate>
</section>
