export interface Interface {
  type: "button" | "submit" | "reset";
  click?: () => void;
  text: string;
}
