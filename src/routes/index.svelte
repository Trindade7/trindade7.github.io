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
			title: "Project name here",
			description:
				"Aute eu duis ut eu ipsum officia eiusmod elit ad anim incididunt aute et. Culpa amet velit in culpa amet pariatur non non sit. Tempor ex cillum culpa occaecat id. Ad fugiat do laboris Lorem et elit. ",
			mainTool: "python",
			tags: ["ts", "firebase", "other"],
		},
		{
			title: "Hello world",
			description:
				"Laborum aliquip est Lorem reprehenderit anim adipisicing. Non elit reprehenderit id labore labore eu aute. Ut reprehenderit excepteur anim id commodo consequat. Ad nostrud esse deserunt qui labore ipsum incididunt laboris.",
			mainTool: "nodejs",
			tags: ["css", "firebase"],
		},
		{
			title: "Kuimba",
			description:
				"Reprehenderit sunt excepteur id aliqua sint ad occaecat nisi ut id consequat labore qui. Amet dolore consequat fugiat ex consequat ullamco exercitation Lorem enim proident laboris. Dolor laboris dolor culpa magna elit ut veniam consectetur. Irure voluptate aute aliqua quis excepteur.",
			mainTool: "angular",
			tags: ["sass", "firebase", "wasm", "rust"],
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
