<script>
	import PageTransitionWrapper from "../components/PageTransitionWrapper.svelte";
	import ProjectCard from "../components/ProjectCard.svelte";
	import WebDevAnimationConsole from "../components/web-animation/WebDevAnimationConsole.svelte";
</script>

<svelte:head>
	<title>José Tridade - Web Developer</title>
	<meta
		name="description"
		content="José Tridade is a Developer with focus in Web and Cross Platform apps. Plus a sprincle of design, drawing and painting currently based in Luanda, Angola"
	/>
</svelte:head>

<PageTransitionWrapper>
	<div class="container flex flex-col mx-auto px-4 pt-9 md:pt-16">
		<div class="intro flex flex-col sm:flex-row">
			<div class="pb-4 sm:pr-11">
				<WebDevAnimationConsole />
			</div>

			<div class="info md:pt-0">
				<h1
					class="text-5xl sm:text-7xl leading-tight space-y-1 pb-4 font-serif font-black"
				>
					Striving for
					<span class="text-corporateDark-primary"> awesome web apps </span>
				</h1>

				<p class="py-4 text-xl">
					I am a Software Developer with focus in Web and Cross Platform apps.
					Plus a sprincle of design, drawing and painting.
				</p>

				<div
					class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full flex flex-row gap-4 items-center"
				>
					<a
						aria-label="Github @Trindade7"
						target="_blank"
						rel="noopener"
						class="link p-1 hover:text-corporateDark-primary transition-colors"
						href="https://github.com/Trindade7"
						data-tippy-content="@Trindade7"
						><svg
							class="h-7 fill-current text-gray-600 hover:text-green-700"
							role="img"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><title>GitHub</title><path
								d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
							/></svg
						></a
					>
					<a
						aria-label="Twitter @Trindade7Jose"
						target="_blank"
						rel="noopener"
						class="link p-1 hover:text-corporateDark-primary transition-colors"
						href="https://twitter.com/Trindade7Jose"
						data-tippy-content="@Trindade7Jose"
						><svg
							class="h-7 fill-current text-gray-600 hover:text-green-700"
							role="img"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><title>Twitter</title><path
								d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
							/></svg
						></a
					>
				</div>
			</div>
		</div>

		<section id="projects" class="projects-container py-16">
			<header class="flex flex-row py-4">
				<h3 class="text-2xl font-bold ">Projects</h3>
				<span class="flex-auto" />
				<!-- <a href="#projects" class="flex flex-row"> -->
				<a href="#projects">
					<strong class="inline">View all </strong>
					<svg
						class="w-6 inline -mt-1"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						/>
					</svg>
				</a>
			</header>
			<div class="projects py-8 flex flex-row flex-wrap">
				<ProjectCard />
			</div>
		</section>
		<span class="flex-auto" />
	</div>
</PageTransitionWrapper>
