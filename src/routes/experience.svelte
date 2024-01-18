<!-- HTML. -->
<main>
	<section id='experience' class='section my-6'>
		<div class='container has-text-centered'>
			<h1 class='title'>Experience</h1>
			<div class='columns is-multiline is-justify-content-center'>
				<!-- Iterate through jobs. -->
				{#each jobs as job}
					<div class='column is-one-third-desktop is-half-tablet is-full-mobile'>
						<div class='card'>
							<div class='card-image'>
								<figure class='image is-3by2'>
									<img class='is-object-fit-contain pt-4' src={job.imageUrl} alt={job.imageAlt}>
								</figure>
							</div>
							<div class='card-content'>
								<h1 class='title is-4'>{job.jobTitle}</h1>
								<h1 class='subtitle mb-1'>{job.company}</h1>
								<h1 class='subtitle is-6'>{job.dateRange}</h1>
								<p>
									{job.description}	
								</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
</main>

<!-- CSS. -->
<style>
	.card {
		height: 100%;
	}
</style>

<!-- TypeScript. -->
<script lang='ts'>
	// Interface for job list type.
	interface JobData {
		jobTitle: string,
		company: string,
		dateRange: string,
		description: string
		imageUrl: string,
		imageAlt: string
	}

	// List of jobs.
	let jobs: JobData[] = [
		{
			jobTitle: 'Undergraduate Teaching Assistant',
			company: 'Worcester Polytechnic Institute',
			dateRange: 'Sep 2023 – Dec 2023',
			description: 'Mentored and taught the fundamentals of Java and object-oriented programming to \
			a class of 400+ students. Automated grading by leveraging Python to automatically reject \
			incorrect responses. Troubleshot problems in lab sessions and office hours.',
			imageUrl: 'images/wpi-seal.png',
			imageAlt: 'Worcester Polytechnic Institute Seal'
		},
		{
			jobTitle: 'Cloud Engineer Intern',
			company: 'BJ\'s Wholesale Club',
			dateRange: 'May 2023 – Aug 2023',
			description: 'Automated and optimized processes in the machine learning workflow using Python \
			and AWS, saving $5,800/year. Awarded the Pacesetter Award for exceptional performance and \
			setting the standard of achievement for interns.',
			imageUrl: 'images/bjs-logo.png',
			imageAlt: 'BJ\'s Wholesale Club Logo'
		},
		{
			jobTitle: 'Paint Sales Associate',
			company: 'The Home Depot',
			dateRange: 'May 2022 – Oct 2022',
			description: 'Demonstrated excellent communication skills by aiding 30+ customers per day and \
			collaborating with coworkers to fulfill orders. Exhibited a strong work ethic by working 1–2 \
			extra shifts per week that were frequently understaffed.',
			imageUrl: 'images/home-depot-logo.png',
			imageAlt: 'The Home Depot Logo'
		}
	];
</script>