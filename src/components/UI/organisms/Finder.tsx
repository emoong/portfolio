import { DockFileNames } from 'components/type/entity/dock';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useDrag, useDragLayer, useDrop } from "react-dnd";
import styled from 'styled-components';
import WindowTopBar from '../molecules/WindowTopBar';
import { actionCreators } from 'modules';
import { useEffect, useState } from 'react';

export default function Finder({ uid }: { uid: string }) {
  const [coordinates, setCoordinates] = useState<[number, number]>([200, 200]);
  const dispatch = useDispatch();
  const { popFile } = bindActionCreators(actionCreators, dispatch);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: DockFileNames.FINDER,
    item: { uid: uid, setCoordinates: setCoordinates },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    })
  }))

  const selectFile = () => {
    popFile({ uid })
  }
  return (
    <Container onClick={selectFile} ref={drag} coordinates={coordinates} >
      <WindowTopBar uid={uid} name={DockFileNames.FINDER} />
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
  top: ${({ coordinates }: { coordinates: [number, number] }) => coordinates[1]}px;
  left: ${({ coordinates }: { coordinates: [number, number] }) => coordinates[0]}px;
  border: 1px solid red;
  background-color: red;
`

const Body = styled.div`
  width: 400px;
  height: 300px;
`