<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    setTimeout(() => {
      greet(100);
    }, 1500);
  });

  $: greeting = "";
  $: name = "";
  const intro = "Hi there, I'm José :)";

  function restart() {
    name = "";
    greeting = "";
    charCount = 0;
    setTimeout(() => greet(charCount), 1000);
  }

  let charCount = 0;
  function greet(speed = 50): void {
    if (charCount < 9) {
      greeting += intro[charCount];
      setTimeout(greet, speed);
    } else if (charCount === 9) {
      greeting += intro[charCount];
      setTimeout(() => greet(), 1500);
    } else if (charCount < intro.length) {
      name += intro[charCount];
      setTimeout(greet, speed);
    }

    charCount++;
  }
</script>

<div class="component-conatiner relative">
  <div class="console text-xl rounded w-full sm:w-80 lg:w-96 overflow-hidden">
    <header class="flex flex-row p-1 sm:p-2 gap-2 bg-gray-darkest">
      <span class="flex-auto" />
      <div class="rounded-lg p-1 sm:p-1.5 bg-gray" />
      <div on:click={restart} class="rounded-lg p-1 sm:p-1.5 bg-secondary" />
      <div class="rounded-lg p-1 sm:p-1.5 bg-danger" />
    </header>

    <div
      class="content font-code bg-gray-dark h-full md:h-40 p-4 bg-opacity-70"
    >
      <span id="greeting" class="line">{greeting}</span>
      <span id="name" class="italic text-corporateDark-primary">{name}</span>
      <span class="cursor {greeting.length ? '-ml-4' : ''}">|</span>
    </div>
  </div>
</div>

<style>
  .cursor {
    animation: blink 1000ms infinite;
  }
  @keyframes blink {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
