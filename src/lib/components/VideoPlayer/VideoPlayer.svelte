<script lang="ts">
	type Props = {
		src: string;
		muted?: boolean;
		pause?: boolean;
	};

	const { src, muted = true, pause }: Props = $props();

	let video: HTMLVideoElement;

	$effect(() => {
		video.load();
		video.play();
		[src];
	});

	$effect(() => {
		if (pause) {
			video.pause();
		} else {
			video.play();
		}
	});
</script>

<video
	bind:this={video}
	disablepictureinpicture
	class="h-full w-full object-cover"
	controls={false}
	autoplay
	loop
	{muted}
>
	<source {src} type="video/mp4" />
</video>
