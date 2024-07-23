<script lang='ts'>
    import Spacer from './spacer.svelte';
</script>
<main>
  <div class='content'>
    <div class='container'>
      <h1>Hi, I'm Will.</h1>
      <p>
        I'm a software engineer interested in web development and cloud computing. 
        I enjoy breaking down complex problems to uncover simple, elegant solutions.
        I'm currently working as a Software Engineer Intern at BJ's Wholesale Club
        and as a freelance web developer on Upwork.
      </p>
    </div>
  <Spacer></Spacer>
  </div>
</main>
<style>
  .container {
    padding: 0 4rem;

    @media screen and (max-width: 768px) {
      padding: 0 1rem;
    }
  }
</style>