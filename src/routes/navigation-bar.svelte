<script lang='ts'>
  import Spacer from './spacer.svelte';
</script>
<main>
  <div class='content'>
    <Spacer></Spacer>
    <div class='container'>
      <a class='logo' href=''>wd</a>
      <div class='items'>
        <a href='#education'>Education</a>
        <a href='#experience'>Experience</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </div>
    </div>
    <Spacer></Spacer>
  </div>
</main>
<style>
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-family: 'Fira Code', monospace;
    font-weight: 600;
    text-decoration: none;
  }

  .items {
    display: flex;
    gap: 1rem;
  }
</style>