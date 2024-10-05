export interface BtnInterface {
  type: "button" | "submit" | "reset";
  click?: () => void;
  text: string;
}
