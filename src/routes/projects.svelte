<script lang='ts'>
  import Project from './project.svelte';
  import Spacer from './spacer.svelte';

  interface ProjectData {
    name: string,
    description: string,
    imagePath: string,
    imageAlternateText: string,
    url: string,
    hasMedal: boolean
  }

  const projects: ProjectData[] = [
    {
      name: 'Beecology',
      description: 'A citizen science web app for collecting data on bees and butterflies.',
      imagePath: './images/beecology-screenshot.jpg',
      imageAlternateText: 'Beecology screenshot',
      url: 'https://beecology.wpi.edu/webapp_new/main/#/app/home',
      hasMedal: false
    },
    {
      name: 'Immigration2Germany',
      description: 'A website that offers legal, social, and community-building help to refugees.',
      imagePath: './images/immigration2germany-screenshot.jpg',
      imageAlternateText: 'Immigration2Germany screenshot',
      url: 'https://willdufault.github.io/immigration4iran/',
      hasMedal: false
    },
    {
      name: 'GoatCalendar',
      description: 'A hackathon-winning app that converts a student\'s schedule to a calendar file.',
      imagePath: './images/goatcalendar-screenshot.jpg',
      imageAlternateText: 'GoatCalendar screenshot',
      url: 'https://willdufault.github.io/goatcalendar/',
      hasMedal: true
    },
    {
      name: 'Chess with AI',
      description: 'A program to play chess against another person or an AI opponent.',
      imagePath: './images/chessboard.jpg',
      imageAlternateText: 'Chessboard',
      url: 'https://github.com/willdufault/chess',
      hasMedal: false
    },
  ];
</script>
<main id='projects'>
  <div class='content'>
    <h2>Projects</h2>
    <div class='container'>
      {#each projects as project}
      <Project name={project.name} description={project.description} imagePath={project.imagePath} imageAlternateText={project.imageAlternateText} url={project.url} hasMedal={project.hasMedal}></Project>
      {/each}
    </div>
    <Spacer></Spacer>
  </div>
</main>
<style>
  main {
    background-color: var(--background-color2);
  }

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 1.5rem;
    column-gap: 1.5rem;

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }
</style>