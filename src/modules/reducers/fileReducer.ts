import { FileWindow, WindowSize } from "components/type/entity/window";
import Actions from "modules/actions/files";
import { FilesActionType } from "modules/constants";
import { initialState } from "./initialState/file";

const reducer = (state = initialState, action: Actions): { files: FileWindow[] } => {
  switch (action.type) {
    case FilesActionType.OPEN_FILE: {
      return {
        files: [
          {
            name: action.payload.name,
            uid: action.payload.uid,
            size: WindowSize.NORMAL,
            coordinates: [50, 50],
          },
          ...state.files,
        ]
      }
    }
    case FilesActionType.CLOSE_FILE: {
      console.log(state)
      return {
        files: [...state.files].filter(file => file.uid !== action.payload.uid)
      }
    }
    case FilesActionType.POP_FILE: {
      const selectedFile = [...state.files].find((file) => file.uid === action.payload.uid);
      const restFiles = [...state.files].filter((file) => file.uid !== action.payload.uid);
      return {
        files: selectedFile ? [selectedFile, ...restFiles] : restFiles
      }
    }
    case FilesActionType.MINMIZE_FILE: {
      const changedFiles = [...state.files].map((file) => {
        if (file.uid === action.payload.uid) {
          return {
            ...file,
            size: WindowSize.MIN
          };
        }
        return file;
      })
      return {
        files: changedFiles
      }
    }
    case FilesActionType.MAXIMIZE_FILE: {
      const changedFiles = [...state.files].map((file) => {
        if (file.uid === action.payload.uid) {
          return {
            ...file,
            size: WindowSize.MAX
          };
        }
        return file;
      })
      return {
        files: changedFiles
      }
    }
    case FilesActionType.EXIT_MAXIMIZE_FILE: {
      const changedFiles = [...state.files].map((file) => {
        if (file.uid === action.payload.uid) {
          return {
            ...file,
            size: WindowSize.NORMAL
          };
        }
        return file;
      })
      return {
        files: changedFiles
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;