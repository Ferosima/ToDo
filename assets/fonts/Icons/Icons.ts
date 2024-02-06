export type IconsId =
  | "Calendar"
  | "Check"
  | "CheckFill"
  | "Clock"
  | "Close"
  | "CloseFill"
  | "Editsvg"
  | "Inbox"
  | "Plus"
  | "PlusFill"
  | "Trash"
  | "User";

export type IconsKey =
  | "Calendar"
  | "Check"
  | "CheckFill"
  | "Clock"
  | "Close"
  | "CloseFill"
  | "Editsvg"
  | "Inbox"
  | "Plus"
  | "PlusFill"
  | "Trash"
  | "User";

export enum Icons {
  Calendar = "Calendar",
  Check = "Check",
  CheckFill = "CheckFill",
  Clock = "Clock",
  Close = "Close",
  CloseFill = "CloseFill",
  Editsvg = "Editsvg",
  Inbox = "Inbox",
  Plus = "Plus",
  PlusFill = "PlusFill",
  Trash = "Trash",
  User = "User",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Calendar]: "61697",
  [Icons.Check]: "61698",
  [Icons.CheckFill]: "61699",
  [Icons.Clock]: "61700",
  [Icons.Close]: "61701",
  [Icons.CloseFill]: "61702",
  [Icons.Editsvg]: "61703",
  [Icons.Inbox]: "61704",
  [Icons.Plus]: "61705",
  [Icons.PlusFill]: "61706",
  [Icons.Trash]: "61707",
  [Icons.User]: "61708",
};
