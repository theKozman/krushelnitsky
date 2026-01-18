<script lang="ts">
	import classNames from 'classnames';

	type Props = {
		active?: boolean;
	};

	const { active }: Props = $props();
</script>

<div
	class={classNames(
		'h-2 w-9.25 border bg-white ',
		active ? 'border-white opacity-100' : 'border-black opacity-60'
	)}
></div>
