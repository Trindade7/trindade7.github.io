<script>
  export const url = "";
</script>

<strong>
  <a
    href={url}
    class="
  flex
  flex-row
  gap-4
  pr-1
transition-all
hover:pr-0
hover:gap-5
  hover:translate-x-10
hover:text-corporateDark-primary
focus:text-corporateDark-primary
  focus:gap-5
  focus:pr-0

  "
  >
    <slot>Goto</slot>
    <svg
      class="w-6 inline -mt-1"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </a>
</strong>
