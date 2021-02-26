<script context="module" lang="ts">
  export function preload() {
    return this.fetch("projects.json")
      .then((res: { json: () => any }) => res.json())
      .then((projects: ProjectModel[]) => {
        return { projects };
      });
  }
</script>

<script lang="ts">
  import PageTransitionWrapper from "../../components/PageTransitionWrapper.svelte";
  import ProjectCard from "../../components/ProjectCard.svelte";
  import type { ProjectModel } from "../../models/DataModels";
  export let projects: ProjectModel[] = [];
</script>

<svelte:head>
  <meta name="Description" content="My latest Software development projects" />
  <title>Projects</title>
</svelte:head>

<PageTransitionWrapper>
  <div class="posts p-4 pb-32 m-auto">
    <h3 class="font-serif font-bold text-4xl uppercase pt-10">My projects</h3>

    <p class="text-xl py-8 max-w-2xl">
      A list of my latest Software projects. The majority of them will be open
      source, however, some will not since I will also include private projects
      where the client allows me to list them!
    </p>

    <ul class="sm:flex sm:flex-row sm:flex-wrap sm:gap-6">
      {#each projects as project, index}
        <li class="py-4 flex-1">
          <ProjectCard {...project} />
        </li>
        {#if index !== projects.length - 1}
          <hr class="text-corporateDark-light dark:text-corporateDark-dark" />
        {/if}
      {/each}
    </ul>
  </div>
</PageTransitionWrapper>
