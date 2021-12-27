import Actions from "modules/actions/dock";
import { DockFileActionType } from "modules/constants";
import { initialState } from './initialState';

const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case DockFileActionType.OPEN_FILE: {
      return {
        files: {
          ...state.files,
          [action.payload]: {
            ...state.files[action.payload],
            open: true,
          },
        },
        zIndex: state.zIndex,
      }
    }
    case DockFileActionType.CLOSE_FILE: {
      return {
        files: {
          ...state.files,
          [action.payload]: {
            ...state.files[action.payload],
            open: false,
          },
        },
        zIndex: state.zIndex,
      }
    }
    case DockFileActionType.POP_FILE: {
      return {
        files: {
          ...state.files,
          [action.payload]: {
            ...state.files[action.payload],
            zIndex: state.zIndex
          },
        },
        zIndex: state.zIndex + 1,
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;