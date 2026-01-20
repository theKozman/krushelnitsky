<script lang="ts">
	import { page } from '$app/state';
	import classNames from 'classnames';
	import type { Snippet } from 'svelte';

	type Props = {
		href: string;
		class?: string;
		children: Snippet;
	};

	const { href, class: className, children }: Props = $props();
	// TODO: current path link
</script>

<a
	class={classNames(
		'flex cursor-pointer items-center justify-center text-[40px] not-italic last:border-none hover:text-[#1321E8] hover:italic md:h-full md:grow md:border-r md:border-black',
		page.url.pathname === href.split('#')[0] && 'text-[#1321E8] italic!',
		className
	)}
	{href}
>
	{@render children()}
</a>
