<script lang="ts">
  import { onMount } from "svelte";
  import { cubicInOut } from "svelte/easing";
  import { to_number } from "svelte/internal";

  export let tDuration = 5000;
  export let items: {
    title: string;
    imageUrl?: string;
    imageAlt?: string;
    description?: string;
  }[] = [];

  let active: number;
  let activeTimeout = 0;

  function iterate(itemList = items, duration = tDuration) {
    activeTimeout = setTimeout(() => {
      if (active < itemList.length - 1) {
        active++;
      } else {
        active = 0;
      }
      iterate();
    }, duration);
  }

  function selectItem(index: number) {
    window.clearTimeout(activeTimeout);
    active = index;
    iterate();
  }

  /**
   * Custom height resize transition
   */
  function resizeHeightT(node, params) {
    const currentHeight = to_number(
      getComputedStyle(node).height.replace("px", "")
    );

    return {
      delay: params.delay || 0,
      duration: params.duration || 300,
      easing: params.easing || cubicInOut,
      css: (t, u) => `height: ${currentHeight * t}px`,
    };
  }

  onMount(() =>
    setTimeout(() => {
      active = 0;
      iterate();
    }, 200)
  );
  // TODO: PAUSE JS WHEN OUT OF VIEW
</script>

<div class="accordeon flex flex-col">
  {#each items as item, index}
    <section
      class="element {index === active
        ? 'active mb-4'
        : ''}
      relative pl-4 mt-1 pb-0.5 "
    >
      <h3 class="pb-2" on:click={() => selectItem(index)}>
        <span
          class="font-bold uppercase cursor-pointer hover:text-corporateDark-primary hover:underline transition-colors"
        >
          {item.title}
        </span>
      </h3>
      {#if active === index}
        <div
          in:resizeHeightT={{ duration: 300 }}
          out:resizeHeightT={{ duration: 300 }}
          class="content h-56 overflow-hidden"
        >
          {#if item.imageUrl}
            <img src={item.imageUrl} alt={item.imageAlt ?? item.title} />
          {/if}
          <p class="h-12 overflow-ellipsis">{item.description ?? ""}</p>
        </div>
      {/if}
    </section>
  {/each}
</div>

<style>
  /* TODO: fix coulors */
  .element:before,
  .element:after {
    content: "";
    position: absolute;
    top: 0;
    background: transparent;
    transition-delay: 300ms;
  }

  .element:before {
    height: 100%;
    width: 1px;
    left: 1.5px;
    transition: color 100ms;
  }
  .element.active:before {
    background: gray;
  }

  .element:after {
    left: 0;
    height: 0%;
    width: 4px;
    border-radius: 2px;
    transition: height 4700ms;
    transition-timing-function: linear;
  }
  .element.active:after {
    background: orangered;
    height: 100%;
  }
</style>
