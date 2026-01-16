<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { setMenuState } from '$lib/stores';
	import { Footer, Microchel } from '$lib';

	type Props = {};

	let { children } = $props();

	setMenuState();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<main class="">
	<!-- MIKROCHEL -->
	<Microchel class="absolute top-5 left-1/2 z-50" />
	{@render children()}
	<Footer />
</main>
