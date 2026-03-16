<script lang="ts">
	import OverlayedVideo from '$lib/components/OverlayedVideo/OverlayedVideo.svelte';
	import { EVideoSelectorKeys, getVideoSelectorState } from '$lib/stores/video-selection.svelte';
	import { onMount } from 'svelte';
	import SliderButton from './SliderButton.svelte';

	const videoSelector = getVideoSelectorState(EVideoSelectorKeys.VERTICAL);
	let { link, ...activeVideo } = $derived(videoSelector.activeVideo);

	const duration = 10000;
	const steps = 15;

	let progress = $state(0);
	let startTime = $state<number>();

	onMount(() => {
		let animationId: number;

		const handleProgress: FrameRequestCallback = (timestamp) => {
			if (!startTime) startTime = timestamp;
			const delta = timestamp - startTime;
			const timing = delta / duration;

			progress = (Math.floor(timing * steps) / steps) * 100;

			if (progress >= 100) {
				progress = 0;
				startTime = timestamp;

				const currentVideoIndex = videoSelector.videos.findIndex(
					(v) => v.key === videoSelector.activeVideo.key
				);

				// select next video or start from the beginning if at the end
				const nextVideo = videoSelector.videos?.[currentVideoIndex + 1] || videoSelector.videos[0];

				videoSelector.setActiveVideo(nextVideo.key);
			}

			animationId = requestAnimationFrame(handleProgress);
		};

		animationId = requestAnimationFrame(handleProgress);

		return () => {
			cancelAnimationFrame(animationId);
		};
	});
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
					{progress}
					active={video.key === videoSelector.activeVideo.key}
					onclick={() => {
						startTime = undefined;
						videoSelector.setActiveVideo(video.key);
					}}
				/>
			{/each}
		</nav>
	</div>
</div>
