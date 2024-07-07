<script lang="ts">
	import { writable } from 'svelte/store';
	import type { PageData } from './$types';

	export let data: PageData;

	let editing = writable(false);

	function toggleEdit() {
		editing.update((value) => !value);
	}

	function submitChanges(event) {
		event.preventDefault();
		// Handle form submission logic here
		toggleEdit(); // Exit edit mode
	}
</script>

<div class="profile-container">
	<div class="profile-header">
		<h2 class="h2">Profile</h2>
		<button class="edit-button" on:click={toggleEdit}>
			{#if $editing}
				<i class="fa-solid fa-times"></i> Cancel
			{:else}
				<i class="fa-solid fa-edit"></i> Edit Profile
			{/if}
		</button>
	</div>

	<form class="card profile-card" on:submit={submitChanges}>
		{#if $editing}
			<div class="profile-details">
				<label class="label">
					<input
						hidden
						class="input"
						type="text"
						name="id"
						value={data.authUser.user_id}
						disabled
					/>
				</label>
				<label class="label">
					<span class="label-text">Name:</span>
					<input class="input" type="text" name="name" value={data.authUser.name} required />
				</label>
				<label class="label">
					<span class="label-text">Last Name:</span>
					<input
						class="input"
						type="text"
						name="last_name"
						value={data.authUser.last_name}
						required
					/>
				</label>
				<label class="label">
					<span class="label-text">Email:</span>
					<input class="input" type="email" name="email" value={data.authUser.email} required />
				</label>
			</div>
			<button type="submit" class="btn btn-primary">Submit Changes</button>
		{:else}
			<div class="profile-details">
				<!-- <p><span class="label-text">ID:</span> {data.authUser.user_id}</p> -->
				<p><span class="label-text">Name:</span> {data.authUser.name}</p>
				<p><span class="label-text">Last Name:</span> {data.authUser.last_name}</p>
				<p><span class="label-text">Email:</span> {data.authUser.email}</p>
			</div>
		{/if}
	</form>

	<div class="logout">
		<form method="POST">
			<button type="submit" class="btn btn-sm variant-ghost-warning">
				<i class="fa-solid fa-right-from-bracket"></i>
				<span>Logout</span>
			</button>
		</form>
	</div>
</div>

<style>
	@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

	.profile-container {
		padding: 40px;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative; /* Add relative positioning */
	}

	.profile-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		max-width: 600px;
		margin-bottom: 20px;
	}

	.profile-card {
		background: #fff;
		padding: 40px;
		border-radius: 15px;
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
		width: 100%;
		max-width: 600px;
	}

	.profile-details {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.label-text {
		font-weight: 600;
		color: #333;
		margin-right: 10px;
	}

	.input {
		width: 100%;
		padding: 10px 15px;
		border: 1px solid #ddd;
		border-radius: 8px;
		font-size: 16px;
		transition: border-color 0.3s;
	}

	.input:focus {
		border-color: #ff6347;
		outline: none;
	}

	.btn-primary {
		background-color: #ff6347;
		color: white;
		padding: 10px 20px;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		transition: background-color 0.3s;
		margin-top: 20px;
	}

	.btn-primary:hover {
		background-color: #ff3b21;
	}

	.edit-button {
		background-color: #ff6347;
		color: white;
		padding: 10px 20px;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		transition: background-color 0.3s;
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.edit-button:hover {
		background-color: #ff3b21;
	}

	.logout {
		position: fixed; /* Fix the position */
		bottom: 40px; /* Adjust the position as needed */
		right: 40px; /* Adjust the position as needed */
	}

	.logout button {
		background-color: #ff6347;
		color: white;
		padding: 10px 20px;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		transition: background-color 0.3s;
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.logout button:hover {
		background-color: #ff3b21;
	}
</style>
