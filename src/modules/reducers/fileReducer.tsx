import { FileWindow, WindowSize } from "components/type/entity/window";
import Actions from "modules/actions/files";
import { FilesActionType } from "modules/constants";
import { initialState } from "./initialState/file";

// components
import Dock from 'components/UI/organisms/Dock';
import Finder from 'components/UI/organisms/Finder';
import Iterm from 'components/UI/organisms/Iterm';
import Notes from 'components/UI/organisms/Notes';
import Postman from 'components/UI/organisms/Postman';
import Trash from 'components/UI/organisms/Trash';
import Vscode from 'components/UI/organisms/Vscode';

import { DockFileNames } from "components/type/entity/dock";

const reducer = (state = initialState, action: Actions): { files: FileWindow[] } => {
  switch (action.type) {
    case FilesActionType.OPEN_FILE: {
      return {
        files: [
          {
            name: action.payload.name,
            uid: action.payload.uid,
            component: fileRouter({ name: action.payload.name, uid: action.payload.uid })
          },
          ...state.files,
        ]
      }
    }
    case FilesActionType.CLOSE_FILE: {
      return {
        files: [...state.files].filter(file => file.uid !== action.payload.uid)
      }
    }
    case FilesActionType.POP_FILE: {
      const selectedFile = [...state.files].find((file) => file.uid === action.payload.uid);
      const restFiles = [...state.files].filter((file) => file.uid !== action.payload.uid);
      return {
        files: selectedFile ? [...restFiles, selectedFile] : restFiles
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

const fileRouter = ({ name, uid }: { name: DockFileNames, uid: string }) => {
  switch (name) {
    case DockFileNames.FINDER: {
      return <Finder uid={uid} />
    }
    case DockFileNames.ITERM: {
      return <Iterm uid={uid} />
    }
    case DockFileNames.NOTES: {
      return <Notes uid={uid} />
    }
    case DockFileNames.POSTMAN: {
      return <Postman uid={uid} />
    }
    case DockFileNames.TRASH: {
      return <Trash uid={uid} />
    }
    case DockFileNames.VSCODE: {
      return <Vscode uid={uid} />
    }
    default: {
      return null;
    }
  }
}