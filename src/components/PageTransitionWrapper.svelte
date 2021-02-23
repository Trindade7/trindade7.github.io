<script>
  import { onMount } from "svelte";

  import { fade, fly } from "svelte/transition";

  let show = false;

  onMount(() => (show = true));
</script>

{#if show}
  <div in:fly={{ y: -10, duration: 400, delay: 150 }} class="page relative">
    <slot />
  </div>
{/if}
