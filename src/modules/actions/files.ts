import { DockFileNames } from "components/type/entity/dock";
import { FilesActionType } from "modules/constants";

interface OpenFileAction {
  type: FilesActionType.OPEN_FILE,
  payload: { uid: string, name: DockFileNames },
}

interface CloseFileAction {
  type: FilesActionType.CLOSE_FILE,
  payload: { uid: string },
}

interface PopFileAction {
  type: FilesActionType.POP_FILE,
  payload: { uid: string },
}

interface MinimizeFileAction {
  type: FilesActionType.MINMIZE_FILE,
  payload: { uid: string },
}

interface MaximzieFileAction {
  type: FilesActionType.MAXIMIZE_FILE,
  payload: { uid: string },
}

interface ExitMaximzieFileAction {
  type: FilesActionType.EXIT_MAXIMIZE_FILE,
  payload: { uid: string },
}

type Actions = OpenFileAction | CloseFileAction | PopFileAction | MinimizeFileAction | MaximzieFileAction | ExitMaximzieFileAction;

export default Actions;