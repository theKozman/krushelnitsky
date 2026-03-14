<script lang="ts">
	import type { VideoItem } from '$lib/types';

	type Props = {
		videoItem: VideoItem;
	};

	const { videoItem }: Props = $props();
</script>

<div class="relative h-full grow">
	<!-- VIDEO CONTAINER -->
	<div class="h-full w-full bg-[url($lib/assets/img/placeholders/hero.jpg)] bg-cover"></div>

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
				<span class="italic">Unmute</span>
				<span class="">Gear:{videoItem.gear.map(({ label }) => label).join(',')}</span>
			</div>
			<span>For:{videoItem.for}</span>
			<span>Budget:{videoItem.budget || '$0'}</span>
		</div>
	</div>
</div>
