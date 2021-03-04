export interface ProjectModel {
  mainTool:
  | "typescript"
  | "javascript"
  | "python"
  | "angular"
  | "svelte"
  | "nodejs"
  | "sapper";
  tags: string[];
  title: string;
  description: string;
  slug?: string;
  html?: any;
}
