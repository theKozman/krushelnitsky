<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { setMenuState } from '$lib/stores';

	let { children } = $props();

	setMenuState();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<main>
	{@render children()}
</main>
