<script lang="ts">
	import { Menu } from '$lib/components';
	import type { Snippet, SvelteComponent } from 'svelte';

	interface Props {
		sidebar?: Snippet;
		children?: Snippet;
	}

	let { children, sidebar }: Props = $props();
</script>

<div class="flex grow flex-col items-stretch md:flex-row">
	<div class="flex w-full flex-col justify-end md:w-1/4 md:max-w-120 md:min-w-80">
		{@render sidebar?.()}
		<Menu />
	</div>

	<div class="flex min-h-full grow flex-col">
		{@render children?.()}
	</div>
</div>
