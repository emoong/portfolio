import Actions from "modules/actions/dock";
import { DockFileActionType } from "modules/constants";
import { initialState } from './initialState/dock';

const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case DockFileActionType.OPEN_FILE: {
      return {
        files: {
          ...state.files,
          [action.payload.name]: {
            ...state.files[action.payload.name],
            open: true,
            uid: [...state.files[action.payload.name].uid, action.payload.uid],
          },
        },
      }
    }
    case DockFileActionType.CLOSE_FILE: {
      const uidArr = [...state.files[action.payload.name].uid].filter(_uid => _uid !== action.payload.uid);
      return {
        files: {
          ...state.files,
          [action.payload.name]: {
            ...state.files[action.payload.name],
            open: uidArr.length > 0 ? true : false,
            uid: uidArr
          },
        },
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;