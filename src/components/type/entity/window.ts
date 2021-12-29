import { DockFileNames } from "./dock";

export type corrdinates = [number, number];

export enum Position {
  LEFT,
  RIGHT,
  BOTTOM,
}

export enum WindowSize {
  MAX = "maximize",
  MIN = "minimize",
  NORMAL = "normal",
  NONE = "none",
}

export interface FileWindow {
  name: DockFileNames;
  uid: string;
  size: WindowSize;
  coordinates: corrdinates;
}