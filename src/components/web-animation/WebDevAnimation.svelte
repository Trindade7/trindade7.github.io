<script>
  import { onMount } from "svelte";

  import { scale, fade } from "svelte/transition";

  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  let startAnimation = true;

  let toggle = function () {
    startAnimation = !startAnimation;
    animation();
  };

  let boxes = [...Array(6).keys()];

  // ########### CONSOLE ##############
  let cursor = true;
  function animateCursor() {
    cursor = !cursor;
    lines[0].animation.set(200);
  }

  onMount(() => setInterval(() => animateCursor(), 500));

  const lines = [
    ...Array(
      tweened(0, {
        duration: 400,
        easing: cubicOut,
      })
    ).keys(),
  ];
</script>

<div class="component-conatiner relative">
  <div class="browser w-80 rounded overflow-hidden">
    <header
      on:click={toggle}
      class="flex flex-row p-1 sm:p-2 gap-2 bg-gray-darkest"
    >
      <span class="flex-auto" />
      <div class="rounded-lg p-1 sm:p-2 bg-gray" />
      <div class="rounded-lg p-1 sm:p-2 bg-secondary" />
      <div class="rounded-lg p-1 sm:p-2 bg-danger" />
    </header>

    <div class="content py-4 px-8 bg-gray-lightest h-48">
      {#if startAnimation}
        <!-- <div class="box full" transition:scale> -->
        <div
          in:scale={{ duration: 300 }}
          out:fade={{ duration: 0 }}
          class="box w-full h-16 rounded bg-gray"
        >
          <div class="sized-box p-16" />
        </div>
      {/if}
      <div class="boxes flex flex-row gap-2 flex-wrap justify-center py-4 gap">
        {#each boxes as box}
          {#if startAnimation}
            <div
              in:scale={{ duration: 300, delay: box * 300 }}
              out:fade={{ duration: 0 }}
              class="box box w-12 h-12 rounded bg-gray"
            >
              <div class="sized-box p-8" />
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </div>

  <div
    class="console hidden rounded absolute w-60 -mt-10 -ml-3 overflow-hidden"
  >
    <header class="flex flex-row p-1 sm:p-2 gap-2 bg-gray-darkest">
      <span class="flex-auto" />
      <div class="rounded-lg p-1 sm:p-2 bg-gray" />
      <div class="rounded-lg p-1 sm:p-2 bg-secondary" />
      <div class="rounded-lg p-1 sm:p-2 bg-danger" />
    </header>

    <div class="content bg-gray-dark h-32 p-4 bg-opacity-70">
      <div class="flex text-corporateDark-primary">
        <div style="width:{lines[0].$animation}px" class="box" />
        <span class="cursor-sizer opacity-0">|</span>
        {#if cursor}
          <span transition:fade={{ duration: 100 }} class="cursor">|</span>
        {/if}
      </div>
    </div>
  </div>
</div>
