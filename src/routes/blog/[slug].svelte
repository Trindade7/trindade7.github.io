<script context="module" lang="ts">
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return {
				post: data,
			};
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script lang="ts">
	import { onMount } from "svelte";
	import PageTransitionWrapper from "../../components/PageTransitionWrapper.svelte";
	import ButtonLinkArrow from "../../components/ButtonLinkArrow.svelte";
	import TagList from "../../components/TagList.svelte";

	export let post: {
		slug: string;
		title: string;
		lead: string;
		html: any;
		author: string;
		tags: string[];
		pubDate: string;
	};

	let colorClass = "";
	onMount(() => (colorClass = colorClass = "text-tools-" + post.tags[0]));
</script>

<svelte:head>
	<meta
		name="Description"
		content={`${post.lead}, Author: ${post.author}, Category: Post`}
	/>
	<meta name="author" content={post.author} />
	<title>{post.title}</title>
</svelte:head>

<article class="mx-auto max-w-3xl p-4 pt-10">
	<div class="flex flex-row pt-8 pb-4">
		<small class="{colorClass} font-bold uppercase border-t-2 max-w-max">
			{post.tags[0]}
		</small>
		<span class="flex-auto" />
		<small class="opacity-70">{post.pubDate}</small>
	</div>

	<h1 class="text-5xl font-bold font-serif py-4" rel="prefetch">
		{post.title}
	</h1>

	<PageTransitionWrapper>
		<div class=" flex flex-col md:flex-row py-4">
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

		<div class="tags max-w-2xl m-auto py-4">
			<TagList tags={post.tags} />

			<div class="py-4">
				<hr />
				<div class="pt-4 flex flex-row justify-between">
					<address class="author">
						<time class="block" datetime={post.pubDate}>{post.pubDate}</time>
						<a
							class="underline hover:text-corporateDark-primary"
							rel="author"
							href=".">{post.author}</a
						>
					</address>

					<ButtonLinkArrow url={"blog"}>All posts</ButtonLinkArrow>
				</div>
			</div>
		</div>
		<div class="web-mentions prose dark:prose-dark py-10">
			<h3 class=" text-2xl">WEBMENTIONS</h3>

			<h1 class="text-center text-4xl">COMMING SOON</h1>
		</div>
	</PageTransitionWrapper>
</article>
