<!-- HTML. -->
<main>
	<div class='columns is-mobile is-justify-content-center-mobile'>
		{#each contact_information as contact}
			<div class='column is-narrow'>
				<a href={contact.contactUrl} target='_blank' class='button is-white is-outlined is-rounded is-relative p-5'>
					<span class='icon is-absolute'>
						<Icon icon={contact.icon}/>
					</span>
				</a>
			</div>
		{/each}
	</div>
</main>

<!-- CSS. -->
<style>
	.icon {
		font-size: 1.6rem;
	}

	.is-absolute {
		position: absolute;
	}

	.button:hover {
		background: white;
		mix-blend-mode: lighten;
	}
</style>

<!-- TypeScript. -->
<script lang='ts'>
	import Icon from '@iconify/svelte';

	// Interface for contact information list type.
	interface ContactInformationData {
		icon: string,
		contactUrl: string
	}

	// List of contact information.
	let contact_information: ContactInformationData[] = [
		{
			icon: 'ri:linkedin-fill',
			contactUrl: 'https://www.linkedin.com/in/willdufault',
		},
		{
			icon: 'mdi:github',
			contactUrl: 'https://github.com/willdufault',
		},
		{
			icon: 'ic:outline-email',
			contactUrl: 'mailto:wrdufault@wpi.edu',
		}
	];
</script>
