import { IconParam } from "./icon";

export enum Position {
  LEFT,
  RIGHT,
  BOTTOM,
}

export interface DockIconParam extends IconParam {
  position: Position;
}