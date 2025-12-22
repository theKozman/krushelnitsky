<script>
	import { slide } from 'svelte/transition';
	import NavLink from './NavLink.svelte';

	let isOpen = $state(false);
</script>

<div class="relative z-30 flex h-40 w-full border-y border-black bg-white">
	<!-- MENU BUTTON -->
	<button
		class={[
			'w-full cursor-pointer border-r text-[40px] hover:bg-[#EF8997] hover:opacity-90',
			{ 'bg-[#EF8997]': isOpen }
		]}
		onclick={() => (isOpen = !isOpen)}>Меню</button
	>
	<!-- NAV -->
	{#if isOpen}
		<nav
			transition:slide={{ axis: 'x' }}
			class={['absolute left-full flex h-full w-[75vw] bg-white']}
		>
			<NavLink href="/" class="w-1/3">Комерція</NavLink>
			<NavLink href="/" class="w-1/3">Музичні відео</NavLink>
			<NavLink href="/" class="w-1/3">Фільм</NavLink>
		</nav>
	{/if}
</div>
