<script lang='ts'>
  import Spacer from './spacer.svelte';
</script>
<main id='education'>
  <div class='content'>
      <h2>Education</h2>
      <div class='container'>
        <img src='./images/wpi-seal.png' alt='WPI seal'>
        <div class='text-wrapper'>
          <h4>Worcester Polytechnic Institute</h4>
          <p>BS in CS, minor in DS</p>
          <ul>
            <li>GPA 3.91/4.0, High Distinction (equivalent to Summa Cum Laude)</li>
            <li>UPE (CS honor society) member</li>
          </ul>
          <p class='subtext'>Aug 2020 &rarr; May 2024</p>
        </div>
    </div>
    <Spacer></Spacer>
  </div>
</main>
<style>
  main {
    background-color: var(--background-color2);
  }
  
  .container {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    @media screen and (max-width: 768px) {
      align-items: flex-start;
    }
  }

  img {
    width: 10rem;

    @media screen and (max-width: 768px) {
      width: 4rem;
    }
  }
</style>