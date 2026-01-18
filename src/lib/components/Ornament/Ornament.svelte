<script lang="ts">
	import type { Snippet } from 'svelte';
	import _1 from '$lib/assets/icons/ornaments/1.svg';
	import _2 from '$lib/assets/icons/ornaments/2.svg';
	import _3 from '$lib/assets/icons/ornaments/3.svg';
	import _4 from '$lib/assets/icons/ornaments/4.svg';
	import _5 from '$lib/assets/icons/ornaments/5.svg';
	import type { ClassValue } from 'svelte/elements';

	interface Props {
		variant?: 'blaba' | 'bleba' | 'bliba' | 'bloba' | 'bluba';
		children?: Snippet;
		class?: ClassValue;
	}

	const { variant = 'blaba', class: className, children }: Props = $props();

	const variantMap = new Map<Props['variant'], string>([
		['blaba', _1],
		['bleba', _2],
		['bliba', _3],
		['bloba', _4],
		['bluba', _5]
	]);

	const currentVariant = $derived(variantMap.get(variant));
</script>

<div class={['relative flex h-16 w-16 items-center justify-center', className]}>
	<img width={64} height={64} src={currentVariant} alt="" />
	{@render children?.()}
</div>
