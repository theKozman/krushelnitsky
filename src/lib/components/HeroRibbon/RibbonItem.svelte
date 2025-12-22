<script lang="ts">
	type Props = {
		src: string;
		alt: string;
	};

	const { src, alt }: Props = $props();
</script>

<img width={277} height={166} {src} {alt} class="h-full grow object-cover" />
