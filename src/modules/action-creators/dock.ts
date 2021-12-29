import { DockFileActionType } from 'modules/constants';
import { DockFileNames } from "components/type/entity/dock";
import { Dispatch } from 'redux';
import Actions from 'modules/actions/dock';

export const openDockFile = ({ name, uid }: { name: DockFileNames, uid: string }) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: DockFileActionType.OPEN_FILE,
      payload: {
        name,
        uid,
      },
    })
  }
}

export const closeDockFile = ({ name, uid }: { name: DockFileNames, uid: string }) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: DockFileActionType.CLOSE_FILE,
      payload: {
        name,
        uid,
      },
    })
  }
}