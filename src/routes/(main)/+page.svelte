<script lang="ts">
	import { Header, HorizontalOverlayedVideo, HeroRibbon, PageTemplate } from '$lib/components';
	import { videosState } from '$lib/states/videos';
	import {
		EVideoSelectorKeys,
		getVideoSelectorState,
		setVideoSelectorState
	} from '$lib/stores/video-selection.svelte';

	const videoSelector = setVideoSelectorState(
		EVideoSelectorKeys.HORIZONTAL,
		videosState.filter((v) => v.type === 'horizontal')
	);
</script>

<section
	class="relative flex min-h-[calc(100svh-var(--footer-height))] flex-col border border-black"
>
	<PageTemplate>
		{#snippet sidebar()}
			<Header />
		{/snippet}
		<div class="hidden grow flex-col md:flex">
			<HorizontalOverlayedVideo videoItem={videoSelector.activeVideo} />
			<HeroRibbon />
		</div>
	</PageTemplate>
</section>
