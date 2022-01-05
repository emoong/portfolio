import { DockFileNames } from 'components/type/entity/dock';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useDrag } from "react-dnd";
import { actionCreators, State } from 'modules';
import { useMemo } from 'react';
import { windowCoordinates, windowSize } from 'components/utils/window';

// style
import { WindowContainer, WindowBody, WindowTitle } from "components/utils/styles";
import WindowSideBar from '../molecules/Finder/WindowSideBar';
import WindowBtns from '../molecules/WindowBtns';
import { WindowSize } from 'components/type/entity/window';
import WindowTopBar from '../molecules/WindowTopBar';

export default function Vscode({ uid }: { uid: string }) {
  const dispatch = useDispatch();
  const { popFile, moveFile } = bindActionCreators(actionCreators, dispatch);
  const { files } = useSelector((state: State) => state.file);

  const isMaximized = files.find(file => file.uid === uid)?.size === WindowSize.MAX;

  const thisCoordinates = useMemo(() => {
    return windowCoordinates(files, uid);
  }, [files])

  const thisSize = useMemo(() => {
    return windowSize(files, uid);
  }, [files])

  const [{ isDragging }, drag] = useDrag(() => ({
    type: DockFileNames.VSCODE,
    item: { uid: uid, moveFile: moveFile },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    })
  }))

  const selectFile = () => {
    popFile({ uid })
  }
  return (
    <WindowContainer onClick={selectFile} ref={drag} thisCoordinates={thisCoordinates ? thisCoordinates : [200, 200]} thisSize={thisSize} >
      <WindowBtns uid={uid} name={DockFileNames.VSCODE} isMaximized={isMaximized} />
      <WindowTopBar uid={uid} name={DockFileNames.VSCODE} />
      <WindowSideBar uid={uid} name={DockFileNames.VSCODE} />
      <WindowBody thisSize={thisSize} >
        body
        awf
        sage
        awg
      </WindowBody>
    </WindowContainer>
  )
}