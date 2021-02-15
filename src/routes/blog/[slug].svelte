<script context="module" lang="ts">
	import PageTransitionWrapper from "../../components/PageTransitionWrapper.svelte";

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

<article class="container  max-w-4xl p-4 md:px-20 pt-10">
	<h4 class="uppercase  text-corporateDark-primary">experience</h4>
	<h1 class="text-5xl font-bold font-serif py-4" rel="prefetch">
		{post.title}
	</h1>
	<PageTransitionWrapper>
		<div class="content text-lg  py-4  prose  max-w-none dark:prose-dark">
			{@html post.html}
		</div>
	</PageTransitionWrapper>
</article>
