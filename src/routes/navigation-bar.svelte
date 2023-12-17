<!-- HTML. -->
<main>
	<nav class='navbar is-spaced'>
		<a href='' role='button' class={`navbar-burger ${burger_menu_open ? 'is-active' : ''}`} aria-label='menu' aria-expanded='false' on:click={() => toggleBurgerMenu()}>
			<span aria-hidden='true'></span>
			<span aria-hidden='true'></span>
			<span aria-hidden='true'></span>
		</a>
		<div class={`navbar-menu is-justify-content-center ${burger_menu_open ? 'is-active' : ''}`}>
			<!-- Iterate through navigation bar items. -->
			{#each navigation_items as item}
				<a href={item.itemUrl} target={item.newTab ? '_blank' : '_self'} class='navbar-item has-text-centered is-size-5' on:click={() => toggleBurgerMenu()}>
					{item.name}
				</a>
			{/each}
		</div>
	</nav>
</main>

<!-- CSS. -->
<style></style>

<!-- TypeScript. -->
<script lang='ts'>
	// Interface for list of navigation bar items.
	interface NavigationBarItemData {
		name: string,
		itemUrl: string,
		newTab: boolean
	};
	
	// List of navigation bar items.
	let navigation_items: NavigationBarItemData[] = [
		{
			name: 'Education',
			itemUrl: '#education',
			newTab: false
		},
		{
			name: 'Experience',
			itemUrl: '#experience',
			newTab: false
		},
		{
			name: 'Projects',
			itemUrl: '#projects',
			newTab: false
		},
		{
			name: 'Contact',
			itemUrl: '#contact',
			newTab: false
		},
		// {
		// 	name: 'Resume',
		// 	itemUrl: 'https://www.google.com',
		// 	newTab: true
		// },
	];

	// Current status of burger menu.
	let burger_menu_open: boolean = false;

	function toggleBurgerMenu(): void {
		/*
		Toggle the status (open/closed) of the navigation bar burger menu.
		*/
		// Flip the status.
		burger_menu_open = !burger_menu_open;
	}
</script>