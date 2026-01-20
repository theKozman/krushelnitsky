<script lang="ts">
	import microchel from '$lib/assets/animation-crop-min.gif';
	import { EPages } from '$lib/pages';
	import type { ClassValue } from 'svelte/elements';
	type Props = {
		class?: ClassValue;
	};

	const { class: className }: Props = $props();
</script>

<figure aria-label="3d bogdan rotating in T-pose" class={['w-22', className]}>
	<a href={EPages.ABOUT} draggable="false" data-sveltekit-preload-data="hover">
		<img
			width="88"
			height="120"
			class="img-1 w-full select-none"
			draggable="false"
			src={microchel}
			alt=""
		/>
	</a>
</figure>
