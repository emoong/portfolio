import { DockFile, DockFileNames } from "components/type/entity/dock";

// assets
import Finder from "assets/finder.png";
import Iterm from "assets/iterm.png";
import Notes from "assets/notes.png";
import Postman from "assets/postman.png";
import Vscode from "assets/vscode.png";
import Trash from "assets/trash.png";

export const initialState: { files: { [key in DockFileNames]: DockFile } } = {
  files: {
    [DockFileNames.FINDER]: {
      image: Finder,
      name: DockFileNames.FINDER,
      open: false,
      uid: [],
    },
    [DockFileNames.ITERM]: {
      image: Iterm,
      name: DockFileNames.ITERM,
      open: false,
      uid: [],
    },
    [DockFileNames.NOTES]: {
      image: Notes,
      name: DockFileNames.NOTES,
      open: false,
      uid: [],
    },
    [DockFileNames.POSTMAN]: {
      image: Postman,
      name: DockFileNames.POSTMAN,
      open: false,
      uid: [],
    },
    [DockFileNames.VSCODE]: {
      image: Vscode,
      name: DockFileNames.VSCODE,
      open: false,
      uid: [],
    },
    [DockFileNames.TRASH]: {
      image: Trash,
      name: DockFileNames.TRASH,
      open: false,
      uid: [],
    },
  },
}