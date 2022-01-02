import { FilesActionType } from 'modules/constants';
import { DockFileNames } from "components/type/entity/dock";
import { Dispatch } from 'redux';
import Actions from 'modules/actions/files';

export const openFile = ({ uid, name }: { uid: string, name: DockFileNames }) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: FilesActionType.OPEN_FILE,
      payload: {
        uid,
        name,
      },
    })
  }
}

export const closeFile = ({ uid }: { uid: string }) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: FilesActionType.CLOSE_FILE,
      payload: {
        uid,
      },
    })
  }
}

export const popFile = ({ uid }: { uid: string }) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: FilesActionType.POP_FILE,
      payload: {
        uid,
      },
    })
  }
}

export const minizieFile = ({ uid }: { uid: string }) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: FilesActionType.MINMIZE_FILE,
      payload: {
        uid,
      },
    })
  }
}

export const maximizeFile = ({ uid }: { uid: string }) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: FilesActionType.MAXIMIZE_FILE,
      payload: {
        uid,
      },
    })
  }
}

export const exitMaximizeFile = ({ uid }: { uid: string }) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: FilesActionType.EXIT_MAXIMIZE_FILE,
      payload: {
        uid,
      },
    })
  }
}

export const moveFile = ({ uid, x, y }: { uid: string, x: number, y: number }) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: FilesActionType.MOVE_FILE,
      payload: {
        uid,
        x,
        y,
      }
    })
  }
}