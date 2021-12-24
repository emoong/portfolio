import { DockFile, DockFileTypes } from "components/type/entity/dock";

// assets
import Finder from "assets/finder.png";
import Iterm from "assets/iterm.png";
import Notes from "assets/notes.png";
import Postman from "assets/postman.png";
import Vscode from "assets/vscode.png";
import Trash from "assets/trash.png";

export const initialState: DockFile[] = [
  {
    image: Finder,
    name: DockFileTypes.FINDER,
    open: false,
    zIndex: -1
  },
  {
    image: Iterm,
    name: DockFileTypes.ITERM,
    open: false,
    zIndex: -1
  },
  {
    image: Notes,
    name: DockFileTypes.NOTES,
    open: false,
    zIndex: -1
  },
  {
    image: Postman,
    name: DockFileTypes.POSTMAN,
    open: false,
    zIndex: -1
  },
  {
    image: Vscode,
    name: DockFileTypes.VSCODE,
    open: false,
    zIndex: -1
  },
  {
    image: Trash,
    name: DockFileTypes.TRASH,
    open: false,
    zIndex: -1
  },
]