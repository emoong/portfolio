import { IconParam } from "./icon";

export enum Position {
  LEFT,
  RIGHT,
  BOTTOM,
}

export enum DockFileTypes {
  FINDER = "finder",
  ITERM = "iterm",
  NOTES = "notes",
  POSTMAN = "postman",
  VSCODE = "vscode",
  TRASH = "trash",
}

export interface DockIconParam extends IconParam {
  name: DockFileTypes;
  position: Position;
}

export interface DockFile extends IconParam {
  name: DockFileTypes;
  open: boolean;
  zIndex: number;
}