import { DockFile, Position, DockFileNames } from 'components/type/entity/dock';
import { FileWindow } from 'components/type/entity/window';
import Dock from 'components/UI/organisms/Dock';
import Finder from 'components/UI/organisms/Finder';
import { State } from 'modules';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function MacDisplay() {
  const [openedFiles, setOpenedFiles] = useState<FileWindow[]>([]);
  const { files } = useSelector((state: State) => state.file);

  useEffect(() => {
    console.log('useEffect');
    setOpenedFiles(files);
  }, [files])

  return (
    <div>
      <Dock position={Position.LEFT} />
      {openedFiles.map((file, index) => (
        <Finder uid={file.uid} key={index} />
      ))}
    </div>
  )
}
