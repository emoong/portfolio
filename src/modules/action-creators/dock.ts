import { DockFileActionType } from 'modules/constants';
import { DockFileNames } from "components/type/entity/dock";
import { Dispatch } from 'redux';
import Actions from 'modules/actions/dock';

export const openFile = (name: DockFileNames) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: DockFileActionType.OPEN_FILE,
      payload: name,
    })
  }
}

export const closeFile = (name: DockFileNames) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: DockFileActionType.CLOSE_FILE,
      payload: name,
    })
  }
}

export const popFile = (name: DockFileNames) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: DockFileActionType.POP_FILE,
      payload: name,
    })
  }
}

export const minizieFile = (name: DockFileNames) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: DockFileActionType.MINMIZE_FILE,
      payload: name,
    })
  }
}

export const maximizeFile = (name: DockFileNames) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: DockFileActionType.MAXIMIZE_FILE,
      payload: name,
    })
  }
}