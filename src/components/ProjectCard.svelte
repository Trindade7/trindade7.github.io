<script type="ts">
  import { onMount } from "svelte";
  import TagList from "./TagList.svelte";

  export let name = "Project name here";
  export let description = `Cillum esse sint ea sunt labore quis dolore dolor mollit minim. Commodo
    laboris commodo culpa exercitation non enim officia ut sint anim Lorem ex
    deserunt cupidatat. Culpa officia magna quis magna ullamco do. Laboris enim
    reprehenderit esse aliquip consequat occaecat commodo.`;

  export let mainTool:
    | "typescript"
    | "javascript"
    | "python"
    | "angular"
    | "svelte"
    | "nodejs"
    | "sapper" = "angular";

  let colorClass = "";
  let borderColorClass = "";
  onMount(() => {
    colorClass = "text-tools-" + mainTool;
    borderColorClass = "border-tools-" + mainTool;
  });
  export let tools: string[] = [];
</script>

<div
  class="{borderColorClass} project-card border-l-4  p-8 rounded bg-corporateDark-dark w-full h-full flex flex-col"
>
  <small class="{colorClass} font-bold uppercase py-1 border-t-2 max-w-max">
    {mainTool}
  </small>

  <h3 class="text-xl font-bold py-4">
    <a
      class="hover:underline hover:{colorClass} transition-colors"
      href="projects/id">{name}</a
    >
  </h3>

  <p class="description line-clamp-4">
    {description}
  </p>

  <span class="flex-auto" />

  <div class="tags pt-4">
    <TagList tags={tools} />
  </div>
</div>
