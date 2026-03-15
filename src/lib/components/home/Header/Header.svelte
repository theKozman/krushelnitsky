<script>
	import OverlayedVideo from '$lib/components/OverlayedVideo/OverlayedVideo.svelte';
	import { EVideoSelectorKeys, getVideoSelectorState } from '$lib/stores/video-selection.svelte';
	import SliderButton from './SliderButton.svelte';

	const videoSelector = getVideoSelectorState(EVideoSelectorKeys.VERTICAL);
	let { link, ...activeVideo } = $derived(videoSelector.activeVideo);
</script>

<div class="relative grow border-r border-black">
	<!-- VIDEO CONTAINER -->
	<OverlayedVideo videoItem={activeVideo} mode="vertical" />

	<!-- OVERLAY -->
	<div
		class="absolute top-0 left-0 grid h-full w-full grid-cols-3 grid-rows-3 flex-col justify-between px-6 pt-2 pb-6 text-white"
	>
		<nav class="col-span-3 flex w-full justify-start gap-2">
			{#each videoSelector.videos as video}
				<SliderButton
					active={video.key === videoSelector.activeVideo.key}
					onclick={() => videoSelector.setActiveVideo(video.key)}
				/>
			{/each}
		</nav>
	</div>
</div>
