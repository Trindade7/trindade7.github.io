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
	export let post: {
		slug: string;
		title: string;
		lead: string;
		html: any;
		author: string;
		pubDate: string;
	};
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
		<div class="flex flex-col md:flex-row py-4">
			<span
				class="
			text-corporateDark-primary
			border-t-4 md:border-t-0 md:border-l-4
			pt-2 md:pt-0 md:pl-6 "
			/>

			<p class="lead text-2xl leading-9 md:text-3xl md:leading-10 font-light">
				{post.lead}
			</p>
		</div>

		<div class="content text-lg  py-4  prose  max-w-2xl m-auto dark:prose-dark">
			{@html post.html}
		</div>

		<div class="py-4">
			<hr />
			<div class="flex flex-row justify-between">
				<address class="author p-4">
					<a
						class="underline text-corporateDark-primary px-2 py-1"
						target="_blank"
						rel="author"
						href="/author/john-doe">{post.author}</a
					>
				</address>

				<a
					class=" text-2xl font-bold font-serif p-4 transition-colors text-corporateDark-primary hover:text-corporateDark-light"
					rel="prefetch"
					href="blog">MORE POSTS</a
				>

				<time class="p-4" datetime={post.pubDate}>{post.pubDate}</time>
			</div>
			<hr />
		</div>

		<div class="web-mentions prose dark:prose-dark py-8">
			<h3 class="p-4 text-2xl font-serif">WEBMENTIONS</h3>

			<h1 class="text-center  font-serif text-4xl">COMMING SOON</h1>
		</div>
	</PageTransitionWrapper>
</article>
