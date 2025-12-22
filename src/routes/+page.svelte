<script lang="ts">
	import { Footer, Header, Hero, Menu } from '$lib/components';
	import HeroRibbon from '$lib/components/HeroRibbon/HeroRibbon.svelte';
	import Microchel from '$lib/components/Microchel/Microchel.svelte';
</script>

<section class=" relative flex h-svh flex-col border border-black">
	<!-- MIKROCHEL -->
	<Microchel class="absolute top-5 left-1/2 z-50" />

	<!-- MAIN -->
	<div class="flex grow">
		<div class="flex w-1/4 max-w-120 min-w-62.5 flex-col">
			<Header />
			<Menu />
		</div>

		<!-- HERO -->
		<div class="flex h-full grow flex-col">
			<Hero />
			<HeroRibbon />
		</div>
	</div>
	<!-- MENU -->

	<Footer />
</section>
