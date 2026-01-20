<script lang="ts">
	import classNames from 'classnames';

	type Props = {
		active?: boolean;
	};

	const { active }: Props = $props();
</script>

<div
	class={classNames(
		'h-0.5 w-9.25 border bg-white opacity-60',
		active ? 'border-white' : 'border-black'
	)}
></div>
