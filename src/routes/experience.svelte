<script lang="ts">
  interface Job {
    title: string,
    company: string,
    logoPath: string,
    logoAlternateText: string,
    bullets: string[],
    startDate: string,
    endDate: string
  }

  const jobs: Job[] = [
    {
      title: 'Software Engineer Intern',
      company: 'BJ\'s Wholesale Club',
      logoPath: './images/bjs-logo.jpg',
      logoAlternateText: 'BJ\'s Wholesale Club logo',
      bullets: [
        'Earned the Pacesetter Award for ranking in the top 20% of interns',
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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quasi?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quasi?'
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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quasi?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quasi?'
      ],
      startDate: 'May 2022',
      endDate: 'Oct 2022'
    }
  ];
</script>
<main>
  <h2>Experience</h2>
  {#each jobs as job, index}
    {#if index > 0}
      <hr>
    {/if}
    <div class='container'>
      <img class='round' src={job.logoPath} alt='BJ&apos;s Wholesale Club logo'>
      <div class='text-wrapper'>
        <h4>{job.title}</h4>
        <p>{job.company}</p>
        <ul>
          {#each job.bullets as bullet}
            <li>{bullet}</li>
          {/each}
        </ul>
        <p class='subtext'>{job.startDate} &rarr; {job.endDate}</p>
      </div>
    </div>
  {/each}
</main>
<style>
  .container {
    display: flex;
    align-items: flex-start;
    gap: 1.2rem;
  }

  img {
    max-width: 6rem;
  }
</style>