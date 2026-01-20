<script lang="ts">
	import bohdanTV from '$lib/assets/img/bohdan-tv.png';

	import { slide, fly, fade } from 'svelte/transition';
	import NavLink from './NavLink.svelte';
	import { EPages } from '$lib/pages';
	import { browser } from '$app/environment';
	import { getIsMobileState } from '$lib/stores';

	if (browser) {
		const styles = getComputedStyle(document.documentElement);
		const md = styles.getPropertyValue('--breakpoint-md');
	}

	let isOpen = $state(false);

	let { isMobile } = getIsMobileState();
</script>

<div
	class="fixed bottom-0 left-0 z-30 flex h-(--mobile-menu-height) w-full border-t border-black bg-white sm:h-(--menu-height) md:relative"
>
	<!-- MENU BUTTON -->
	<button
		class={[
			'relative z-50 w-full cursor-pointer border-r  text-[40px] hover:bg-[#EF8997] hover:opacity-90',
			{ 'bg-[#EF8997]': isOpen }
		]}
		onclick={() => (isOpen = !isOpen)}
	>
		{isOpen ? 'Закрити' : 'Меню'}
	</button>

	<!-- NAV -->
	{#if isOpen}
		<nav
			in:slide={{ axis: isMobile ? 'y' : 'x', duration: 350 }}
			out:slide={{ axis: isMobile ? 'y' : 'x', delay: 200 }}
			class="fixed flex h-[calc(100svh-var(--mobile-menu-height))] w-full flex-col gap-y-3 border-t border-black bg-white pt-30 max-md:-top-full max-sm:top-0 max-sm:left-0 sm:absolute sm:h-full sm:flex-row md:left-full md:w-[75svw] md:pt-0"
			data-sveltekit-preload-data="hover"
		>
			<img
				in:fly={{ delay: 280, y: 200, duration: 300 }}
				out:fly={{ y: 200, duration: 250 }}
				class="absolute -top-px left-1/6 z-10 hidden -translate-y-full sm:block md:max-w-89.5"
				src={bohdanTV}
				alt="Bohdan Krushelnitsky with a cig in his mouth holding a retro tv like he is trying to peddle it to you for not very reasonable price"
			/>
			<NavLink href={EPages.HOME} class="w-full">Головна</NavLink>
			<NavLink href={EPages.WORKS} class="w-full">Роботи</NavLink>
			<NavLink href={EPages.FILM} class="w-full">Фільм</NavLink>
			<NavLink href={EPages.ABOUT} class="w-full">Інфо</NavLink>
		</nav>
	{/if}
</div>

<!-- OVERLAY  -->
{#if isOpen}
	<div
		transition:fade={{ duration: 200 }}
		class="fixed top-0 left-0 z-20 h-svh w-svw bg-black opacity-20"
	></div>
{/if}
