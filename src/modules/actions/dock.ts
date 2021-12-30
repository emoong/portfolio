import { DockFileNames } from "components/type/entity/dock";
import { DockFileActionType } from "modules/constants";

interface OpenFileAction {
  type: DockFileActionType.OPEN_FILE,
  payload: {
    name: DockFileNames,
    uid: string,
  },
}

interface CloseFileAction {
  type: DockFileActionType.CLOSE_FILE,
  payload: {
    name: DockFileNames,
    uid: string,
  },
}

type Actions = OpenFileAction | CloseFileAction;

export default Actions;