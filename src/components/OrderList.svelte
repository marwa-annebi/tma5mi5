<script>
	import OrderCard from './OrderCard.svelte';
	export let orders;
</script>

<div class="order-list">
	{#each orders as order}
		<OrderCard {order} />
	{/each}
</div>

<style>
	.order-list {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
	}
</style>
