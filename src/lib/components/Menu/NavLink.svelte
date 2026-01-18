<script lang="ts">
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
		'flex h-full grow cursor-pointer items-center justify-center border-r border-black text-[40px] not-italic last:border-none hover:text-[#1321E8] hover:italic',
		className
	)}
	{href}
>
	{@render children()}
</a>
