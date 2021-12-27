import { DockFile, DockFileNames, WindowSize } from "components/type/entity/dock";

// assets
import Finder from "assets/finder.png";
import Iterm from "assets/iterm.png";
import Notes from "assets/notes.png";
import Postman from "assets/postman.png";
import Vscode from "assets/vscode.png";
import Trash from "assets/trash.png";

export const initialState: { files: { [key in DockFileNames]: DockFile }, zIndex: number } = {
  files: {
    [DockFileNames.FINDER]: {
      image: Finder,
      name: DockFileNames.FINDER,
      open: false,
      zIndex: -1,
      size: WindowSize.NORMAL,
    },
    [DockFileNames.ITERM]: {
      image: Iterm,
      name: DockFileNames.ITERM,
      open: false,
      zIndex: -1,
      size: WindowSize.NORMAL,
    },
    [DockFileNames.NOTES]: {
      image: Notes,
      name: DockFileNames.NOTES,
      open: false,
      zIndex: -1,
      size: WindowSize.NORMAL,
    },
    [DockFileNames.POSTMAN]: {
      image: Postman,
      name: DockFileNames.POSTMAN,
      open: false,
      zIndex: -1,
      size: WindowSize.NORMAL,
    },
    [DockFileNames.VSCODE]: {
      image: Vscode,
      name: DockFileNames.VSCODE,
      open: false,
      zIndex: -1,
      size: WindowSize.NORMAL,
    },
    [DockFileNames.TRASH]: {
      image: Trash,
      name: DockFileNames.TRASH,
      open: false,
      zIndex: -1,
      size: WindowSize.NORMAL,
    },
  },
  zIndex: 0
}