<script context="module" lang="ts">
	import PageTransitionWrapper from "../../components/PageTransitionWrapper.svelte";

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
		html: any;
	}[];
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<PageTransitionWrapper>
	<div class="posts container p-4 pt-10">
		<h4 class="font-bold uppercase text-corporateDark-primary py-5">
			experience
		</h4>

		<ul>
			{#each posts as post}
				<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
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
	</div>
</PageTransitionWrapper>
