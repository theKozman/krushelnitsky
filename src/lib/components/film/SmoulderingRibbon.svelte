<script lang="ts">
	import { Ornament } from '$lib/components';
</script>

<div
	class="flex h-(--menu-height) w-full items-center justify-between border-t border-black py-6 pr-6 pl-4"
>
	<div class="flex gap-5">
		<p class="max-w-84">
			Коли сценарій був готовий, я повернувся до рідного міста Сарни, аби втілити його в життя.
			Зібравши друзів, яких міг знайти, ми почали знімати одну зі сцен.
		</p>
		<p class="max-w-84">
			Це був неймовірний досвід: ми працювали 8 годин майже без перерв, бо я не міг зупинитися, доки
			не побачив на екрані саме те, що уявляв у своїй голові.
		</p>
	</div>

	<div class="flex h-full items-start gap-16">
		<p class="flex flex-col">
			Gear:
			<span>SONY A7III </span>
			<span>SONY DCR-VX1000 </span>
			<span>IPHONE 14 pro </span>
		</p>

		<div class="relative mt-2 flex w-30">
			<Ornament variant="blaba" class="absolute! top-0 left-0 w-16 " />
			<Ornament variant="bleba" class="absolute! top-0 left-8" />
			<Ornament variant="bliba" class="absolute top-0 left-16!" />
		</div>
	</div>
</div>
