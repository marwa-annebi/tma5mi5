<script lang="ts">
	import { Avatar, Paginator, type PaginationSettings } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import empty from './../../../../assets/Nothing-here.png';
	import Modal from './../../../../common/modal.svelte'; // import the Modal component

	export let data: PageData;

	let query = new URLSearchParams($page.url.searchParams.toString());

	let paginationSettings = {
		page: Number(query.get('page')) || 1,
		limit: Number(query.get('page_size')) || 10,
		size: data.menus.count,
		amounts: [2, 5, 10, 15]
	} satisfies PaginationSettings;

	export function onPageChange(e: CustomEvent): void {
		query.set('page', e.detail + 1);
		goto(`?${query.toString()}`);
	}

	export function onAmountChange(e: CustomEvent): void {
		query.set('page_size', e.detail);
		goto(`?${query.toString()}`);
	}

	let showModal = false;
</script>

<div class="flex items-center mt-3 gap-5 ml-10">
	<a href={`/restaurants`} class="back-button">
		<i class="fa-solid fa-arrow-left"></i>
	</a>
	<h2 class="h2">Menus</h2>
</div>
<div class="table-container p-10">
	<div
		style="background-color: #fff;width: 90%;"
		class="card m-10 p-5 rounded-2xl flex gap-5 items-center"
	>
		<Avatar
			src="http://localhost:3000/{data.restaurant?.cover_image_uri}"
			alt="cover"
			width="w-32"
			rounded="rounded-2xl"
		/>
		<div class="vertical-separator"></div>
		<div class="flex-col">
			<p>ID: {data.restaurant.restaurant_id}</p>
			<p>Name: {data.restaurant.name}</p>
			<p>Phone: {data.restaurant.phone}</p>
			<p>Email: {data.restaurant.email}</p>
			<p>Location: {data.restaurant.location}</p>
		</div>
	</div>

	{#if data.menus.count}
		<div
			style="
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			padding: 20px;
			position: relative;
"
		>
			<div style=" width: 100%; display: flex; flex-direction: column;">
				<table class="table table-interactive mb-3">
					<thead>
						<tr
							style="
				text-align: center;
				"
						>
							<th style="border-radius: 15px 0 0 15px;">Id</th>
							<th>Name</th>
							<th style="border-radius: 0 15px 15px 0;">Active</th>
						</tr>
					</thead>
					<tbody>
						{#each data.menus.items as row, i}
							<tr
								on:click={(event) => {
									goto(`/restaurants/${row.restaurant_id}/menus/${row.restaurant_menu_id}`);
								}}
							>
								<td style="border-radius: 15px 0 0 15px;">{row.restaurant_menu_id}</td>
								<td>{row.name}</td>
								<td style="border-radius: 0 15px 15px 0;">{row.is_active}</td>
							</tr>
						{/each}
					</tbody>
					<!-- <tfoot>
							<tr>
								<th colspan="3">Calculated Total Weight</th>
								<td>{totalWeight}</td>
							</tr>
						</tfoot> -->
				</table>
			</div>
			<div
				style="width: 100%; text-align: right; padding-top: 20px; margin-top: 10px;display: flex;  justify-content: flex-end;
		"
			>
				<Paginator
					bind:settings={paginationSettings}
					showFirstLastButtons={false}
					showPreviousNextButtons={true}
					on:page={onPageChange}
					on:amount={onAmountChange}
				/>
			</div>
		</div>
	{:else}
		<div
			style="
	background: #fff;
	border-radius: 15px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 20px;
	position: relative;
	justify-content: center;
"
		>
			<img src={empty} alt="empty" />
			<p>No Data</p>
		</div>
	{/if}
</div>

<style>
	.table-container {
		max-width: 1200px;
		margin: 0 auto;
	}

	table {
		width: 100%;
		border-collapse: separate;
		border-spacing: 0 10px; /* Add space between rows */
	}

	thead tr {
		/* border-radius: 15px; */
		text-align: center;
		color: #fff;
		font-weight: 500;
		border-radius: 15px;
	}

	thead {
		text-align: center;
		background: #1679ab;
	}

	tbody tr {
		background: #fff;
		cursor: pointer;
		border-radius: 15px;
		transition: box-shadow 0.3s ease;
	}

	tbody tr:hover {
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	tbody td {
		padding: 10px;
	}

	tbody tr:not(:last-child) {
		margin-bottom: 10px; /* Add space between rows */
	}

	.paginator-container {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		padding-top: 20px;
		margin-top: auto;
	}

	custom-paginator {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.custom-paginator paginator-select {
		background-color: #1679ab;
		color: #fff;
		border: none;
		padding: 10px 15px;
		border-radius: 5px;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}
	.vertical-separator {
		width: 1px;
		height: 100px; /* Adjust height as needed */
		background-color: #ff6347; /* Adjust color as needed */
	}
	.delete-btn {
		width: 30%;
		border-radius: 8px;
		padding: 5px;
		color: red;
		font-weight: 500;
		border: 1px solid red;
		transition:
			background-color 0.3s,
			color 0.3s;
	}

	.delete-btn:hover {
		background-color: red;
		color: white;
	}

	.btn {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 8px 12px;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		transition:
			background-color 0.3s ease,
			color 0.3s ease;
	}

	.btn-delete {
		background-color: #ff6347;
		color: white;
		border: 1px solid #ff6347;
	}

	.btn-delete:hover {
		background-color: #ff3b21;
		border-color: #ff3b21;
	}

	.btn-activate {
		background-color: #28a745;
		color: white;
		border: 1px solid #28a745;
	}

	.btn-activate:hover {
		background-color: #218838;
		border-color: #218838;
	}

	.btn-deactivate {
		background-color: #ffc107;
		color: white;
		border: 1px solid #ffc107;
	}

	.btn-deactivate:hover {
		background-color: #e0a800;
		border-color: #e0a800;
	}
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
