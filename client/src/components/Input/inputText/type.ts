export interface ToolsInterface {
  type: string;
  label: string;
  placeholder: string;
  state?: string;
  setter: (state: string) => void;
}
