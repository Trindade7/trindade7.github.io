<script lang="ts">
	import ButtonIcon from "./ButtonIcon.svelte";

	export let segment: string;
	import logo from "images/logo.svg";
</script>

<nav class="
app-nav
bg-corporateDark-darkest
container
mx-auto
max-w-4xl
p-4 flex">
	<!-- <a aria-current={segment === undefined ? "page" : undefined} href=".">
		<img class="h-12 w-12" src={logo} alt="T7" />
	</a> -->
	<div class="flex items-center ">
		<a
			class="font-serif italic  text-xl font-bold"
			aria-current={segment === undefined ? "page" : undefined}
			href="."
		>
			<span class="text-5xl text-corporateDark-primary">T</span>
			<span
				class="pt-2 -ml-1 hover:text-corporateDark-primary transition-colors"
				>rindade</span
			>
		</a>
	</div>

	<span class="flex-auto" />

	<ul class="hidden sm:flex flex-row uppercase">
		<li
			class="px-2 flex items-center   hover:text-corporateDark-primary transition-colors"
		>
			<a aria-current={segment === "about" ? "page" : undefined} href="about"
				>about</a
			>
		</li>
		<li
			class="px-2 flex items-center   hover:text-corporateDark-primary transition-colors"
		>
			<a
				rel="prefetch"
				aria-current={segment === "projects" ? "page" : undefined}
				href="projects">projects</a
			>
		</li>
		<li
			class="px-2 flex items-center   hover:text-corporateDark-primary transition-colors"
		>
			<a
				rel="prefetch"
				aria-current={segment === "blog" ? "page" : undefined}
				href="blog">blog</a
			>
		</li>
		<li
			class="px-2 flex items-center   hover:text-corporateDark-primary transition-colors"
		>
			<a aria-current={segment === undefined ? "page" : undefined} href="."
				>home</a
			>
		</li>
	</ul>

	<div class="sm:hidden">
		<ButtonIcon ariaLabel={"Menu"}>
			<svg
				class="  w-8 h-8"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
			>
				<path
					fill-rule="evenodd"
					d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
					clip-rule="evenodd"
				/>
			</svg>
		</ButtonIcon>
	</div>
</nav>

<style>
	nav {
		z-index: 10;
	}
</style>
