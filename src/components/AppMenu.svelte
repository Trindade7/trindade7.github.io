<script>
  import ButtonIcon from "./ButtonIcon.svelte";
  import { fly } from "svelte/transition";

  export let segment;

  $: active = false;
  function toggle() {
    setTimeout(() => {
      // #2 TimeOut transition minimize flicker
      active = !active;
    }, 110);
  }
</script>

<nav
  class="z-50 fixed flex flex-col justify-center overflow-hidden
   {active
    ? 'min-h-screen min-w-full bg-corporateDark-light dark:bg-corporateDark-darkest'
    : 'top-auto min-h-0 min-w-0'} bottom-0  right-0 p-4 "
>
  <span class="flex-auto" />

  {#if active}
    <ul
      in:fly={{ duration: 300, delay: 100, y: -10 }}
      class="font-serif text-6xl "
    >
      <li class="py-3">
        <a
          on:click={toggle}
          aria-current={segment === undefined ? "page" : undefined}
          href="."
        >
          {#if segment === undefined}
            <span class="text-corporateDark-primary">/</span>
          {/if} home
        </a>
      </li>
      <li class="py-3">
        <a
          on:click={toggle}
          aria-current={segment === "blog" ? "page" : undefined}
          href="blog"
          >{#if segment === "blog"}
            <span class="text-corporateDark-primary">/</span>
          {/if} blog</a
        >
      </li>
      <li class="py-3">
        <a
          on:click={toggle}
          aria-current={segment === "projects" ? "page" : undefined}
          href="projects"
          >{#if segment === "projects"}
            <span class="text-corporateDark-primary">/</span>
          {/if} projects</a
        >
      </li>
      <li class="py-3">
        <a
          on:click={toggle}
          aria-current={segment === "about" ? "page" : undefined}
          href="about"
          >{#if segment === "about"}
            <span class="text-corporateDark-primary">/</span>
          {/if} about</a
        >
      </li>
    </ul>
  {/if}

  <span class="flex-auto" />

  <div class="flex justify-end">
    <div on:click={toggle}>
      <ButtonIcon
        elevated={true}
        ariaLabel={active ? "open menu" : "close menu"}
      >
        {#if active}
          <svg
            class="w-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        {:else}
          <svg
            class="w-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        {/if}
      </ButtonIcon>
    </div>
  </div>
</nav>
