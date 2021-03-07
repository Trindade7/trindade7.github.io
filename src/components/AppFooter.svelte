<script>
  import ButtonIconGit from "./ButtonIconGit.svelte";
  import ButtonIconTwitter from "./ButtonIconTwitter.svelte";
</script>

<!-- TODO:MOVE TO MENU ON MOBILE? -->
<footer
  class="flex flex-row flex-wrap justify-items-center gap-2 md:gap-4 px-4 pt-8
  pb-16 md:p-8
  "
>
  <div class="footer-item">
    <strong>&copy; 2021</strong>
    <br />
    <a
      class="underline hover:text-corporateDark-primary"
      href="https://trindade7.github.io/about">José Trindade</a
    >
  </div>

  <span class="flex-auto" />
  <div class="flex flex-row gap-4 items-center">
    <ButtonIconGit />
    <ButtonIconTwitter />
  </div>
</footer>
