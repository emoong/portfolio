import { DockFileNames } from "components/type/entity/dock";
import { FileWindow, WindowSize } from "components/type/entity/window";

export const initialState: { files: FileWindow[] } = {
  files: [
    {
      name: DockFileNames.FINDER,
      uid: "default",
      component: null,
      coordinates: null,
      size: WindowSize.MAX,
    }
  ],
}