export interface ProjectModel {
  mainTool:
  | "typescript"
  | "javascript"
  | "python"
  | "angular"
  | "svelte"
  | "nodejs"
  | "sapper";
  slug: string;
  tags: string[];
  title: string;
  description: string;
  html?: any;
}
