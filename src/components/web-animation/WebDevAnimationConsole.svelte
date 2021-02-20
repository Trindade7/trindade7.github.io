<script lang="ts">
  import { onMount } from "svelte";

  import { fade } from "svelte/transition";

  let cursor = true;
  let greetingAndNameSpaceFix = false;

  function animateCursor() {
    cursor = !cursor;
  }

  onMount(() => {
    setInterval(() => animateCursor(), 500);

    setTimeout(() => {
      greet();
    }, 1500);
  });

  $: greeting = "";
  $: name = " ";
  const intro = "Hi there, I'm José :)";

  function greet(): void {
    for (let i = 0; i < intro.length; i++) {
      if (i <= 9) {
        setTimeout(() => (greeting += intro[i]), i * 200);
      } else {
        setTimeout(() => {
          name += intro[i];
          greetingAndNameSpaceFix = true; //TODO: better way worth the time?
        }, (i + 5) * 200);
      }
    }
  }

  let consoleInput: string[] = [];
</script>

<div class="component-conatiner relative">
  <div class="console text-xl rounded w-full sm:w-64 lg:w-96 overflow-hidden">
    <header class="flex flex-row p-1 sm:p-2 gap-2 bg-gray-darkest">
      <span class="flex-auto" />
      <div class="rounded-lg p-1 sm:p-2 bg-gray" />
      <div class="rounded-lg p-1 sm:p-2 bg-secondary" />
      <div class="rounded-lg p-1 sm:p-2 bg-danger" />
    </header>

    <div class="content font-serif bg-gray-dark h-16 md:h-40 p-4 bg-opacity-70">
      <div class="flex flex-row flex-wrap ">
        <span class="line">{greeting}</span>
        {#if greetingAndNameSpaceFix}
          <span class="opacity-0">|</span>
        {/if}
        <span class="italic text-corporateDark-primary"> {name}</span>
        {#if cursor}
          <span transition:fade={{ duration: 100 }} class="cursor -ml-1">|</span
          >
        {/if}
        <span class="opacity-0">|</span>
      </div>
    </div>
  </div>
</div>
