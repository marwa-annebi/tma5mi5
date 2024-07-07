<script>
	export let title;
	export let value;
	export let icon;
	export let growth;
</script>

<div class="dashboard-card">
	<div class="icon">{icon}</div>
	<div class="details">
		<h3>{title}</h3>
		<p>{value}</p>
		<p class="growth">{growth > 0 ? `+${growth}%` : `${growth}%`}</p>
	</div>
</div>

<style>
	.dashboard-card {
		display: flex;
		padding: 20px;
		border-radius: 10px;
		background: #fff;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	}
	.icon {
		font-size: 40px;
		margin-right: 10px;
	}
	.details {
		flex: 1;
	}
	.details h3 {
		margin: 0;
		font-size: 18px;
	}
	.details p {
		margin: 5px 0;
		font-size: 16px;
	}
	.growth {
		color: green;
	}
	.growth:before {
		content: '(';
	}
	.growth:after {
		content: ')';
	}
	.growth[data-negative='true'] {
		color: red;
	}
</style>
