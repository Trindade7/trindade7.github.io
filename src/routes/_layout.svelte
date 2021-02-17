<script lang="ts">
	import Nav from "../components/Nav.svelte";
	import BottomAppBar from "../components/BottomAppBar.svelte";
	import AppFooter from "../components/AppFooter.svelte";

	export let segment: string;
</script>

<div class="app-conainer container flex flex-col mx-auto max-w-4xl h-screen">
	<Nav {segment} />

	<main>
		<slot />
	</main>

	<span class="flex-auto" />
	<AppFooter />
	<BottomAppBar {segment} />
</div>
