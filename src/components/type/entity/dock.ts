import { Component, ReactComponentElement } from "react";
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

export interface DockIconParam extends IconParam {
  name: DockFileNames;
  position: Position;
}

export interface DockFile extends IconParam {
  name: DockFileNames;
  open: boolean;
  uid: string[],
}