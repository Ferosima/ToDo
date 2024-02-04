export type IconsId =
  | "Add_Plus"
  | "Archive"
  | "Calendar"
  | "Check"
  | "Clock"
  | "Edit_Pencil"
  | "Trash_Full"
  | "User";

export type IconsKey =
  | "AddPlus"
  | "Archive"
  | "Calendar"
  | "Check"
  | "Clock"
  | "EditPencil"
  | "TrashFull"
  | "User";

export enum Icons {
  AddPlus = "Add_Plus",
  Archive = "Archive",
  Calendar = "Calendar",
  Check = "Check",
  Clock = "Clock",
  EditPencil = "Edit_Pencil",
  TrashFull = "Trash_Full",
  User = "User",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.AddPlus]: "61697",
  [Icons.Archive]: "61698",
  [Icons.Calendar]: "61699",
  [Icons.Check]: "61700",
  [Icons.Clock]: "61701",
  [Icons.EditPencil]: "61702",
  [Icons.TrashFull]: "61703",
  [Icons.User]: "61704",
};
