<script type="ts">
  import Tag from "./Tag.svelte";

  export let mainTool:
    | "typescript"
    | "javascript"
    | "python"
    | "angular"
    | "svelte"
    | "sapper" = "angular";
</script>

<div class="project-card p-8 rounded bg-corporateDark-dark max-w-sm">
  <small
    class="font-bold uppercase py-1 border-t-2 text-corporateDark-accent max-w-max"
  >
    {mainTool}
  </small>

  <h3 class="text-xl font-bold py-4">Project name here</h3>

  <p class="description">
    Cillum esse sint ea sunt labore quis dolore dolor mollit minim. Commodo
    laboris commodo culpa exercitation non enim officia ut sint anim Lorem ex
    deserunt cupidatat. Culpa officia magna quis magna ullamco do. Laboris enim
    reprehenderit esse aliquip consequat occaecat commodo.
  </p>

  <div class="tags pt-8 flex flex-row flex-wrap gap-2 max-w-full">
    <Tag />
    <Tag name="NodeJS" />
    <Tag name="Firebase" />
    <Tag name="Bulma" bgColor="" />
  </div>
</div>
