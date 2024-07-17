<script lang='ts'>
  import Social from './social.svelte'

  interface SocialData {
    name: string,
    icon: string,
    iconColor: string,
    handle: string
    url: string,
  }

  const socials: SocialData[] = [
    {
      name: 'Email',
      icon: 'carbon:email',
      iconColor: 'black',
      handle: 'wrdufault@outlook.com',
      url: 'mailto:wrdufault@outlook.com?subject=Hey%20Will%20👋'
    },
    {
      name: 'Linkedin',
      icon: 'simple-icons:linkedin',
      iconColor: '#3367bf',
      handle: 'willdufault',
      url: 'https://www.linkedin.com/in/willdufault'
    },
    {
      name: 'GitHub',
      icon: 'bi:github',
      iconColor: '#202328',
      handle: 'willdufault',
      url: 'https://github.com/willdufault'
    },
    {
      name: 'Upwork',
      icon: 'simple-icons:upwork',
      iconColor: '#46a614',
      handle: 'Will Dufault',
      url: 'https://www.upwork.com/freelancers/~0176292ee3fa699089'
    }
  ];
</script>
<main id='contact'>
  <h2>Contact</h2>
  <div class='container'>
    {#each socials as social}
      <Social name={social.name} icon={social.icon} iconColor={social.iconColor} handle={social.handle} url={social.url}></Social>
    {/each}
  </div>
</main>
<style>
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 1.5rem;
  }
</style>