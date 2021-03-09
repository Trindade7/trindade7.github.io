<script type="ts">
	import ButtonIconTwitter from "./../components/ButtonIconTwitter.svelte";
	import ButtonIconGit from "./../components/ButtonIconGit.svelte";
	import ButtonLinkArrow from "../components/ButtonLinkArrow.svelte";
	import PageTransitionWrapper from "../components/PageTransitionWrapper.svelte";
	import ProjectCard from "../components/ProjectCard.svelte";
	import WebDevAnimationConsole from "../components/web-animation/WebDevAnimationConsole.svelte";
	import type { ProjectModel } from "../models/DataModels";

	let projects: ProjectModel[] = [
		{
			title: "Our Space",
			description:
				"An app to share cards with your significant other. The users sign in, connect to each other accounts, then create and share cards among them.",
			mainTool: "angular",
			tags: ["angular", "firebase", "typescript", "css"],
			github: "https://github.com/Trindade7/our_space",
			slug: "our-space",
		},
		{
			title: "mbed PID controller",
			description:
				"A PID controller I created during my second year at New castle Univerity. It controls a buggie car that follows a line based on voltage variation detected by sensors attached to the car",
			mainTool: "c/c++",
			tags: ["c/c++", "mbed", "pid", "electronics"],
			slug: "mbed-pid-controller",
			github: "https://os.mbed.com/users/JTrindade/code/finall_ctrlr/",
		},
		{
			title: "trindade7",
			description:
				"My personal website, and the place you are reading this from. The app is built with Svelte, Sapper to be precise, and is hoted using github-pages.",
			mainTool: "svelte",
			slug: "trindade7",
			tags: ["svelte", "sapper", "tailwindcss", "github-pages"],
			github: "https://github.com/Trindade7/Trindade7.github.io",
		},
		{
			title: "Pedacinhos de amor",
			description:
				"A web store for a baking company built in Angular. It allows the user to check products, place and track orders online.",
			slug: "pedacinhos-de-amor",
			mainTool: "angular",
			tags: ["angular", "ng-zorro", "less", "firebase"],
			github: "https://github.com/Trindade7/proj-name",
		},
	];
</script>

<svelte:head>
	<title>José Tridade - Web Developer</title>
	<meta
		name="description"
		content="José Tridade is a Developer with focus in Web and Cross Platform apps. Plus a sprincle of design, drawing and painting currently based in Luanda, Angola"
	/>
</svelte:head>

<PageTransitionWrapper>
	<div class="flex flex-col mx-auto px-4 pt-9 md:pt-16">
		<div class="intro flex flex-col sm:flex-row pb-20">
			<div class="pb-4 sm:pr-8 md:pr-11">
				<WebDevAnimationConsole />
			</div>

			<div class="info md:pt-0">
				<h1
					class="text-5xl md:text-7xl leading-tight space-y-1 pb-4 font-serif font-black"
				>
					Striving for awesome
					<span class="text-corporateDark-primary"> web apps</span>
				</h1>

				<p class="py-4 text-xl">
					I am a Software Developer with focus in Web and Cross Platform apps.
					Plus a sprincle of design, drawing and painting.
				</p>

				<div class="mt-6 flex flex-row gap-4 items-center">
					<ButtonIconGit />
					<ButtonIconTwitter />
				</div>
			</div>
		</div>

		<hr class=" text-gray" />

		<section id="projects" class="projects-container pb-16">
			<header class="flex flex-row py-4">
				<h2 class="text-2xl font-bold ">Projects</h2>
				<span class="flex-auto" />
				<ButtonLinkArrow url={"projects"}>View all</ButtonLinkArrow>
			</header>
			<div class="projects py-8 flex flex-row flex-wrap gap-4">
				{#each projects as project}
					<div style="flex: 1 1 360px" class="project-card-container w-full ">
						<ProjectCard {...project} />
					</div>
				{/each}
			</div>
			<div class="pb-4 flex flex-row">
				<span class="flex-auto" />

				<ButtonLinkArrow url={"projects"}>All Projects</ButtonLinkArrow>
			</div>
		</section>
	</div>
</PageTransitionWrapper>
