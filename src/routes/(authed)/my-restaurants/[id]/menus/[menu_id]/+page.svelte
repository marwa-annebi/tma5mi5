<script lang="ts">
	import { Paginator, type PaginationSettings } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import empty from './../../../../../../assets/Nothing-here.png';

	export let data: PageData;

	let query = new URLSearchParams($page.url.searchParams.toString());

	let paginationSettings = {
		page: Number(query.get('page')) || 1,
		limit: Number(query.get('page_size')) || 10,
		size: data.items.count,
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

	function handleDelete(row: any): void {
		const form = document.createElement('form');
		form.method = 'POST';
		form.action = `?/delete`;

		const input = document.createElement('input');
		input.type = 'hidden';
		input.name = 'menu_item_id';
		input.value = row.restaurant_menu_item_id;

		form.appendChild(input);
		document.body.appendChild(form);

		form.submit();
	}
</script>

<!-- <div class="flex items-center mt-3 gap-5 ml-10">
	<a href={`/my-restaurants/${$page.params.id}`}>
		<button type="button" class="btn btn-md variant-filled-primary block">{'<'}</button>
	</a>
	<h2 class="h2">Meals</h2>
</div> -->

<div class="flex items-center mt-3 gap-5 ml-10">
	<a href={`/my-restaurants/${$page.params.id}`} class="back-button">
		<i class="fa-solid fa-arrow-left"></i>
	</a>
	<h2 class="h2">Meals</h2>
</div>

<!-- Responsive Container (recommended) -->
<div class="table-container p-10">
	<a href={`/my-restaurants/${$page.params.id}/menus/${$page.params.menu_id}/create`}>
		<button
			style="		background: #1679AB  ;
		cursor: pointer;
		border-radius: 15px;
		font-weight: 500;
		color:#fff;"
			type="button"
			class="btn btn-md variant-filled-primary mr-0 ml-auto block mb-3"
		>
			Add a meal +
		</button>
	</a>
	{#if data.items.count}
		<div class="meal-cards grid grid-cols-1 md:grid-cols-3 gap-4">
			{#each data.items.items as row, i}
				<div class="card bg-initial card-hover overflow-hidden rounded-2xl shadow-md">
					<header>
						<img
							src="http://localhost:3000/{row.cover_image_uri}"
							class="bg-black/50 w-full aspect-[21/9] object-cover"
							alt="Meal"
						/>
					</header>
					<div class="p-4 space-y-4">
						<h6 class="h6" data-toc-ignore>Repas</h6>
						<h3 class="h3" data-toc-ignore>
							{row.name}
						</h3>
						<article>
							<p>
								{row.description}
							</p>
						</article>
					</div>
					<hr class="opacity-50" />
					<footer class="p-4 flex justify-end items-center space-x-4">
						<a
							href={`/my-restaurants/${$page.params.id}/menus/${$page.params.menu_id}/edit/${row.restaurant_menu_item_id}`}
						>
							<button type="button" class="btn btn-sm btn-edit">
								<i class="fa-solid fa-edit"></i>
							</button>
						</a>
						<button
							on:click={(event) => {
								event.stopPropagation();
								handleDelete(row);
							}}
							class="btn btn-sm btn-delete"
						>
							<i class="fa-solid fa-trash"></i>
						</button>
					</footer>
				</div>
			{/each}
		</div>
		<div class="paginator-container">
			<Paginator
				bind:settings={paginationSettings}
				showFirstLastButtons={false}
				showPreviousNextButtons={true}
				on:page={onPageChange}
				on:amount={onAmountChange}
			/>
		</div>
	{:else}
		<div class="no-data-container">
			<img src={empty} alt="No Data" />
			<p>No Data</p>
		</div>
	{/if}
</div>

<style>
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
	.table-container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.meal-cards {
		width: 100%;
	}

	.card {
		background: #fff;
		border-radius: 20px;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.card:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
	}

	.header img {
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
	}

	.p-4 {
		padding: 16px;
	}

	.space-y-4 > *:not(:last-child) {
		margin-bottom: 16px;
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

	.btn i {
		margin-right: 0;
	}

	.btn-edit {
		background-color: #198bc5;
		color: white;
		border: 1px solid #198bc5;
	}

	.btn-edit:hover {
		background-color: #ff3b21;
		border-color: #ff3b21;
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

	.paginator-container {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		padding-top: 20px;
	}

	.no-data-container {
		background: #fff;
		border-radius: 15px;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 20px;
		justify-content: center;
	}

	.no-data-container img {
		width: 50%;
		margin-bottom: 20px;
	}

	.no-data-container p {
		color: #fff;
		font-size: 18px;
	}
</style>
