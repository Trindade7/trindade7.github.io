<script context="module" lang="ts">
	import PageTransitionWrapper from "../../components/PageTransitionWrapper.svelte";
	import BlogPostCard from "../../components/BlogPostCard.svelte";

	export function preload() {
		return this.fetch(`blog.json`)
			.then((r: { json: () => any }) => r.json())
			.then(
				(
					posts: {
						slug: string;
						title: string;
						lead: string;
						pubDate: string;
						tags: string[];
						html: any;
					}[]
				) => {
					return { posts };
				}
			);
	}
</script>

<script lang="ts">
	export let posts: {
		slug: string;
		title: string;
		lead: string;
		pubDate: string;
		tags: string[];
		html: any;
	}[];
</script>

<svelte:head>
	<meta
		name="Description"
		content="Posts about Software development, mostly Web, and mental health"
	/>
	<title>Blog</title>
</svelte:head>

<PageTransitionWrapper>
	<div class="posts p-4 pb-32 m-auto">
		<h3 class="font-serif font-bold text-4xl uppercase py-10">My posts</h3>

		<ul class="sm:flex sm:flex-row sm:flex-wrap sm:gap-6">
			{#each posts as post, index}
				<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
				<li class="py-4 flex-1">
					<BlogPostCard {...post} />
				</li>
				{#if index !== posts.length - 1}
					<hr class="text-corporateDark-light dark:text-corporateDark-dark" />
				{/if}
			{/each}
		</ul>
	</div>
</PageTransitionWrapper>

<!--
<div class="posts container p-4 pt-10">
	<h4 class="font-bold uppercase text-corporateDark-primary py-5">
		experience
	</h4>

	<ul>
		{#each posts as post}
			<li>
				<a
					class="text-4xl font-bold font-serif"
					rel="prefetch"
					href="blog/{post.slug}">{post.title}</a
				>
				<p class="py-2">
					{post.lead}
				</p>
			</li>
		{/each}
	</ul>
</div> -->
