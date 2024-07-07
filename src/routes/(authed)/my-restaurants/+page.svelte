<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import { Paginator, type PaginationSettings } from '@skeletonlabs/skeleton';

	import { page } from '$app/stores';
	import empty from './../../../assets/Nothing-here.png';

	export let data: PageData;

	let query = new URLSearchParams($page.url.searchParams.toString());

	let paginationSettings = {
		page: Number(query.get('page')) || 1,
		limit: Number(query.get('page_size')) || 10,
		size: data.restaurants.count,
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
</script>

<div class="flex items-center mt-3 gap-5 ml-10">
	<h2 style="font-weight: 500;color:#2d2d2d" class="h2">My restaurants</h2>
</div>

<!-- Responsive Container (recommended) -->
<div class="table-container p-10">
	<a href="/my-restaurants/create"
		><button
			style="
		background: #1679AB  ;
		cursor: pointer;
		border-radius: 15px;
		font-weight: 500;
		color:#fff;
		"
			type="button"
			class="btn btn-md variant-filled-primary mr-0 ml-auto block mb-3">Add a restaurant +</button
		></a
	>
	{#if data.restaurants.count}
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
				<!-- Native Table Element -->
				<table class="table table-interactive mb-3" style="flex-grow: 1;">
					<thead style="text-align: center;background: #1679AB">
						<tr
							style="
						text-align: center;
						color: #fff;
						font-weight: 500;
						border-radius: 15px;
						"
						>
							<th style="border-radius: 15px 0 0 15px;">Id</th>
							<th>Name</th>
							<th>Phone</th>
							<th>Email</th>
							<!-- <th>Location</th> -->
							<th style="border-radius: 0 15px 15px 0;">Actions</th>
						</tr>
					</thead>
					<tbody>
						{#each data.restaurants.items as row, i}
							<tr
								on:click={() => {
									goto(`/my-restaurants/${row.restaurant_id}`);
								}}
							>
								<td style="border-radius: 15px 0 0 15px;">{row.restaurant_id}</td>
								<td>{row.name}</td>
								<td>{row.phone}</td>
								<td>{row.email}</td>
								<!-- <td>{row.location}</td> -->
								<td
									style="border-radius: 0 0 15px 15px; display: flex; justify-content: center; gap: 10px;"
								>
									<form method="POST" action="?/delete">
										<input type="hidden" name="restaurant_id" value={row.restaurant_id} />
										<button
											type="submit"
											class="btn btn-sm btn-delete"
											on:click={(event) => event.stopPropagation()}
										>
											<i class="fa-solid fa-trash"></i>
										</button>
									</form>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
			<div class="paginator-container">
				<Paginator
					bind:settings={paginationSettings}
					showFirstLastButtons={false}
					showPreviousNextButtons={true}
					on:page={onPageChange}
					on:amount={onAmountChange}
					class="custom-paginator"
				/>
			</div>
		</div>
	{:else}
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
	}

	/* thead th {
		border-radius: 15px;
		padding: 10px;
	} */

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
</style>
