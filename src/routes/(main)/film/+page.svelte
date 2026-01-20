<script lang="ts">
	import { Cover, PageTemplate, SmoulderingHero, SmoulderingRibbon } from '$lib/components';
</script>

<section
	class="relative flex min-h-[calc(100svh-var(--footer-height))] flex-col border border-black"
>
	<PageTemplate>
		{#snippet sidebar()}
			<Cover />
		{/snippet}

		<SmoulderingHero />
		<SmoulderingRibbon />
	</PageTemplate>
</section>
