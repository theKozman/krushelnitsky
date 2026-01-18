<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	type Props = SvelteHTMLElements['div'];

	const { children, class: className, ...props }: Props = $props();
</script>

<div
	class={['flex min-h-(--menu-height) w-full justify-stretch border-t border-black', className]}
	{...props}
>
	{@render children?.()}
</div>
