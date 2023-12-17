<!-- HTML. -->
<main>
	<section id='projects' class='section m-6'>
		<div class='container has-text-centered'>
			<h1 class='title'>Projects</h1>
			<div class='columns is-multiline is-justify-content-center'>
				<!-- Iterate through projects. -->
				{#each projects as project}
					<div class='column  is-one-third-desktop is-half-tablet is-full-mobile'>
						<div class='card is-flex is-flex-direction-column'>
							<div class='card-image'>
								<figure class='image is-3by2'>
									<img class='cover' src={project.imageUrl} alt={project.imageAlt}>
								</figure>
							</div>
							<div class='card-content'>
								<h1 class='title is-4'>{project.name}</h1>
								<p>
									{project.description}
								</p>
							</div>
							<!-- At least one link available. -->
							{#if project.liveUrl || project.githubUrl}
								<footer class='card-footer'>
									<!-- Live URL available. -->
									{#if project.liveUrl != null}
										<a href={project.liveUrl} target='_blank' class='card-footer-item'>
											<span class='icon-text is-align-items-center'>
												<span class='icon'>
													<Icon icon='mi:share'/>
												</span>
												<span>Live</span>
											</span>
										</a>
										{/if}
										<!-- GitHub URL available. -->
										{#if project.githubUrl != null}
										<a href={project.githubUrl} target='_blank' class='card-footer-item'>
											<span class='icon-text is-align-items-center'>
												<span class='icon'>
													<Icon icon='mdi:github'/>
												</span>
											<span>GitHub</span>
										</span>
									</a>
									{/if}
								</footer>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
</main>

<!-- CSS. -->
<style>
	.cover {
		object-fit: cover;
		object-position: top center;
		padding: 1rem;
	}

	.icon {
		font-size: 1.3rem;
	}

	.card {
		height: 100%;
	}

	.card-content {
		flex: 1 1 auto;
	}
</style>

<!-- TypeScript. -->
<script lang='ts'>
	import Icon from '@iconify/svelte';

	// Interface for project list type.
	interface ProjectData {
		name: string,
		description: string
		imageUrl: string,
		imageAlt: string
		liveUrl: string | null,
		githubUrl: string | null
	}
	
	// List of projects.
	let projects: ProjectData[] = [
		// todo: needs to be updated before being added
		// {
		// 	name: 'Beecology',
		// 	description: 'Lorem ipsum dolor sit amet.',
		// 	imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png',
		// 	imageAlt: '',
		// 	liveUrl: null,
		// 	githubUrl: null
		// },
		{
			name: '24Ours',
			description: 'Built a full-stack file-sharing web application that allowed users to upload and \
			share any-typed files for up to 24 hours using React, Bootstrap, Node.js, Express.js, and AWS. \
			Reduced monthly cost by 90%+ by wiping files daily and limiting the file size using Lambda and \
			EventBridge. Connected the frontend to the backend using a REST API to securely exchange \
			information between a Node.js server and an S3 bucket using API Gateway, Lambda, and Python.',
			imageUrl: 'images/24ours-screenshot.png',
			imageAlt: '24Ours Screenshot',
			liveUrl: 'https://twentyfourours-718556141502.herokuapp.com',
			githubUrl: 'https://github.com/willdufault/24ours'
		},
		{
			name: 'Fractal Playground',
			description: 'Created a web application that allowed users to visualize different fractals \
			using HTML, CSS, JavaScript, C, WebAssembly, Node.js, and Express.js. Decreased the average \
			draw time by 11% by using C and WebAssembly to calculate if each pixel diverged.',
			imageUrl: 'images/fractal-playground-screenshot.png',
			imageAlt: 'Fractal Playground Screenshot',
			liveUrl: 'https://a4-william-dufault.glitch.me',
			githubUrl: 'https://github.com/willdufault/fractal-playground'
		},
		{
			name: 'Immigration4Iran',
			description: 'Led an interdisciplinary 4-student team in Germany to build a website that \
			provided legal advice, social service information, and community building opportunities to \
			refugees entering Germany using Svelte. Designed a responsive web UI by using media queries to \
			update the layout of the website to fit any-size device. Created a scalable website template \
			with detailed comments and documentation to increase code readability and enable the sponsor \
			to expand the project to other European countries.',
			imageUrl: 'images/immigration4iran-screenshot.png',
			imageAlt: 'Immigration4Iran Screenshot',
			liveUrl: 'https://willdufault.github.io/immigration4iran',
			githubUrl: 'https://github.com/willdufault/immigration4iran'
		},
		{
			name: 'Chess with Artificial Intelligence',
			description: 'Programmed chess in Python with an AI to play against and an engine to calculate \
			player advantage. Decreased the average runtime by 87% by using a profiler to monitor the \
			amount of time spent in each function call and eliminate any performance bottlenecks over 3 \
			iterations. Determined the best move by using an optimized version of the minimax algorithm to \
			look up to 3 moves ahead and select the move that leads to the most favorable outcome \
			according to the engine.',
			imageUrl: 'images/chess-with-ai-screenshot.png',
			imageAlt: 'Chess with Artificial Intelligence Screenshot',
			liveUrl: null,
			githubUrl: 'https://github.com/willdufault/chess'
		},
		{
			name: 'GoatCalendar',
			description: 'Developed and deployed a web application that converted a student\'s schedule to \
			a calendar file using Svelte. Condensed code by 40%+ by using regular expressions to extract \
			event information from the user\'s schedule. Won 2nd place in the “Best Community Hack” \
			category out of 28 teams at the 2023 WPI hackathon.',
			imageUrl: 'images/goatcalendar-screenshot.png',
			imageAlt: 'GoatCalendar Screenshot',
			liveUrl: 'https://willdufault.github.io/goatcalendar',
			githubUrl: 'https://github.com/willdufault/goatcalendar'
		},
		{
			name: 'Punchender',
			description: 'Built a full-stack crowdfunding site that allowed users to register as a \
			designer, supporter, or administrator and perform role-specific tasks, such as creating, \
			deleting, and supporting projects, using React and AWS. Connected the frontend to the backend \
			by using a REST API to securely exchange information between the client and a MySQL database \
			using API Gateway, RDS, Lambda, JavaScript, and SQL. Simulated an Agile environment by \
			iteratively setting goals and implementing new features in 4 1-week sprints.',
			imageUrl: 'images/punchender-code-screenshot.png',
			imageAlt: 'Punchender Code Screenshot',
			liveUrl: null,
			githubUrl: 'https://github.com/willdufault/punchender'
		},
		{
			name: 'Interactive Data Structure Visualizer',
			description: 'Created a tool that allowed users to add or remove values from 5 data structures \
			using HTML, CSS, and JavaScript. Scaled the displayed size of each data structure using 3 \
			custom algorithms based on the number of elements.',
			imageUrl: 'images/interactive-data-structure-visualizer-screenshot.png',
			imageAlt: 'Interactive Data Structure Visualizer Screenshot',
			liveUrl: 'https://willdufault.github.io/interactive-data-structure-visualizer',
			githubUrl: 'https://github.com/willdufault/interactive-data-structure-visualizer'
		},
		{
			name: 'Customizable Fullscreen Clock',
			description: 'Created a fullscreen clock web application using HTML, CSS, and JavaScript. \
			Added customization options for the font and background with toggleable options for how to \
			display the time.',
			imageUrl: 'images/customizable-fullscreen-clock-screenshot.png',
			imageAlt: 'Customizable Fullscreen Clock Screenshot',
			liveUrl: 'https://willdufault.github.io/fullscreen-clock',
			githubUrl: 'https://github.com/willdufault/fullscreen-clock'
		},
		{
			name: 'Connect Four with Smart Bot',
			description: 'Recreated Connect Four with a command-line interface and a bot to play against \
			using C++. Calculated a score for each legal move based on adjacent streaks to determine \
			whether the bot should play offense or defense.',
			imageUrl: 'images/connect-four-with-smart-bot-screenshot.png',
			imageAlt: 'Connect Four with Smart Bot Screenshot',
			liveUrl: null,
			githubUrl: 'https://github.com/willdufault/connect-four'
		},
		{
			name: 'NFL Combine Draft Predictor',
			description: 'Trained 3 machine learning models, including a neural network, that categorized \
			students\' academic performance based on a dataset with 30 predictor variables using Python \
			and TensorFlow. Reduced the dimensionality of the data by 63% by removing redundant \
			information through principal component analysis.',
			imageUrl: 'images/nfl-combine-draft-predictor-screenshot.png',
			imageAlt: 'NFL Combine Draft Predictor Screenshot',
			liveUrl: null,
			githubUrl: 'https://github.com/willdufault/nfl-combine-draft-predictor'
		},
	];
</script>