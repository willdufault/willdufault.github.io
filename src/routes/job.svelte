<script lang='ts'>
  export let title: string;
  export let company: string;
  export let logoPath: string;
  export let logoAlternateText: string;
  export let bullets: string[];
  export let startDate: string;
  export let endDate: string;
</script>
<main>
  <div class='container'>
    <img class='round' src={logoPath} alt={logoAlternateText}>
    <div class='text-wrapper'>
      <h4>{title}</h4>
      <p>{company}</p>
      <ul>
        {#each bullets as bullet}
          <li>{bullet}</li>
        {/each}
      </ul>
      <p class='subtext'>{startDate} &rarr; {endDate}</p>
    </div>
  </div>
</main>
<style>
  .container {
    display: flex;
    align-items: flex-start;
    gap: 1.2rem;
  }

  img {
    width: 6rem;
    border-radius: 1rem;

    @media screen and (max-width: 768px) {
      width: 4rem;
    }
  }
</style>