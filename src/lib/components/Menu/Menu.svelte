<script lang="ts">
	import bohdanTV from '$lib/assets/img/bohdan-tv.png';

	import { slide, fly, fade } from 'svelte/transition';
	import NavLink from './NavLink.svelte';

	let isOpen = $state(false);
</script>

<div class="relative z-30 flex h-(--menu-height) border-y border-black bg-white">
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
			in:slide={{ axis: 'x', duration: 400 }}
			out:slide={{ axis: 'x', delay: 300 }}
			class="absolute left-full flex h-full w-[75vw] bg-white"
		>
			<img
				in:fly={{ delay: 350, y: 200 }}
				out:fly={{ y: 200 }}
				class="absolute top-0 left-1/6 z-10 max-w-89.5 -translate-y-full"
				src={bohdanTV}
				alt="Bohdan Krushelnitsky with a cig in mouth holding a retro tv like he is trying to sell it to you for not that reasonable price"
			/>
			<NavLink href="/" class="grow">Головна</NavLink>
			<NavLink href="/" class="grow">Роботи</NavLink>
			<NavLink href="/" class="grow">Фільм</NavLink>
			<NavLink href="/" class="grow">Інфо</NavLink>
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
