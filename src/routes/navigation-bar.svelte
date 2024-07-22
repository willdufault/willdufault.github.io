<script lang='ts'>
  import Icon from '@iconify/svelte';

  let mobile_menu_element: HTMLDivElement;

  function openMenu() {
    mobile_menu_element.style.right = '0';
    document.body.style.touchAction = 'none';
  }

  function closeMenu() {
    mobile_menu_element.style.right = '-200px';
    document.body.style.touchAction = '';
  }
</script>
<main>
  <div class='content'>
    <div class='container'>
      <a class='logo' href=''>wd</a>
      <button class='mobile-only' on:click={() => openMenu()}>
        <Icon icon="ci:hamburger-md" width="1rem" height="1rem" />
      </button>
      <div class='items' bind:this={mobile_menu_element}>
        <div class='close-button-wrapper mobile-only'>
          <button class='close-button' on:click={() => closeMenu()}>
            <Icon icon="gg:close" width="1rem" height="1rem" />
          </button>
        </div>
        <a href='#education' on:click={() => closeMenu()}>Education</a>
        <a href='#experience' on:click={() => closeMenu()}>Experience</a>
        <a href='#projects' on:click={() => closeMenu()}>Projects</a>
        <a href='#contact' on:click={() => closeMenu()}>Contact</a>
      </div>
    </div>
  </div>
</main>
<style>
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 0;

    @media screen and (max-width: 768px) {
      padding: 2rem 0;
    }
  }

  .logo {
    font-family: 'Fira Code', monospace;
    font-weight: 600;
    text-decoration: none;
  }

  .items {
    display: flex;
    gap: 1rem;
    z-index: 1;
    transition: right ease-out;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      position: fixed;
      top: 0;
      right: -170px;
      /* transition: right 0.2s ease-out; */
      padding: 2rem;
      height: 100dvh;
      background-color: var(--text-color);
      color: var(--background-color1);
    }
  }

  .close-button-wrapper {
    text-align: right;
  }

  .close-button-wrapper button :global(svg) {
    color: var(--background-color1);
  }

  button {
    background: none;
    border: none;
  }

  button :global(svg) {
    width: 2rem;
    height: auto;
  }
</style>