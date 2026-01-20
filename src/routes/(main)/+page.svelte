<script lang="ts">
	import { Header, MakeLove, HeroRibbon, PageTemplate } from '$lib/components';
</script>

<section
	class="relative flex min-h-[calc(100svh-var(--footer-height))] flex-col border border-black"
>
	<PageTemplate>
		{#snippet sidebar()}
			<Header />
		{/snippet}
		<div class="hidden grow flex-col md:flex">
			<MakeLove />
			<HeroRibbon />
		</div>
	</PageTemplate>
</section>
