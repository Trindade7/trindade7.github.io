<script>
  import { onMount } from "svelte";

  import { fade, fly } from "svelte/transition";

  let show = false;

  onMount(() => (show = true));
</script>

<!-- TODO: #2 #1 IMPROVE MOBILE TRANSITIONS -->

{#if show}
  <div
    in:fly={{ y: -10, duration: 400, delay: 100 }}
    out:fade={{ duration: 10 }}
    class="page relative"
  >
    <slot />
  </div>
{/if}
