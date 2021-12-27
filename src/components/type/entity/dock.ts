import { IconParam } from "./icon";

export enum Position {
  LEFT,
  RIGHT,
  BOTTOM,
}

export enum DockFileNames {
  FINDER = "finder",
  ITERM = "iterm",
  NOTES = "notes",
  POSTMAN = "postman",
  VSCODE = "vscode",
  TRASH = "trash",
}

export enum WindowSize {
  MAX = "maximize",
  MIN = "minimize",
  NORMAL = "normal",
}

export interface DockIconParam extends IconParam {
  name: DockFileNames;
  position: Position;
}

export interface DockFile extends IconParam {
  name: DockFileNames;
  open: boolean;
  zIndex: number;
  size: WindowSize;
}