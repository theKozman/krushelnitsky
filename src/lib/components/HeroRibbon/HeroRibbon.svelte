<script>
	import RibbonItem from './RibbonItem.svelte';

	import preview1 from '$lib/assets/img/works/preview-1.jpg';
	import preview2 from '$lib/assets/img/works/preview-2.jpg';
	import preview3 from '$lib/assets/img/works/preview-3.jpg';
	import preview4 from '$lib/assets/img/works/preview-4.jpg';
</script>

<div class="flex h-40 w-full justify-stretch border-t border-black">
	<RibbonItem src={preview1} alt="work-preview" />
	<RibbonItem src={preview2} alt="work-preview" />
	<RibbonItem src={preview3} alt="work-preview" />
	<RibbonItem src={preview4} alt="work-preview" />
</div>
