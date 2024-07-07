<script>
	// You can add any additional script logic here if needed
</script>

<svelte:head>
	<title>Coming Soon</title>
</svelte:head>

<div class="coming-soon-container">
	<div class="content">
		<h1>Coming Soon</h1>
		<p>We're working hard to bring you this feature. Stay tuned!</p>
		<a href="/" class="btn btn-primary">Go to Home</a>
	</div>
</div>

<style>
	.coming-soon-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		text-align: center;
		background-color: #f8f9fa;
		color: #333;
	}

	.content {
		max-width: 600px;
		padding: 40px;
		background: #fff;
		border-radius: 15px;
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
	}

	h1 {
		font-size: 3rem;
		margin-bottom: 20px;
		color: #ff6347;
	}

	p {
		font-size: 1.2rem;
		margin-bottom: 20px;
	}

	.btn-primary {
		background-color: #ff6347;
		color: white;
		padding: 10px 20px;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		transition: background-color 0.3s;
		text-decoration: none;
	}

	.btn-primary:hover {
		background-color: #ff3b21;
	}
</style>
