<script type="ts">
  import { onMount } from "svelte";

  export let slug = "";
  export let title = "Project name here";
  export let pubDate = "";
  export let lead = "";

  export let tags: string[] = [];

  let mainTool = tags.shift();

  let colorClass = "";
  let borderColorClass = "";
  onMount(() => {
    console.log(tags);
    colorClass = "text-tools-" + mainTool;
    borderColorClass = "border-tools-" + mainTool;
  });
</script>

<div class="project-card py-4 w-full   flex flex-col">
  <div class="flex flex-row">
    <small class="{colorClass} font-bold uppercase border-t-2 max-w-max">
      {mainTool}
    </small>
    <span class="flex-auto" />
    <small class="opacity-70">{pubDate}</small>
  </div>

  <a href={"blog/" + slug}>
    <h3 class="text-2xl font-serif font-bold py-4">{title}</h3>
  </a>

  <p class="description">
    {lead}
  </p>

  <div class="tags pt-4 opacity-70 flex flex-row flex-wrap gap-2 max-w-full">
    {#each tags as tag}
      <small class="uppercase font-bold">#{tag}</small>
    {/each}
  </div>
</div>
