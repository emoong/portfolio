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

interface PopFileAction {
  type: DockFileActionType.POP_FILE,
  payload: {
    name: DockFileNames,
    uid: string,
  },
}

interface MinimizeFileAction {
  type: DockFileActionType.MINMIZE_FILE,
  payload: {
    name: DockFileNames,
    uid: string,
  },
}

interface MaximzieFileAction {
  type: DockFileActionType.MAXIMIZE_FILE,
  payload: {
    name: DockFileNames,
    uid: string,
  },
}

interface ExitMaximzieFileAction {
  type: DockFileActionType.EXIT_MAXIMIZE_FILE,
  payload: {
    name: DockFileNames,
    uid: string,
  },
}

type Actions = OpenFileAction | CloseFileAction | PopFileAction | MinimizeFileAction | MaximzieFileAction | ExitMaximzieFileAction;

export default Actions;