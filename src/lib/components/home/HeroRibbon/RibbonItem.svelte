<script lang="ts">
	import VideoPlayer from '$lib/components/VideoPlayer/VideoPlayer.svelte';

	type Props = {
		key: string;
		src: string;
		pause?: boolean;
		inactive?: boolean;
		onclick: (key: string) => void;
	};

	const { src, key, pause, inactive, onclick }: Props = $props();
</script>

<div
	class={['h-39.75 w-1/4 cursor-pointer', inactive && 'sepia']}
	onclick={() => onclick(key)}
	onkeyup={(e) => e.key === 'Enter' && onclick(key)}
	role="button"
	tabindex="0"
>
	<VideoPlayer {src} {pause} />
</div>
