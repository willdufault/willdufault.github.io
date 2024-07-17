<script lang='ts'>
  import NavigationBar from './navigation-bar.svelte';
  import Hero from './hero.svelte';
	import Education from './education.svelte';
	import Experience from './experience.svelte';
  import Projects from './projects.svelte';
  import Contact from './contact.svelte';
  import Footer from './footer.svelte';
  import Spacer from './spacer.svelte';
</script>
<main>
  <NavigationBar></NavigationBar>
  <Hero></Hero>
  <Spacer></Spacer>
  <Education></Education>
  <Spacer></Spacer>
  <Experience></Experience>
  <Spacer></Spacer>
  <Projects></Projects>
  <Spacer></Spacer>
  <Contact></Contact>
  <Footer></Footer>
</main>
<style>
  main {
    max-width: 38rem;
    margin: auto;
    /* border: 1px solid black */
  }
</style>