<script lang='ts'>
  import Project from './project.svelte';

  interface ProjectData {
    name: string,
    description: string,
    imagePath: string,
    imageAlternateText: string,
    url: string
  }

  const projects: ProjectData[] = [
    {
      name: 'Beecology',
      description: 'A citizen science project focused on collecting bee and butterfly data.',
      imagePath: './images/beecology-screenshot.jpg',
      imageAlternateText: 'Beecology screenshot',
      url: 'https://beecology.wpi.edu/webapp_new/main/#/app/home'
    },
    {
      name: 'Immigration2Germany',
      description: 'A website that offers legal, social, and community-building help to refugees.',
      imagePath: './images/immigration2germany-screenshot.jpg',
      imageAlternateText: 'Immigration2Germany screenshot',
      url: 'https://willdufault.github.io/immigration4iran/'
    },
    {
      name: 'GoatCalendar',
      description: 'A hackathon-winning app that converts a student\'s schedule to a calendar file.',
      imagePath: './images/goatcalendar-screenshot.jpg',
      imageAlternateText: 'GoatCalendar screenshot',
      url: 'https://www.google.com'
    },
    {
      name: 'Chess with AI',
      description: 'A program to play chess against another person or an AI opponent.',
      imagePath: './images/chess-with-ai-screenshot.jpg',
      imageAlternateText: 'Chess with AI screenshot',
      url: 'https://www.google.com'
    },
  ];
</script>
<main id='projects'>
  <h2>Projects</h2>
  <div class='container'>
    {#each projects as project}
      <Project name={project.name} description={project.description} imagePath={project.imagePath} imageAlternateText={project.imageAlternateText} url={project.url}></Project>
    {/each}
  </div>
</main>
<style>
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 1.5rem;
    column-gap: 1.5rem;
  }
</style>