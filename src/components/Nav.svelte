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
		<li class="px-2 flex items-center">
			<a aria-current={segment === undefined ? "page" : undefined} href="."
				>home</a
			>
		</li>
		<li class="px-2 flex items-center">
			<a aria-current={segment === "about" ? "page" : undefined} href="about"
				>about</a
			>
		</li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li class="px-2 flex items-center">
			<a
				rel="prefetch"
				aria-current={segment === "blog" ? "page" : undefined}
				href="blog">blog</a
			>
		</li>
	</ul>

	<ButtonIcon>
		<svg
			class="  w-8 h-8"
			xmlns="http://www.w3.org/2000/svg"
			enable-background="new 0 0 24 24"
			height="24"
			viewBox="0 0 24 24"
			width="24"
		>
			<g>
				<rect fill="none" height="24" width="24" />
			</g>
			<g>
				<path
					d="M12,2C6.49,2,2,6.49,2,12s4.49,10,10,10c1.38,0,2.5-1.12,2.5-2.5c0-0.61-0.23-1.2-0.64-1.67c-0.08-0.1-0.13-0.21-0.13-0.33 c0-0.28,0.22-0.5,0.5-0.5H16c3.31,0,6-2.69,6-6C22,6.04,17.51,2,12,2z M17.5,13c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5 s1.5,0.67,1.5,1.5C19,12.33,18.33,13,17.5,13z M14.5,9C13.67,9,13,8.33,13,7.5C13,6.67,13.67,6,14.5,6S16,6.67,16,7.5 C16,8.33,15.33,9,14.5,9z M5,11.5C5,10.67,5.67,10,6.5,10S8,10.67,8,11.5C8,12.33,7.33,13,6.5,13S5,12.33,5,11.5z M11,7.5 C11,8.33,10.33,9,9.5,9S8,8.33,8,7.5C8,6.67,8.67,6,9.5,6S11,6.67,11,7.5z"
				/>
			</g>
		</svg>
	</ButtonIcon>
</nav>

<style>
	nav {
		z-index: 10;
	}
</style>
