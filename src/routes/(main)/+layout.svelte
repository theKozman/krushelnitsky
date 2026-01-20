<script lang="ts">
	import { setIsMobileState, setMenuState } from '$lib/stores';
	import { Footer, Microchel } from '$lib';
	import { page } from '$app/state';
	import { EPages } from '$lib/pages';
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let { children } = $props();

	setMenuState();
	setIsMobileState();
</script>

<main class="">
	<Microchel
		class={[
			'absolute left-1/2 z-50 -translate-x-1/2 transition-[top,left,transform,width] duration-1000',
			page.url.pathname === EPages.ABOUT ? 'top-28 w-[max(28.4vw,400px)] ' : 'top-5'
		]}
	/>
	{@render children()}
	<Footer class="max-md:hidden" />
</main>
