<script lang='ts'>
  import Icon from '@iconify/svelte';

  export let name: string;
  export let icon: string;
  export let iconColor: string;
  export let handle: string;
  export let url: string;
</script>
<main style='--icon-color: {iconColor}'>
  <h4>{name}</h4>
  <a href={url}>
    <Icon icon={icon}></Icon>
    <p>{handle}</p>
  </a>
</main>
<style>
  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;
  }
  
  a :global(svg) {
    color: var(--subtext-color);
    width: 2.5rem;
    height: auto;
  }

  a:hover :global(svg) {
    color: var(--icon-color);
  }
</style>