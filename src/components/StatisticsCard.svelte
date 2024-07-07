<script>
	export let title;
	export let value;
</script>

<div class="statistics-card">
	<h3>{title}</h3>
	<p>{value}</p>
</div>

<style>
	.statistics-card {
		padding: 20px;
		border-radius: 10px;
		background: #fff;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	}
	.statistics-card h3 {
		margin: 0;
		font-size: 18px;
	}
	.statistics-card p {
		margin: 5px 0;
		font-size: 16px;
	}
</style>
