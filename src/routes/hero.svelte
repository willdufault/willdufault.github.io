<!-- HTML. -->
<main>
	<section class='hero is-fullheight is-primary'>
		<div class='hero-head'>
			<NavigationBar></NavigationBar>
		</div>
		<div class='hero-body is-justify-content-center'>
			<div class='columns is-vcentered is-variable is-5'>
				<div class='column is-half'>
					<figure class='image'>
						<img src='images/linkedin-pfp-2.png' alt='' class='headshot is-rounded'>
					</figure>
				</div>
				<div class='column is-half has-text-centered-mobile'>
					<h1 class='title is-1 has-text-weight-medium pb-2'>
						Will Dufault
					</h1>
					<h2 class='subtitle is-4 mb-4'>
						Software Engineer
					</h2>
					<Contact></Contact>
				</div>
			</div>
		</div>
	</section>
</main>

<!-- CSS. -->
<style>
	.headshot {
		width: 20rem;
		height: auto;
	}
</style>

<!-- TypeScript. -->
<script lang='ts'>
	import NavigationBar from './navigation-bar.svelte';
	import Contact from './contact.svelte';
</script>