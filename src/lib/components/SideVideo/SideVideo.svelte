<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	type Props = SvelteHTMLElements['div'];

	const { class: className, ...props }: Props = $props();
</script>

<div class={['relative grow', className]} {...props}>
	<!-- VIDEO CONTAINER -->
	<div class="h-full w-full bg-[url($lib/assets/img/placeholders/header.jpg)] bg-cover"></div>

	<!-- OVERLAY -->
	<div
		class="absolute top-0 left-0 grid h-full w-full grid-cols-3 grid-rows-3 flex-col justify-between px-6 pt-6 pb-6 text-white"
	>
		<div class="col-span-3 justify-self-end">
			<span class=" italic">Unmute</span>
		</div>

		<div class="col-span-3 flex items-center justify-center">
			<span class="italic">Watch full</span>
		</div>

		<div class="col-span-3 flex w-full flex-col justify-end gap-6">
			<span>For:art</span>

			<div class=" flex w-full justify-between gap-4">
				<span>Gear:SONY A7III</span>
				<span>Budget:$0</span>
			</div>
		</div>
	</div>
</div>
