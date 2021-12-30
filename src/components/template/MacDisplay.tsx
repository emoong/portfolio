import { DockFile, Position, DockFileNames } from 'components/type/entity/dock';
import { FileWindow } from 'components/type/entity/window';
import TopBar from 'components/UI/molecules/TopBar';
import Dock from 'components/UI/organisms/Dock';
import { State } from 'modules';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function MacDisplay() {
  const { files } = useSelector((state: State) => state.file);

  return (
    <>
      {document.fullscreenElement
        ? (
          <div style={{ backgroundColor: "cadetblue", width: "100vw", height: "100vh" }} id='mac-display' >
            <TopBar />
            <Dock position={Position.LEFT} />
            {files.map((file) => (
              file.component
            ))}
          </div>
        )
        : (null)
      }
    </>
  )
}