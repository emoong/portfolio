import { DockFileNames } from "components/type/entity/dock";
import { DockFileActionType } from "modules/constants";

interface OpenFileAction {
  type: DockFileActionType.OPEN_FILE,
  payload: DockFileNames
}

interface CloseFileAction {
  type: DockFileActionType.CLOSE_FILE,
  payload: DockFileNames,
}

interface PopFileAction {
  type: DockFileActionType.POP_FILE,
  payload: DockFileNames
}

interface MinimizeFileAction {
  type: DockFileActionType.MINMIZE_FILE,
  payload: DockFileNames
}

interface MaximzieFileAction {
  type: DockFileActionType.MAXIMIZE_FILE,
  payload: DockFileNames
}

type Actions = OpenFileAction | CloseFileAction | PopFileAction | MinimizeFileAction | MaximzieFileAction;

export default Actions;