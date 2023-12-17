<!-- Set tab title and favicon.--> 
<svelte:head>
	<title>Will Dufault | Software Engineer</title>
	<link rel='icon' href='/favicon.png'/>
</svelte:head>

<!-- HTML. -->
<main>
	<Hero></Hero>
	<Education></Education>
	<SectionDivider></SectionDivider>
	<Experience></Experience>
	<SectionDivider></SectionDivider>
	<Projects></Projects>
	<SectionDivider></SectionDivider>
	<Contact></Contact>
	<Footer></Footer>
</main>

<!-- CSS. -->
<style></style>

<!-- TypeScript. -->
<script lang='ts'>
	import Hero from './hero.svelte';
	import Education from './education.svelte';
	import Experience from './experience.svelte';
	import Projects from './projects.svelte';
	import Contact from './contact.svelte';
	import Footer from './footer.svelte';
	import SectionDivider from './section-divider.svelte';
</script>