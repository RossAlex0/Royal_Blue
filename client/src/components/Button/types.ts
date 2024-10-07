export interface BtnInterface {
  type: "button" | "submit" | "reset";
  click?: (event: any) => void;
  text: string;
}
