<script lang="ts">
	type Props = {
		active?: boolean;
		progress: number;
		onclick?: () => void;
	};

	const { active, progress, onclick }: Props = $props();
</script>

<button
	class="group h-2.25 w-9.25 cursor-pointer border-none opacity-60"
	{onclick}
	aria-label="slider-button"
>
	<div class={['h-0.5 bg-black transition-[height] group-hover:h-full', active && 'h-full']}>
		{#if active}
			<div
				class="h-full w-full origin-left scale-x-0 bg-white will-change-transform"
				style:scale={`${progress}% 100%`}
			></div>
		{/if}
	</div>
</button>
