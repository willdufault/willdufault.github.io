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
			jobTitle: 'Computer Science Student Assistant',
			company: 'Worcester Polytechnic Institute',
			dateRange: 'Sep 2023 – Dec 2023',
			description: 'Directed labs, held office hours, tutored students, and graded assignments for \
			10 hours/week alongside full course load. Automated tasks with Python.',
			imageUrl: 'images/wpi-seal.png',
			imageAlt: 'Worcester Polytechnic Institute Seal'
		},
		{
			jobTitle: 'Cloud Engineer Intern',
			company: 'BJ\'s Wholesale Club',
			dateRange: 'May 2023 – Aug 2023',
			description: 'Automated and optimized processes in the machine learning workflow with Python \
			and AWS. Saved $5,800/year across all projects and delivered a final presentation to C-level \
			executives after 12 weeks.',
			imageUrl: 'images/bjs-logo.png',
			imageAlt: 'BJ\'s Wholesale Club Logo'
		},
		{
			jobTitle: 'Paint Sales Associate',
			company: 'The Home Depot',
			dateRange: 'May 2022 – Oct 2022',
			description: 'Helped 30+ customers per day with any questions or requests. Exhibited a strong \
			work ethic by working extra hours that were frequently understaffed.',
			imageUrl: 'images/home-depot-logo.png',
			imageAlt: 'The Home Depot Logo'
		}
	];
</script>