<script>
  import { onMount } from "svelte";

  import { fly } from "svelte/transition";

  let show = true;

  onMount(() => {
    show = false;
    show = true;
  });
</script>

<!-- TODO: #2 #1 IMPROVE MOBILE TRANSITIONS -->

{#if show}
  <div in:fly={{ y: -10, duration: 400, delay: 50 }} class="page relative">
    <slot />
  </div>
{/if}
