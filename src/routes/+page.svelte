<script lang='ts'>
  import NavigationBar from './navigation-bar.svelte';
  import Hero from './hero.svelte';
  import Spacer from './spacer.svelte';
	import Education from './education.svelte';
	import Experience from './experience.svelte';
</script>
<main>
  <NavigationBar></NavigationBar>
  <Hero></Hero>
  <Spacer></Spacer>
  <Education></Education>
  <Spacer></Spacer>
  <Experience></Experience>
  <Spacer></Spacer>
  <h1>header1</h1>
  <h2>header2</h2>
  <h3>header3</h3>
  <h4>header4</h4>
  <p>paragraph</p>
  <p class='logo'>wd</p>
</main>
<style>
  main {
    max-width: 40rem;
    margin: auto;
    /* border: 1px solid black; */
  }
</style>