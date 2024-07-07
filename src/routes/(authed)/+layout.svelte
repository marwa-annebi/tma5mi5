<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { RoleEnum } from '../../types/auth-user.interface';
	import type { PageData } from './$types';
	import logo from './../../assets/logo.jpg';

	export let data: PageData;
</script>

<AppShell>
	<!-- (header) -->
	<svelte:fragment slot="sidebarLeft">
		<div class="sidebar">
			<div class="logo">
				<img class="logo" src={logo} alt="Logo" />
				<span class="logo-text">Tma5mi5</span>
			</div>
			<nav>
				<a href="/" class:active={$page.url.pathname === '/'}>
					<i class="fa-solid fa-house"></i>
					<span>Home</span>
				</a>
				{#if data.authUser.role == RoleEnum.Admin}
					<a href="/accounts" class:active={$page.url.pathname.includes('/accounts')}>
						<i class="fa-solid fa-list"></i>
						<span>Accounts</span>
					</a>
					<a href="/restaurants" class:active={$page.url.pathname.includes('/restaurants')}>
						<i class="fa-solid fa-list-check"></i>
						<span>Restaurants</span>
					</a>
				{/if}
				{#if data.authUser.role == RoleEnum.RestaurantOwner}
					<a href="/my-restaurants" class:active={$page.url.pathname.includes('/my-restaurants')}>
						<i class="fa-solid fa-list"></i>
						<span>My Restaurants</span>
					</a>
				{/if}
				{#if data.authUser.role == RoleEnum.RestaurantOwner}
					<a href="/order-history" class:active={$page.url.pathname.includes('/order-history')}>
						<i class="fa-solid fa-clock-rotate-left"></i>
						<span>Order History</span>
					</a>
				{/if}
				{#if data.authUser.role == RoleEnum.RestaurantOwner}
					<a href="/statistics" class:active={$page.url.pathname.startsWith('/statistics')}>
						<i class="fa-solid fa-chart-line"></i>
						<span>Statistics</span>
					</a>
				{/if}

				{#if data.authUser.role == RoleEnum.RestaurantOwner}
					<a href="/settings" class:active={$page.url.pathname.includes('/settings')}>
						<i class="fa-solid fa-gear"></i>
						<span>Settings</span>
					</a>
				{/if}
			</nav>
		</div>
	</svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- (footer) -->
</AppShell>

<style>
	.sidebar {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 250px;
		background-color: #fff;
		padding: 20px;
		box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
		color: #2d2d2d;
		justify-content: start;
		/* align-items: center; */
	}
	.logo {
		display: flex;
		align-items: center;
		margin-bottom: 30px;
		justify-content: center;
		gap: 10px;
		flex-direction: row;
	}
	.logo img {
		width: 30px;
		height: 30px;
		margin-right: 10px; /* Add margin-right for spacing */
	}
	.logo-text {
		font-size: 20px;
		font-weight: bold;
		color: #ff6347;
		letter-spacing: 1px;
		margin-bottom: auto;
		margin-top: 5px;
	}
	nav {
		flex: 1;
	}
	nav a {
		display: flex;
		align-items: center;
		padding: 10px 20px;
		border-radius: 8px;
		color: #2d2d2d;
		gap: 20px;
		text-decoration: none;
		transition:
			background-color 0.3s,
			color 0.3s;
		font-size: 16px;
		font-weight: 500;
		justify-content: start;
		margin-bottom: 15px; /* Added margin-bottom for spacing */
	}
	nav a:hover {
		background-color: #fedbc7;
		/* color: #007bff; */
	}
	nav a.active {
		font-weight: 500;
		color: #ff6347;
		border: 1px solid #ff6347;
		border-radius: 15px;
		background-color: #fffcfb;
	}
	nav i {
		margin-right: 15px;
		font-size: 20px;
	}
	.logout {
		margin-top: 20px;
	}
	.logout a {
		display: flex;
		align-items: center;
		padding: 10px 20px;
		border-radius: 8px;
		color: #2d2d2d;
		text-decoration: none;
		transition:
			background-color 0.3s,
			color 0.3s;
	}
	.logout a:hover {
		background-color: #e9ecef;
		color: #d9534f;
	}
	.logout i {
		margin-right: 15px;
		font-size: 20px;
	}
</style>
