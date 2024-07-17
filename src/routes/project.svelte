<script lang='ts'>
  export let name: string;
  export let description: string;
  export let imagePath: string;
  export let imageAlternateText: string;
  export let url: string;
</script>
<main>
  <div class='container'>
    <a class='roundd' href={url}>
      <img src={imagePath} alt={imageAlternateText}>
      <div class='text-wrapper'>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </a>
  </div>
</main>
<style>
  .container {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    height: 100%;
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

  img {
    max-width: 100%;
  }
</style>