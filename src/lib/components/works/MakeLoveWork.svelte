<script>
	import { MakeLove, Ornament } from '$lib/components';
	import SubmenuRibbon from '../SubmenuRibbon/SubmenuRibbon.svelte';
</script>

<MakeLove />
<SubmenuRibbon>
	<div class="flex w-full justify-start gap-10 py-6 pr-6 pl-4">
		<p class="max-w-75">
			Кліп ми робили в ультра-експрес режимі.Потрібно було вигадати концепт без участі соліста в
			кадрі,бо він фізично не міг бути на зйомці.
		</p>

		<div class="flex grow justify-between">
			<p class="flex flex-col">
				Gear:
				<span>SONY A7III </span>
				<span>SONY DCR-VX1000 </span>
				<span>IPHONE 14 pro </span>
			</p>

			<div class="flex gap-4 self-center">
				<Ornament variant="blaba" />
				<Ornament variant="bleba" />
				<Ornament variant="bliba" />
			</div>
		</div>
	</div>
</SubmenuRibbon>
