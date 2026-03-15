<script lang="ts">
	import classNames from 'classnames';

	type Props = {
		active?: boolean;
		onclick?: () => void;
	};

	const { active, onclick }: Props = $props();
	$inspect(active);
</script>

<button
	class="group h-2.25 w-9.25 cursor-pointer border-none opacity-60"
	{onclick}
	aria-label="slider-button"
>
	<div
		class={[
			'h-0.5 bg-white transition-[height] group-hover:h-full',
			active && 'h-full',
			active ? 'bg-white!' : 'bg-black!'
		]}
	></div>
</button>
