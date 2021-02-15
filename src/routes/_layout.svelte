<script lang="ts">
	import Nav from "../components/Nav.svelte";
	import BottomAppBar from "../components/BottomAppBar.svelte";

	export let segment: string;
</script>

<div class="app-conainer container mx-auto max-w-4xl h-screen">
	<Nav {segment} />

	<main class="md:pt-20">
		<slot />
	</main>

	<BottomAppBar {segment} />
</div>
