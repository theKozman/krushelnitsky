<script lang="ts">
	import RibbonItem from './RibbonItem.svelte';

	import { EVideoSelectorKeys, getVideoSelectorState } from '$lib/stores/video-selection.svelte';

	const videoSelector = getVideoSelectorState(EVideoSelectorKeys.HORIZONTAL);
</script>

<div
	class="max-w-ful flex max-h-40 min-h-40 w-full justify-stretch overflow-auto border-t border-black"
>
	<!-- allow max of 4 items -->
	{#each videoSelector.videos.slice(0, 4) as video}
		<RibbonItem
			key={video.key}
			src={video.src}
			onclick={videoSelector.setActiveVideo}
			pause={videoSelector.activeVideo.key === video.key}
			inactive={videoSelector.activeVideo.key === video.key}
		/>
	{/each}
</div>
