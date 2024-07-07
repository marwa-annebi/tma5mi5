<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex items-center mt-3 gap-5 ml-10">
	<a href={`/my-restaurants/${$page.params.id}/menus/${$page.params.menu_id}`} class="back-button">
		<i class="fa-solid fa-arrow-left"></i>
	</a>
	<h2 class="h2">Create Meal</h2>
</div>

<div class="table-container p-10">
	<div class="form-container">
		<form method="POST" class="form" autocomplete="off" enctype="multipart/form-data">
			<label class="label hidden">
				<input
					class="input"
					type="text"
					name="id"
					value={$page.params.menu_id}
					required
					hidden
					placeholder="ID"
				/>
			</label>
			<label class="label">
				<span class="label-text">Name</span>
				<input class="input" type="text" name="name" required placeholder="Name" />
			</label>
			<label class="label">
				<span class="label-text">Price</span>
				<input
					class="input"
					type="number"
					name="price"
					min="0"
					step="any"
					required
					placeholder="Price"
				/>
			</label>
			<label class="label">
				<span class="label-text">Description</span>
				<textarea class="textarea" rows="5" name="description" required placeholder="Description"
				></textarea>
			</label>
			<label class="label">
				<span class="label-text">Image</span>
				<input
					class="input"
					type="file"
					name="image"
					required
					placeholder="Image"
					accept="image/jpg,image/jpeg"
				/>
			</label>
			<button type="submit" class="btn btn-primary">Create</button>
		</form>
	</div>
</div>

<style>
	.form-container {
		border-radius: 15px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.form {
		background: #fff;
		padding: 40px;
		border-radius: 15px;
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		gap: 20px;
		width: 100%;
		max-width: 800px;
	}

	.label {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 5px;
		width: 100%;
	}

	.label-text {
		font-weight: 600;
		color: #333;
	}

	.input,
	.textarea {
		width: 100%;
		padding: 10px 15px;
		border: 1px solid #ddd;
		border-radius: 8px;
		font-size: 16px;
		transition: border-color 0.3s;
	}

	.input:focus,
	.textarea:focus {
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
	}

	.btn-primary:hover {
		background-color: #ff3b21;
	}

	.flex {
		display: flex;
	}

	.items-center {
		align-items: center;
	}

	.gap-5 {
		gap: 20px;
	}

	.ml-10 {
		margin-left: 40px;
	}

	.back-button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		background-color: #ff6347;
		color: white;
		border-radius: 50%;
		font-size: 20px;
		text-decoration: none;
		transition:
			background-color 0.3s,
			color 0.3s;
	}

	.back-button:hover {
		background-color: #ff3b21;
		color: #fff;
	}
</style>
