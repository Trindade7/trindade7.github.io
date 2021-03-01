<script>
  export let tags = [];
</script>

<div class="tags opacity-70 flex flex-row flex-wrap gap-2 max-w-full">
  {#each tags as tag}
    <small class="uppercase font-bold">#{tag}</small>
  {/each}
</div>
