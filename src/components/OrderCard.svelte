<script>
	export let order;
</script>

<div class="order-card">
	<div class="order-header">
		<img src={order.avatar} alt="Avatar" class="avatar" />
		<div>
			<div class="order-id">Order #{order.id}</div>
			<div class="order-date">{order.date}</div>
		</div>
	</div>
	<div class="order-items">
		{#each order.items as item}
			<div class="item">
				<img src={item.img} alt={item.name} />
				<div class="item-details">
					<div class="item-name">{item.name}</div>
					<div class="item-price">${item.price.toFixed(2)}</div>
					<div class="item-qty">Qty: {item.qty}</div>
				</div>
			</div>
		{/each}
	</div>
	<div class="order-footer">
		<div class="order-total">
			X{order.items.length} Items <strong>${order.total.toFixed(2)}</strong>
		</div>
		<div class="order-status {order.status}">{order.status}</div>
	</div>
</div>

<style>
	.order-card {
		background: #ffffff;
		border-radius: 10px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		padding: 20px;
		width: 300px;
	}
	.order-header {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}
	.avatar {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		margin-right: 10px;
	}
	.order-id {
		font-weight: bold;
	}
	.order-date {
		color: #888;
	}
	.order-items {
		margin-bottom: 20px;
	}
	.item {
		display: flex;
		margin-bottom: 10px;
	}
	.item img {
		width: 50px;
		height: 50px;
		border-radius: 5px;
		margin-right: 10px;
	}
	.item-details {
		flex: 1;
	}
	.item-name {
		font-weight: bold;
	}
	.item-price {
		color: #888;
	}
	.item-qty {
		color: #aaa;
	}
	.order-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.order-total {
		font-weight: bold;
	}
	.order-status {
		padding: 5px 10px;
		border-radius: 5px;
		text-transform: capitalize;
	}
	.order-status.completed {
		background: #d4edda;
		color: #155724;
	}
	.order-status.rejected {
		background: #f8d7da;
		color: #721c24;
	}
	.order-status.pending {
		background: #fff3cd;
		color: #856404;
	}
</style>
