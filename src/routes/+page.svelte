<script lang="ts">
	import { Footer, Header, Hero, Menu } from '$lib/components';
	import Microchel from '$lib/components/Microchel/Microchel.svelte';
</script>

<section class=" relative flex h-svh flex-col border border-black">
	<!-- MIKROCHEL -->
	<Microchel class="absolute top-5 left-1/2 z-50" />

	<!-- MAIN -->
	<div class="flex grow">
		<Header />

		<!-- HERO -->
		<Hero />
	</div>
	<!-- MENU -->
	<Menu />

	<Footer />
</section>
