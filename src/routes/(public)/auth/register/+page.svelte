<script lang="ts">
	import type { PageData, ActionData } from './$types';

	export let form: ActionData;
	import background from '../../../../assets/food.png'; // Update the path if necessary
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<div class="login-container" style="background-image: url({background});">
	<div class="overlay"></div>

	<div class="login-form-container">
		<!-- <div class="image-container">
			<img src={background} alt="Restaurant Background" class="background-image" />
		</div> -->
		<div class="form-container">
			<form method="POST" class="login-form" autocomplete="off">
				{#if form?.missing}<p class="error">The email field is required</p>{/if}
				{#if form?.unauthorized}<p class="error">Wrong creds!</p>{/if}
				<h3 class="h3">Register Now</h3>
				<label class="label">
					<input class="input" type="text" name="name" required placeholder="Name" />
				</label>
				<label class="label">
					<input class="input" type="text" name="last_name" required placeholder="Last Name" />
				</label>
				<label class="label">
					<input class="input" type="email" name="email" required placeholder="Email" />
				</label>
				<label class="label">
					<input class="input" type="password" name="password" required placeholder="Password" />
				</label>
				<button type="submit" class="btn btn-primary">Register</button>
				<p class="text-sm">
					You already have an account? <a class="underline" href="/auth">Login</a>
				</p>
			</form>
		</div>
	</div>
</div>

<style>
	@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

	.login-container {
		position: relative;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		/* background-color: #000; */
	}
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.947); /* Adjust this value for the desired opacity */
		z-index: 1;
		opacity: 1;
	}
	.login-form-container {
		background-color: transparent;
		border-radius: 15px;
		box-shadow:
			0 10px 15px rgba(0, 0, 0, 0.3),
			0 4px 6px rgba(0, 0, 0, 0.2);
		display: flex;
		overflow: hidden;
		z-index: 2;
		/* border: 2px solid #fff; */
		padding: 40px;
		width: 100%;
		max-width: 500px;
	}

	.image-container {
		flex: 1;
		display: flex;
		align-items: center;
		padding: 40px;

		justify-content: center;
	}

	.background-image {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.form-container {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 40px;
		background-color: #fff;
		border-radius: 15px;
		color: #000;
		width: 100%;
		/* background-color: #2c3656; */
	}

	.login-form {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: 300px;
	}

	.h3 {
		font-size: 1.5rem;
		color: #1679ab;
		margin-bottom: 20px;
	}

	.label {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-bottom: 15px;
	}

	.input {
		width: 100%;
		padding: 10px 15px;
		border: 1px solid #ddd;
		border-radius: 8px;
		font-size: 16px;
	}

	.input:focus {
		border-color: #ff6347;
		outline: none;
	}

	.forgot-password {
		align-self: flex-end;
		margin-top: 5px;
		font-size: 0.875rem;
		color: #1679ab;
		text-decoration: none;
	}

	.forgot-password:hover {
		color: #ff6347;
	}

	.btn-primary {
		background-color: #ff6347;
		color: white;
		padding: 10px 20px;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		transition: background-color 0.3s;
		width: 100%;
		margin-bottom: 15px;
	}

	.btn-primary:hover {
		background-color: #ff3b21;
	}

	.text-sm {
		font-size: 0.875rem;
		color: #000;
		margin-bottom: 15px;
	}

	.underline {
		text-decoration: underline;
		color: #ff6347;
	}

	.social-login {
		display: flex;
		justify-content: space-around;
		width: 100%;
		margin-bottom: 15px;
	}

	.btn-google,
	.btn-github,
	.btn-facebook {
		background-color: #fff;
		color: #000;
		padding: 10px 20px;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100px;
		text-decoration: none;
	}

	.btn-google:hover {
		background-color: #ddd;
	}

	.btn-github:hover {
		background-color: #ddd;
	}

	.btn-facebook:hover {
		background-color: #ddd;
	}

	.error {
		color: red;
		font-size: 0.875rem;
		margin-bottom: 10px;
	}
</style>
