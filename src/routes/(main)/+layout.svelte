<script lang="ts">
	import { setMenuState } from '$lib/stores';
	import { Footer, Microchel } from '$lib';
	import { page } from '$app/state';
	import { EPages } from '$lib/pages';

	let { children } = $props();

	setMenuState();
</script>

<main class="">
	<Microchel
		class={[
			'absolute left-1/2 z-50 -translate-x-1/2 transition-[top,left,transform,width] duration-1000',
			page.url.pathname === EPages.ABOUT ? 'top-28 w-96 ' : 'top-5'
		]}
	/>
	{@render children()}
	<Footer />
</main>
