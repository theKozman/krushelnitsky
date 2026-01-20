<script lang="ts">
	import { Menu, Ornament, SubmenuRibbon } from '$lib/components';
	import type { ClassValue } from 'svelte/elements';
</script>

{#snippet name(text: string, className?: ClassValue)}
	<span class={['text-[16.6667svw] leading-none tracking-tighter text-[#F17146]', className]}>
		{text}
	</span>
{/snippet}

<section
	class="relative flex min-h-[calc(100svh-var(--footer-height))] flex-col items-start justify-between border border-black"
>
	<div class="flex w-full grow flex-col justify-center px-6">
		<div class="flex w-full items-end justify-start gap-12 align-middle">
			{@render name('Богдан', ['leading-[0.75]!'])}
			<p class="max-w-84">
				Усі мої роботи створені з нульовим або мінімальним бюджетом. Кожна з них була викликом, але
				саме такі умови допомагають знаходити нестандартні рішення та робити щось справді особливе.
			</p>
		</div>
		<div class="flex w-full justify-center">
			{@render name('Крушель-')}
		</div>
		<div class="flex w-full items-end justify-end gap-12">
			<p class="max-w-82">
				Режисер із 20-ма різноплановими роботами, що поєднують естетику 70-х–90-х років із сучасними
				тенденціями. Постійно в пошуках нових форм вираження в кіно.
			</p>
			{@render name('ницький', ['leading-[0.75]!'])}
		</div>
	</div>

	<div class="flex w-full">
		<div class="w-1/4 max-w-120 min-w-62.5">
			<Menu />
		</div>

		<SubmenuRibbon class="w-auto! grow! border-none!">
			<div class="flex grow items-center justify-between self-start pr-6 pl-4">
				<p class="flex flex-col">
					Gear:
					<span>SONY A7III </span>
					<span>SONY DCR-VX1000 </span>
					<span>IPHONE 14 pro </span>
				</p>

				<div class="flex gap-4">
					<Ornament variant="blaba" />
					<Ornament variant="bleba" />
					<Ornament variant="bliba" />
				</div>
			</div>
		</SubmenuRibbon>
	</div>
</section>
