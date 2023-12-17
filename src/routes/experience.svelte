<!-- HTML. -->
<main>
	<section id='experience' class='section m-6'>
		<div class='container has-text-centered'>
			<h1 class='title'>Experience</h1>
			<div class='columns is-multiline is-justify-content-center'>
				<!-- Iterate through jobs. -->
				{#each jobs as job}
					<div class='column is-one-third-desktop is-half-tablet is-full-mobile'>
						<div class='card'>
							<div class='card-image'>
								<figure class='image is-3by2'>
									<img class='cover' src={job.imageUrl} alt={job.imageAlt}>
								</figure>
							</div>
							<div class='card-content'>
								<h1 class='title is-4'>{job.jobTitle}</h1>
								<h1 class='subtitle'>{job.company}</h1>
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
	
	.cover {
		object-fit: cover;
		object-position: top center;
		padding: 1rem;
	}
</style>

<!-- TypeScript. -->
<script lang='ts'>
	// Interface for job list type.
	interface JobData {
		jobTitle: string,
		company: string,
		description: string
		imageUrl: string,
		imageAlt: string
	}

	// List of jobs.
	let jobs: JobData[] = [
		{
			jobTitle: 'Student Assistant',
			company: 'Worcester Polytechnic Institute',
			description: 'Directed labs, held office hours, and graded assignments for 10 hours/week \
			alongside full course load. Expedited grading by 10%+ by matching student responses to regular \
			expressions using Python.',
			imageUrl: 'images/wpi-seal.png',
			imageAlt: 'Worcester Polytechnic Institute Seal'
		},
		{
			jobTitle: 'Cloud Engineer Intern',
			company: 'BJ\'s Wholesale Club',
			description: 'Minimized resource wastage by adding 3 lifecycle configurations to SageMaker \
			that automatically terminated idle instances and notebooks after a specified amount of time, \
			saving $3,500/year. Improved the flow of information by creating an alert system that sent an \
			email any time the number of on-demand instances for an EMR cluster exceeded a given threshold \
			using Lambda, SNS, and EventBridge, saving $2,300/year. Streamlined the spot price \
			optimization process by architecting and deploying an AWS application that generated a weekly \
			Excel report containing EMR and EC2 data using Lambda, S3, CloudFormation, and EventBridge. \
			Increased productivity by containerizing the primary SageMaker Python environment using Docker \
			and ECR, saving 20+ seconds every time an instance using that environment was launched. \
			Received the Pacesetter Award for exceptional performance and setting the standard of \
			achievement for interns. Wrote an executive summary and delivered a final presentation to \
			C-level executives after 12 weeks.',
			imageUrl: 'images/bjs-logo.png',
			imageAlt: 'BJ\'s Wholesale Club Logo'
		},
		{
			jobTitle: 'Paint Sales Associate',
			company: 'The Home Depot',
			description: 'Demonstrated excellent communication skills by aiding 30+ customers per day and \
			collaborating with coworkers to complete orders. Memorized 50+ continuously changing products \
			to tailor suggestions for optimal customer experience. Exhibited a strong work ethic by \
			working extra hours that were frequently understaffed.',
			imageUrl: 'images/home-depot-logo.png',
			imageAlt: 'The Home Depot Logo'
		}
	];
</script>