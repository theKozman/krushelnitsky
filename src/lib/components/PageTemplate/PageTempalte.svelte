<script lang="ts">
	import { Menu } from '$lib/components';
	import type { Snippet, SvelteComponent } from 'svelte';

	interface Props {
		sidebar?: Snippet;
		children?: Snippet;
	}

	let { children, sidebar }: Props = $props();
</script>

<div class="flex grow items-stretch">
	<div class="flex w-1/4 max-w-120 min-w-62.5 flex-col justify-end">
		{@render sidebar?.()}
		<Menu />
	</div>

	<div class="flex min-h-full grow flex-col">
		{@render children?.()}
	</div>
</div>
