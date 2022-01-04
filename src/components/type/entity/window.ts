import React from "react";
import { DockFileNames } from "./dock";

export type coordinates = number[];

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
  component: JSX.Element | null;
  coordinates: coordinates | null;
  size: WindowSize;
}