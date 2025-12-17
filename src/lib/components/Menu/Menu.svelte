<script>
	import NavLink from './NavLink.svelte';
</script>

<div class="flex h-40 w-full border-y border-black bg-white">
	<!-- MENU BUTTON -->
	<button class="w-1/4 max-w-120 min-w-62.5 cursor-pointer border-r text-[40px] hover:bg-[#EF8997]">
		Меню
	</button>
	<!-- NAV -->
	<nav class="flex grow">
		<NavLink href="/" class="w-1/3">Комерція</NavLink>
		<NavLink href="/" class="w-1/3">Музичні відео</NavLink>
		<NavLink href="/" class="w-1/3">Фільм</NavLink>
	</nav>
</div>
