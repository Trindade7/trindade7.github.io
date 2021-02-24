<script type="ts" context="module">
  export interface Project {
    mainTool:
      | "typescript"
      | "javascript"
      | "python"
      | "angular"
      | "svelte"
      | "nodejs"
      | "sapper";
    tools: string[];
    name: string;
    description: string;
  }
</script>
