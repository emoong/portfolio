import { DockFileNames } from "components/type/entity/dock";
import { FileWindow } from "components/type/entity/window";

export const initialState: { files: FileWindow[] } = {
  files: [
    {
      name: DockFileNames.FINDER,
      uid: "default",
      component: null,
    }
  ],
}