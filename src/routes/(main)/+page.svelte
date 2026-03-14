<script lang="ts">
	import { Header, HorizontalOverlayedVideo, HeroRibbon, PageTemplate } from '$lib/components';
	import { videosState } from '$lib/states/videos';
</script>

<section
	class="relative flex min-h-[calc(100svh-var(--footer-height))] flex-col border border-black"
>
	<PageTemplate>
		{#snippet sidebar()}
			<Header />
		{/snippet}
		<div class="hidden grow flex-col md:flex">
			<HorizontalOverlayedVideo videoItem={videosState[0]} />
			<HeroRibbon />
		</div>
	</PageTemplate>
</section>
