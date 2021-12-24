import { DockFileActionType } from 'modules/constants';
import { DockFileTypes } from "components/type/entity/dock";
import { Dispatch } from 'redux';
import Actions from 'modules/actions/dock';

export const openFile = (name: DockFileTypes) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: DockFileActionType.OPEN_FILE,
      payload: name,
    })
  }
}

export const closeFile = (name: DockFileTypes) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: DockFileActionType.CLOSE_FILE,
      payload: name,
    })
  }
}

export const popFile = (name: DockFileTypes) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: DockFileActionType.POP_FILE,
      payload: name,
    })
  }
}