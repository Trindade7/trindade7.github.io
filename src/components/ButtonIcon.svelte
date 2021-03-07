<script lang="ts">
	export let ariaLabel: string;
	export let elevated = false;
</script>

<button
	aria-label={ariaLabel}
	class="btn rounded-full text-white p-2 ml-4 outline-none focus:border-primary
	 flex justify-items-center items-center
		transition duration-200 ease-in-out
		fill-current
		{elevated
		? 'shadow ring-1 ring-opacity-20 ring-corporateDark-darkest'
		: ''}
		text-corporateDark-light
		bg-corporateDark-dark
		focus:text-corporateDark-light
		focus:bg-corporateDark-primary
		hover:text-corporateDark-light
		hover:bg-corporateDark-primary

		focus:outline-none
		focus:ring
		"
>
	<slot />
</button>
