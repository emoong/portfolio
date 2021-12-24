import { DockFileTypes } from "components/type/entity/dock";
import { DockFileActionType } from "modules/constants";

interface OpenFileAction {
  type: DockFileActionType.OPEN_FILE,
  payload: DockFileTypes
}

interface CloseFileAction {
  type: DockFileActionType.CLOSE_FILE,
  payload: DockFileTypes,
}

interface PopFileAction {
  type: DockFileActionType.POP_FILE,
  payload: DockFileTypes
}

type Actions = OpenFileAction | CloseFileAction | PopFileAction;

export default Actions;