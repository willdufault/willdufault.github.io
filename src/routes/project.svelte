<script lang='ts'>
  export let name: string;
  export let description: string;
  export let imagePath: string;
  export let imageAlternateText: string;
  export let url: string;
  export let hasMedal: boolean;
</script>
<main>
  <div class='container'>
      <a href={url}>
      <img class='screenshot' src={imagePath} alt={imageAlternateText}>
      <div class='text-wrapper'>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </a>
    {#if hasMedal}
      <img class='medal' src='./images/medal.png' alt='Medal icon'>
    {/if}
  </div>
</main>
<style>
  .container {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    height: 100%;
    position: relative;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    background-color: var(--card-color);
    transition: background-color 0.2s ease-out;
    border-radius: 0.5rem;
  }

  a:hover {
    background-color: var(--card-hover-color);
  }

  .text-wrapper {
    padding: 1rem;
  }

  .screenshot {
    max-width: 100%;
  }

  .medal {
    height: 4rem;
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    pointer-events: none;
  }
</style>