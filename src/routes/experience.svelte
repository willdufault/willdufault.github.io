<script lang="ts">
    import Job from './job.svelte';

  interface JobData {
    title: string,
    company: string,
    logoPath: string,
    logoAlternateText: string,
    bullets: string[],
    startDate: string,
    endDate: string
  }

  const jobs: JobData[] = [
    {
      title: 'SWE Intern',
      company: 'BJ\'s Wholesale Club',
      logoPath: './images/bjs-logo.jpg',
      logoAlternateText: 'BJ\'s Wholesale Club logo',
      bullets: [
        'Earned the Pacesetter Award for ranking in the top 20% of interns in the Management Development Program',
        'Saved $5,800/year through automation using Python, Jenkins, Docker, and AWS'
      ],
      startDate: 'May 2023',
      endDate: 'Present'
    },
    {
      title: 'Undergraduate TA',
      company: 'WPI',
      logoPath: './images/wpi-goat-logo.jpg',
      logoAlternateText: 'WPI goat logo',
      bullets: [
        'Taught Java and object-oriented programming to a class of 400+ students',
        'Expedited grading by using Python to automatically reject incorrect responses'
      ],
      startDate: 'Sep 2023',
      endDate: 'Dec 2023'
    },
    {
      title: 'Paint Sales Associate',
      company: 'The Home Depot',
      logoPath: './images/home-depot-logo.jpg',
      logoAlternateText: 'The Home Depot logo',
      bullets: [
        'Helped 30+ customers/day and collaborated with coworkers to fulfill orders',
        'Exhibited a strong work ethic by working extra shifts that were understaffed'
      ],
      startDate: 'May 2022',
      endDate: 'Oct 2022'
    }
  ];
</script>
<main id='experience'>
  <h2>Experience</h2>
  {#each jobs as job, index}
    {#if index > 0}
      <hr>
    {/if}
    <Job title={job.title} company={job.company} logoPath={job.logoPath} logoAlternateText={job.logoAlternateText} bullets={job.bullets} startDate={job.startDate} endDate={job.endDate}></Job>
  {/each}
</main>
<style></style>