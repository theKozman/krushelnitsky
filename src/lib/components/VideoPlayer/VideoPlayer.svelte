<script lang="ts">
	type Props = {
		src: string;
		muted?: boolean;
		pause?: boolean;
	};

	let { src, muted = true, pause }: Props = $props();

	let video: HTMLVideoElement;

	$effect(() => {
		video.load();
		video.play();
		[src];
	});
</script>

<div class="relative h-full w-full bg-cyan-500">
	<video
		bind:this={video}
		bind:paused={pause}
		disablepictureinpicture
		class="absolute top-0 right-0 bottom-0 left-0 h-full w-full object-cover"
		controls={false}
		autoplay
		loop
		{muted}
	>
		<source {src} type="video/mp4" />
	</video>
</div>
