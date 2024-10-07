export interface ToolsInterface {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  state?: string;
  setter?: (state: string) => void;
  HandleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
