<script lang="ts">
	import { Header, Hero, HeroRibbon, PageTemplate } from '$lib/components';
</script>

<section class="relative flex h-[calc(100svh-var(--footer-height))] flex-col border border-black">
	<PageTemplate>
		{#snippet sidebar()}
			<Header />
		{/snippet}
		<Hero />
		<HeroRibbon />
	</PageTemplate>
</section>
