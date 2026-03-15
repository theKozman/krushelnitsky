<script lang="ts">
	import type { VideoItem } from '$lib/types';
	import { VideoPlayer } from '$lib/components';

	type Props = {
		videoItem: VideoItem;
	};

	let { videoItem }: Props = $props();

	let isMuted = $state(true);
</script>

<div class="relative h-full grow">
	<!-- VIDEO CONTAINER -->
	{#key videoItem.key}
		<div class="h-full w-full bg-cover">
			<VideoPlayer src={videoItem.src} muted={isMuted} />
		</div>
	{/key}

	<!-- OVERLAY -->
	<div
		class="absolute top-0 left-0 grid h-full w-full grid-cols-3 grid-rows-3 flex-col justify-between p-6 text-white"
	>
		<div class="row-start-2 flex flex-col justify-center">
			<span class="uppercase">{videoItem.title}</span>
			<span class="">{videoItem.subtitle}</span>
		</div>
		<div class="row-start-2 flex flex-col items-center justify-center">
			<span class="italic">Watch full</span>
		</div>

		<div class="col-span-3 row-start-3 flex w-full items-end justify-between">
			<div class="flex flex-col gap-3.5">
				<button
					class="inline cursor-pointer appearance-none text-left font-light italic"
					onclick={() => (isMuted = !isMuted)}
				>
					{isMuted ? 'Unmute' : 'Mute'}
				</button>
				<span class="">Gear:{videoItem.gear.map(({ label }) => label).join(',')}</span>
			</div>
			<span>For:{videoItem.for}</span>
			<span>Budget:{videoItem.budget || '$0'}</span>
		</div>
	</div>
</div>
