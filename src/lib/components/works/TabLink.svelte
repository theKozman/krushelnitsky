<script lang="ts">
	import { page } from '$app/state';
	import type { TTab } from '$lib/stores';

	interface Props extends TTab {}

	const { label, client, anchor }: Props = $props();
</script>

<a href={`${page.url.pathname}#${anchor}`} class="flex justify-between not-italic active:italic">
	<span class="max-w-24">{label}</span>

	<div class="flex max-w-34 flex-wrap">
		<span>For:</span>
		<span>{client}</span>
	</div>
</a>
