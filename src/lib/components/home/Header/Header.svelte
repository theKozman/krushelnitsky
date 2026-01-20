<script>
	import SliderButton from './SliderButton.svelte';
</script>

<div class="relative grow border-r border-black">
	<!-- VIDEO CONTAINER -->
	<div
		class="h-[calc(100svh-var(--mobile-menu-height))] w-full bg-[url($lib/assets/img/placeholders/header.jpg)] bg-cover md:h-full"
	></div>

	<!-- OVERLAY -->
	<div
		class="absolute top-0 left-0 grid h-full w-full grid-cols-3 grid-rows-3 flex-col justify-between px-6 pt-2 pb-6 text-white"
	>
		<nav class="col-span-3 flex w-full justify-between gap-2">
			<SliderButton active />
			<SliderButton />
			<SliderButton />
			<SliderButton />
			<SliderButton />
			<SliderButton />
			<SliderButton />
		</nav>

		<div class="col-span-3 flex flex-col justify-center">
			<span class="uppercase">The Smouldering</span>
			<span>Short Film</span>
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
