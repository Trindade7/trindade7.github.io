<script context="module" lang="ts">
	export function preload() {
		return this.fetch(`blog.json`)
			.then((r: { json: () => any }) => r.json())
			.then((posts: { slug: string; title: string; html: any }[]) => {
				return { posts };
			});
	}
</script>

<script lang="ts">
	export let posts: { slug: string; title: string; html: any }[];
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="posts container p-4 pt-10">
	<h4 class="font-bold text-corporateDark-primary py-7">Recent posts</h4>

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
				<p class="text-lg py-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
					repudiandae eum vero officiis ipsa odio praesentium optio maxime
					voluptates. Tempore eius nemo architecto pariatur numquam accusamus
					voluptate debitis nesciunt dolores!
				</p>
			</li>
		{/each}
	</ul>
</div>
