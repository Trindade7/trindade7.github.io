<script lang="ts">
  import ButtonIcon from "./ButtonIcon.svelte";

  export let segment: string;
</script>

<nav
  class="
bottom-bar
bg-corporateDark-light
dark:bg-corporateDark-darkest
shadow
p-2
pr-4
flex
justify-items-center
items-center
gap-2
fixed
bottom-0
w-full
sm:hidden
"
>
  <span class="flex-auto" />
  <ButtonIcon>
    <a
      class="text-corporateDark-light fill-current"
      rel="prefetch"
      aria-current={segment === "about" ? "page" : undefined}
      href="about"
    >
      <svg
        class="w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        ><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g
          ><g
            ><path
              d="M19,3h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5 C21,3.9,20.1,3,19,3z M12,2.75c0.41,0,0.75,0.34,0.75,0.75c0,0.41-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75 C11.25,3.09,11.59,2.75,12,2.75z M13,17H8c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h5c0.55,0,1,0.45,1,1v0C14,16.55,13.55,17,13,17 z M16,13H8c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h8c0.55,0,1,0.45,1,1v0C17,12.55,16.55,13,16,13z M16,9H8C7.45,9,7,8.55,7,8v0 c0-0.55,0.45-1,1-1h8c0.55,0,1,0.45,1,1v0C17,8.55,16.55,9,16,9z"
            /></g
          ></g
        ></svg
      ></a
    >
  </ButtonIcon>

  <ButtonIcon>
    <span class="px-2">MORE COMING</span>
    <!--TODO: CREATE
     <a
      class="text-corporateDark-light fill-current"
      rel="prefetch"
      aria-current={segment === "404" ? "page" : undefined}
      href="404"
    >
      <svg
        class="  w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <path
            d="M12,2C6.49,2,2,6.49,2,12s4.49,10,10,10c1.38,0,2.5-1.12,2.5-2.5c0-0.61-0.23-1.2-0.64-1.67c-0.08-0.1-0.13-0.21-0.13-0.33 c0-0.28,0.22-0.5,0.5-0.5H16c3.31,0,6-2.69,6-6C22,6.04,17.51,2,12,2z M17.5,13c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5 s1.5,0.67,1.5,1.5C19,12.33,18.33,13,17.5,13z M14.5,9C13.67,9,13,8.33,13,7.5C13,6.67,13.67,6,14.5,6S16,6.67,16,7.5 C16,8.33,15.33,9,14.5,9z M5,11.5C5,10.67,5.67,10,6.5,10S8,10.67,8,11.5C8,12.33,7.33,13,6.5,13S5,12.33,5,11.5z M11,7.5 C11,8.33,10.33,9,9.5,9S8,8.33,8,7.5C8,6.67,8.67,6,9.5,6S11,6.67,11,7.5z"
          />
        </g>
      </svg>
    </a> -->
  </ButtonIcon>

  <ButtonIcon>
    <a
      class="text-corporateDark-light fill-current"
      rel="prefetch"
      aria-current={segment === "blog" ? "page" : undefined}
      href="blog"
    >
      <svg
        class="w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="18px"
        height="18px"
        ><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g
          ><path
            d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18h-7V6h7V18z M14.75,8.5h3.5 C18.66,8.5,19,8.84,19,9.25v0C19,9.66,18.66,10,18.25,10h-3.5C14.34,10,14,9.66,14,9.25v0C14,8.84,14.34,8.5,14.75,8.5z M14.75,11 h3.5c0.41,0,0.75,0.34,0.75,0.75v0c0,0.41-0.34,0.75-0.75,0.75h-3.5c-0.41,0-0.75-0.34-0.75-0.75v0C14,11.34,14.34,11,14.75,11z M14.75,13.5h3.5c0.41,0,0.75,0.34,0.75,0.75v0c0,0.41-0.34,0.75-0.75,0.75h-3.5C14.34,15,14,14.66,14,14.25v0 C14,13.84,14.34,13.5,14.75,13.5z"
          /></g
        ></svg
      >
    </a>
  </ButtonIcon>
  <span class="flex-auto" />
</nav>
