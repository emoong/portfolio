import { DockFileNames } from 'components/type/entity/dock';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useDrag } from "react-dnd";
import styled from 'styled-components';
import WindowTopBar from '../molecules/WindowTopBar';
import { actionCreators, State } from 'modules';
import { useMemo } from 'react';
import { coordinates } from 'components/type/entity/window';

export default function Iterm({ uid }: { uid: string }) {
  const dispatch = useDispatch();
  const { popFile, moveFile } = bindActionCreators(actionCreators, dispatch);
  const { files } = useSelector((state: State) => state.file);

  const thisCoordinates = useMemo(() => {
    const thisComponent = files.find(file => file.uid === uid);
    if (thisComponent) {
      return thisComponent.coordinates;
    }
    return [200, 200];
  }, [files])

  const [{ isDragging }, drag] = useDrag(() => ({
    type: DockFileNames.ITERM,
    item: { uid: uid, moveFile: moveFile },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    })
  }))

  const selectFile = () => {
    popFile({ uid })
  }
  return (
    <Container onClick={selectFile} ref={drag} thisCoordinates={thisCoordinates ? thisCoordinates : [200, 200]} >
      <WindowTopBar uid={uid} name={DockFileNames.ITERM} />
      <Body>
        body
        awf
        sage
        awg
      </Body>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: ${({ thisCoordinates }: { thisCoordinates: coordinates }) => thisCoordinates[1]}px;
  left: ${({ thisCoordinates }: { thisCoordinates: coordinates }) => thisCoordinates[0]}px;
  border: 1px solid red;
  background-color: red;
`

const Body = styled.div`
  width: 400px;
  height: 300px;
`