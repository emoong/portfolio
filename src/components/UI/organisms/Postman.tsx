import { DockFileNames } from 'components/type/entity/dock';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useDrag } from "react-dnd";
import styled from 'styled-components';
import WindowTopBar from '../molecules/WindowTopBar';
import { actionCreators, State } from 'modules';
import { useMemo } from 'react';
import { coordinates } from 'components/type/entity/window';
import { windowCoordinates, windowSize } from 'components/utils/window';

// style
import { WindowContainer, WindowBody } from "components/utils/styles";

export default function Postman({ uid }: { uid: string }) {
  const dispatch = useDispatch();
  const { popFile, moveFile } = bindActionCreators(actionCreators, dispatch);
  const { files } = useSelector((state: State) => state.file);

  const thisCoordinates = useMemo(() => {
    return windowCoordinates(files, uid);
  }, [files])

  const thisSize = useMemo(() => {
    return windowSize(files, uid);
  }, [files])

  const [{ isDragging }, drag] = useDrag(() => ({
    type: DockFileNames.POSTMAN,
    item: { uid: uid, moveFile: moveFile },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    })
  }))

  const selectFile = () => {
    popFile({ uid })
  }
  return (
    <WindowContainer onClick={selectFile} ref={drag} thisCoordinates={thisCoordinates ? thisCoordinates : [200, 200]} thisSize={thisSize}>
      <WindowTopBar uid={uid} name={DockFileNames.POSTMAN} />
      <WindowBody thisSize={thisSize}>
        body
        awf
        sage
        awg
      </WindowBody>
    </WindowContainer>
  )
}