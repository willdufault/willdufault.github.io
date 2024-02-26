<!-- HTML. -->
<main>
	<section id='projects' class='section my-6'>
		<div class='container has-text-centered'>
			<h1 class='title'>Projects</h1>
			<div class='columns is-multiline is-justify-content-center'>
				<!-- Iterate through projects. -->
				{#each projects as project}
					<div class='column  is-one-third-desktop is-half-tablet is-full-mobile'>
						<div class='card is-flex is-flex-direction-column'>
							<div class='card-image'>
								<figure class='image is-16by10'>
									<img src={project.imageUrl} alt={project.imageAlt}>
								</figure>
							</div>
							<div class='card-content'>
								<h1 class='title is-4'>{project.name}</h1>
								<p>
									{project.description}
								</p>
							</div>
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
								{#if project.inDevelopment}
								<div class='card-footer-item'>
									<span class='icon-text is-align-items-center'>
										<span class='icon'>
											<Icon icon="ph:git-branch" />
										</span>
										<span>In Development</span>
									</span>
								</div>
								{/if}
							</footer>
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

	.card-content {
		flex: 1 1 auto;
	}

	.icon {
		font-size: 1.3rem;
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
		githubUrl: string | null,
		inDevelopment: boolean
	}
	
	// List of projects.
	let projects: ProjectData[] = [
		{
			name: 'Beecology',
			description: 'A citizen science project that collects data on bees and butterflies. Revamped \
			the user interface using Angular, Bulma, and TypeScript.',
			imageUrl: 'images/beecology-screenshot.png',
			imageAlt: 'Beecology Screenshot',
			liveUrl: null,
			githubUrl: null,
			inDevelopment: true

		},
		{
			name: 'Immigration2Germany',
			description: 'A website that offers legal advice, social service information, and community \
			building opportunities to refugees entering Germany. Made with Svelte.',
			imageUrl: 'images/immigration4iran-screenshot.png',
			imageAlt: 'Immigration2Germany Screenshot',
			liveUrl: 'https://willdufault.github.io/immigration4iran',
			githubUrl: 'https://github.com/willdufault/immigration4iran',
			inDevelopment: false
		},
		{
			name: '24Ours',
			description: 'A free file-sharing application that deletes files every day at midnight. Made \
			with React, Bootstrap, Node.js, Express.js, AWS, and Python.',
			imageUrl: 'images/24ours-screenshot.png',
			imageAlt: '24Ours Screenshot',
			liveUrl: 'https://twentyfourours-718556141502.herokuapp.com',
			githubUrl: 'https://github.com/willdufault/24ours',
			inDevelopment: false
		},
		{
			name: 'Chess with Artificial Intelligence',
			description: 'A program to play chess against another person or a custom bot powered by AI. \
			Made with Python.',
			imageUrl: 'images/chess-with-ai-screenshot.png',
			imageAlt: 'Chess with Artificial Intelligence Screenshot',
			liveUrl: null,
			githubUrl: 'https://github.com/willdufault/chess',
			inDevelopment: false
		},
		{
			name: 'Fractal Playground',
			description: 'A playground to visualize different Julia set fractals. Made with HTML, CSS, \
			JavaScript, Node.js, Express.js, WebAssembly, and C.',
			imageUrl: 'images/fractal-playground-screenshot.png',
			imageAlt: 'Fractal Playground Screenshot',
			liveUrl: 'https://a4-william-dufault.glitch.me',
			githubUrl: 'https://github.com/willdufault/fractal-playground',
			inDevelopment: false
		},
		{
			name: 'Interactive Data Structure Visualizer',
			description: 'A tool that allows users to add or remove values from different data structures. \
			Made with HTML, CSS, and JavaScript.',
			imageUrl: 'images/interactive-data-structure-visualizer-screenshot.png',
			imageAlt: 'Interactive Data Structure Visualizer Screenshot',
			liveUrl: 'https://willdufault.github.io/interactive-data-structure-visualizer',
			githubUrl: 'https://github.com/willdufault/interactive-data-structure-visualizer',
			inDevelopment: false
		},
		{
			name: 'GoatCalendar',
			description: 'An application that converts a student\'s schedule to an easily importable \
			calendar file. Made with Svelte.',
			imageUrl: 'images/goatcalendar-screenshot.png',
			imageAlt: 'GoatCalendar Screenshot',
			liveUrl: 'https://willdufault.github.io/goatcalendar',
			githubUrl: 'https://github.com/willdufault/goatcalendar',
			inDevelopment: false
		}
	];
</script>