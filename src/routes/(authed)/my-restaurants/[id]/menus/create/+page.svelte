<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex items-center mt-3 gap-5 ml-10">
	<a href={`/my-restaurants/${$page.params.id}`}> <i class="fa-solid fa-arrow-left"></i> </a>
	<h2 class="h2">Create Menu</h2>
</div>
<div class="table-container p-10">
	<div
		style="
<!-- background: #2C3656; -->
border-radius: 15px;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
padding: 20px;
position: relative;


"
	>
		<form
			method="POST"
			class="h-screen flex flex-col
items-center justify-center gap-5"
			autocomplete="off"
			enctype="multipart/form-data"
		>
			<label class="label">
				<input
					class="hidden"
					type="text"
					name="id"
					value={$page.params.id}
					required
					placeholder="name"
					style="width: 350px;"
				/>
			</label>
			<label class="label">
				<input
					style="width: 350px;"
					class="input"
					type="text"
					name="name"
					required
					placeholder="name"
				/>
			</label>
			<label class="label">
				<textarea
					style="width: 350px;"
					class="textarea"
					rows="4"
					name="description"
					required
					placeholder="description"
				/>
			</label>

			<button type="submit" class="btn variant-ghost-primary">Create</button>
		</form>
	</div>
</div>
