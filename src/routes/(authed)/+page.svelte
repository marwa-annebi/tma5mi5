<script>
	import SearchBar from '../../components/SearchBar.svelte';
	import OrderList from '../../components/OrderList.svelte';

	const orders = [
		{
			id: 351,
			date: '23 Feb 2021, 08:28 PM',
			items: [
				{
					name: 'Vegetable Mixups',
					price: 5.3,
					qty: 1,
					img: 'https://i.ibb.co/n1bDKHD/image1.jpg'
				},
				{
					name: 'Prawn Mix Salad',
					price: 5.3,
					qty: 1,
					img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'
				}
			],
			total: 10.6,
			status: 'completed',
			avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
		},
		{
			id: 350,
			date: '23 Feb 2021, 08:28 PM',
			items: [
				{
					name: 'Fresh Meat',
					price: 25.3,
					qty: 1,
					img: 'https://images.unsplash.com/photo-1551218808-94e220e084d2'
				},
				{
					name: 'Vegetable Mixups',
					price: 5.3,
					qty: 1,
					img: 'https://i.ibb.co/n1bDKHD/image1.jpg'
				}
			],
			total: 30.6,
			status: 'rejected',
			avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
		},
		{
			id: 349,
			date: '23 Feb 2021, 08:28 PM',
			items: [
				{
					name: 'Vegetable Mixups',
					price: 5.3,
					qty: 1,
					img: 'https://i.ibb.co/n1bDKHD/image1.jpg'
				},
				{
					name: 'Prawn Mix Salad',
					price: 5.3,
					qty: 1,
					img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'
				}
			],
			total: 10.6,
			status: 'completed',
			avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
		},
		{
			id: 348,
			date: '23 Feb 2021, 08:28 PM',
			items: [
				{
					name: 'Vegetable Mixups',
					price: 5.3,
					qty: 1,
					img: 'https://i.ibb.co/n1bDKHD/image1.jpg'
				},
				{
					name: 'Prawn Mix Salad',
					price: 5.3,
					qty: 1,
					img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'
				}
			],
			total: 10.6,
			status: 'pending',
			avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
		},
		{
			id: 347,
			date: '23 Feb 2021, 08:28 PM',
			items: [
				{
					name: 'Fresh Meat',
					price: 25.3,
					qty: 1,
					img: 'https://images.unsplash.com/photo-1551218808-94e220e084d2'
				},
				{
					name: 'Vegetable Mixups',
					price: 5.3,
					qty: 1,
					img: 'https://i.ibb.co/n1bDKHD/image1.jpg'
				}
			],
			total: 30.6,
			status: 'completed',
			avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
		},
		{
			id: 346,
			date: '23 Feb 2021, 08:28 PM',
			items: [
				{
					name: 'Vegetable Mixups',
					price: 5.3,
					qty: 1,
					img: 'https://i.ibb.co/n1bDKHD/image1.jpg'
				},
				{
					name: 'Prawn Mix Salad',
					price: 5.3,
					qty: 1,
					img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'
				}
			],
			total: 10.6,
			status: 'pending',
			avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
		},
		{
			id: 345,
			date: '23 Feb 2021, 08:28 PM',
			items: [
				{
					name: 'Fresh Meat',
					price: 25.3,
					qty: 1,
					img: 'https://images.unsplash.com/photo-1551218808-94e220e084d2'
				},
				{
					name: 'Vegetable Mixups',
					price: 5.3,
					qty: 1,
					img: 'https://i.ibb.co/n1bDKHD/image1.jpg'
				}
			],
			total: 30.6,
			status: 'completed',
			avatar: 'https://randomuser.me/api/portraits/men/4.jpg'
		},
		{
			id: 344,
			date: '23 Feb 2021, 08:28 PM',
			items: [
				{
					name: 'Vegetable Mixups',
					price: 5.3,
					qty: 1,
					img: 'https://i.ibb.co/n1bDKHD/image1.jpg'
				},
				{
					name: 'Prawn Mix Salad',
					price: 5.3,
					qty: 1,
					img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'
				}
			],
			total: 10.6,
			status: 'rejected',
			avatar: 'https://randomuser.me/api/portraits/women/4.jpg'
		}
	];
</script>

<main>
	<SearchBar />
	<OrderList {orders} />
</main>

<style>
	main {
		padding: 20px;
	}
</style>
