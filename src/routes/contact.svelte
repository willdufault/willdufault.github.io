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
      url: 'mailto:wrdufault@outlook.com?subject=From%20your%20portfolio&body=Hi%20Will%2C%0A%0AMy%20name%20is%20%5BYour%20name%5D%20and%20I%20recently%20visited%20your%20portfolio.%20I%20would%20like%20to%20discuss%20%5BJob%20opportunity%2C%20collaboration%2C%20advice%5D.%0A%0AAre%20you%20free%20on%20%5BDays%5D%20to%20schedule%20a%20call%20or%20meeting%3F%0A%0ABest%2C%0A%5BYour%20name%5D'
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
  <div class='content'>
    <h2>Contact</h2>
    <div class='container'>
      {#each socials as social}
      <Social name={social.name} icon={social.icon} iconColor={social.iconColor} handle={social.handle} url={social.url}></Social>
      {/each}
    </div>
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