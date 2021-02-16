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
	<a aria-current={segment === undefined ? "page" : undefined} href=".">
		<img class="h-12 w-12" src={logo} alt="T7" />
	</a>
	<div class="flex items-center ">
		<a aria-current={segment === undefined ? "page" : undefined} href=".">
			<h1 class="font-bold pl-4">Trindade</h1>
		</a>
	</div>

	<span class="flex-auto" />

	<ul class="hidden sm:flex flex-row uppercase">
		<li
			class="px-2 flex items-center   hover:text-corporateDark-primary transition-colors"
		>
			<a aria-current={segment === undefined ? "page" : undefined} href="."
				>home</a
			>
		</li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
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
			<a aria-current={segment === "about" ? "page" : undefined} href="about"
				>about</a
			>
		</li>
	</ul>

	<div class="sm:hidden">
		<ButtonIcon>
			<svg
				class="  w-8 h-8"
				xmlns="http://www.w3.org/2000/svg"
				enable-background="new 0 0 24 24"
				viewBox="0 0 24 24"
				width="18px"
				height="18px"
				><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g
					><g
						><g
							><path
								d="M4,18h16c0.55,0,1-0.45,1-1l0,0c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1l0,0C3,17.55,3.45,18,4,18z M4,13h16 c0.55,0,1-0.45,1-1l0,0c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1l0,0C3,12.55,3.45,13,4,13z M3,7L3,7c0,0.55,0.45,1,1,1h16 c0.55,0,1-0.45,1-1l0,0c0-0.55-0.45-1-1-1H4C3.45,6,3,6.45,3,7z"
							/></g
						></g
					></g
				></svg
			>
		</ButtonIcon>
	</div>
</nav>

<style>
	nav {
		z-index: 10;
	}
</style>
