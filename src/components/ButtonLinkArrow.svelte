<script>
  export const link = "";
</script>

<a
  href={link}
  class="
  flex
  flex-row
  gap-4
  pr-1
  hover:translate-x-10
hover:text-orangeDark-primary
focus:text-orangeDark-primary
  focus:gap-8
  focus:pr-0
  "
>
  <strong>
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
  </strong>
</a>
<!--
<a href="#projects">
  <strong class="inline">View all </strong>
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
</a> -->
