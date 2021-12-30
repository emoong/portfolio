import { DockFile, Position, DockFileNames } from 'components/type/entity/dock';
import { FileWindow } from 'components/type/entity/window';
import Dock from 'components/UI/organisms/Dock';
import Finder from 'components/UI/organisms/Finder';
import Iterm from 'components/UI/organisms/Iterm';
import Notes from 'components/UI/organisms/Notes';
import Postman from 'components/UI/organisms/Postman';
import Trash from 'components/UI/organisms/Trash';
import Vscode from 'components/UI/organisms/Vscode';
import { State } from 'modules';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function MacDisplay() {
  const [openedFiles, setOpenedFiles] = useState<FileWindow[]>([]);
  const { files } = useSelector((state: State) => state.file);

  useEffect(() => {
    setOpenedFiles(files);
  }, [files])

  return (
    <div>
      <Dock position={Position.LEFT} />
      {openedFiles.map((file) => (
        file.component
      ))}
    </div>
  )
}

// const fileRouter = ({ name, uid, index }: { name: DockFileNames, uid: string, index: number }) => {
//   switch (name) {
//     case DockFileNames.FINDER: {
//       return <Finder uid={uid} key={index} zIndex={index} />
//     }
//     case DockFileNames.ITERM: {
//       return <Iterm uid={uid} key={index} zIndex={index} />
//     }
//     case DockFileNames.NOTES: {
//       return <Notes uid={uid} key={index} zIndex={index} />
//     }
//     case DockFileNames.POSTMAN: {
//       return <Postman uid={uid} key={index} zIndex={index} />
//     }
//     case DockFileNames.TRASH: {
//       return <Trash uid={uid} key={index} zIndex={index} />
//     }
//     case DockFileNames.VSCODE: {
//       return <Vscode uid={uid} key={index} zIndex={index} />
//     }
//     default: {
//       return null;
//     }
//   }
// }