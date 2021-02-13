<script context="module" lang="ts">
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script lang="ts">
	export let post: { slug: string; title: string; html: any };
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<div class="container p-4 pt-10">
	<h4
		class="text-lg font-bold text-corporateDark-primary uppercase"
		rel="prefetch"
	>
		experience
	</h4>
	<h1 class="text-5xl font-bold font-serif py-4" rel="prefetch">
		{post.title}
	</h1>

	<div class="content container text-lg mx-auto py-4">
		{@html post.html}
	</div>
</div>

<style global>
	/* TODO: DELETE */
	p {
		margin: 1rem 0;
	}
</style>
