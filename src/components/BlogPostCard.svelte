<script type="ts">
  import { onMount } from "svelte";

  export let slug = "";
  export let title = "Project name here";
  export let pubDate = "";
  export let lead = "";

  export let tags: string[] = [];

  let mainTool = tags[0];

  let colorClass = "";
  let borderColorClass = "";
  onMount(() => {
    console.log(tags);
    colorClass = "text-tools-" + mainTool;
    borderColorClass = "border-tools-" + mainTool;
  });
</script>

<!-- TODO: ADD POST IMAGE -->

<div class="project-card py-4 w-full h-full flex flex-col">
  <div class="flex flex-row pb-4">
    <small class="{colorClass} font-bold uppercase border-t-2 max-w-max">
      {mainTool}
    </small>
    <span class="flex-auto" />
    <small class="opacity-70">{pubDate}</small>
  </div>

  <a href={"blog/" + slug}>
    <h3
      class="text-2xl font-serif font-bold hover:text-corporateDark-primary hover:underline focus:text-corporateDark-primary focus:underline transition-colors"
    >
      {title}
    </h3>
  </a>

  <p class="description py-4">
    {lead}
  </p>

  <span class="flex-auto" />

  <div class="tags opacity-70 flex flex-row flex-wrap gap-2 max-w-full">
    {#each tags.slice(1) as tag}
      <small class="uppercase font-bold">#{tag}</small>
    {/each}
  </div>
</div>
