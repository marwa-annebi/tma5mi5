<script>
	export let showModal;

	let dialog;

	$: if (dialog && showModal) dialog.showModal();
</script>

<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<button class="close-button" autofocus on:click={() => dialog.close()}>
		<p>x</p>
	</button>
	<div class="modal-content" on:click|stopPropagation>
		<h4 class="h4" style="text-align: center; padding: 10px;">Add a menu</h4>
		<hr />
		<slot />
	</div>
</dialog>

<style>
	dialog {
		max-width: 32em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
		background: #fff; /* Updated background color */
		border-radius: 15px;
		width: 500px;
		padding: 15px;
		color: #333; /* Updated text color */
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); /* Added box shadow */
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	.close-button {
		float: right;
		padding: 10px 15px;
		font-size: 20px;
		background: none;
		border: none;
		cursor: pointer;
		color: #333; /* Updated close button color */
		transition: color 0.3s ease;
	}
	.close-button:hover {
		color: #ff6347; /* Hover color for close button */
	}
	.modal-content {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.form {
		display: flex;
		flex-direction: column;
		gap: 20px;
		width: 100%;
		max-width: 400px;
		margin: 0 auto;
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
	}

	.btn-primary:hover {
		background-color: #ff3b21;
	}
</style>
