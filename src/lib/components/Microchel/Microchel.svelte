<script lang="ts">
	import microchel1 from '$lib/assets/img/placeholders/microchel-1.png';
	import microchel2 from '$lib/assets/img/placeholders/microchel-2.png';
	type Props = {
		class?: string;
	};

	const { class: className }: Props = $props();
</script>

<figure aria-label="3d bogdan relative rotating in T-pose" class={className}>
	<img width="88" height="120" class="img-1" src={microchel1} alt="" />
	<img width="88" class="img-2 absolute top-0 left-0" height="120" src={microchel2} alt="" />
</figure>

<style>
	.img-1 {
		animation: appear 1s infinite;
	}

	.img-2 {
		animation: appear-alt 1s infinite;
	}

	@keyframes appear {
		0% {
			opacity: 0%;
		}
		49% {
			opacity: 0%;
		}
		50% {
			opacity: 100%;
		}
		100% {
			opacity: 100%;
		}
	}
	@keyframes appear-alt {
		0% {
			opacity: 100%;
		}
		49% {
			opacity: 100%;
		}
		50% {
			opacity: 0%;
		}
		100% {
			opacity: 0%;
		}
	}
</style>
