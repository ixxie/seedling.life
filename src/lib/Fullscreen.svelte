<script lang="ts">
	let innerHeight: number;
</script>

<svelte:window bind:innerHeight />

<div style:height={innerHeight + 'px'}>
	<slot />
</div>
