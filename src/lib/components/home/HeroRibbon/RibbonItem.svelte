<script lang="ts">
	import VideoPlayer from '$lib/components/VideoPlayer/VideoPlayer.svelte';

	type Props = {
		key: string;
		src: string;
		pause?: boolean;
		onclick: (key: string) => void;
	};

	const { src, key, pause, onclick }: Props = $props();
</script>

<div
	class="h-39.75 w-1/4 cursor-pointer"
	onclick={() => onclick(key)}
	onkeyup={(e) => e.key === 'Enter' && onclick(key)}
	role="button"
	tabindex="0"
>
	<VideoPlayer {src} {pause} />
</div>
