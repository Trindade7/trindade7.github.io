<script lang="ts">
	import Nav from "../components/Nav.svelte";
	import BottomAppBar from "../components/BottomAppBar.svelte";
	import AppFooter from "../components/AppFooter.svelte";
	import AppMenu from "../components/AppMenu.svelte";

	export let segment: string;
</script>

<div class="app-conainer relative flex flex-col h-screen">
	<div class="container flex flex-col w-full max-w-5xl mx-auto ">
		<Nav {segment} />
	</div>

	<div class="sm:hidden">
		<AppMenu {segment} />
	</div>

	<main class="flex flex-col w-full max-w-5xl mx-auto  ">
		<slot />
	</main>

	<span class="flex-auto" />

	<div class=" border-t border-corporateDark-dark">
		<div class="w-full max-w-5xl mx-auto ">
			<AppFooter />
		</div>
	</div>
</div>
