import { useSelector } from 'react-redux';
import { State } from "modules";
import styled from "styled-components";
import { DockFileNames } from "components/type/entity/dock";
import { WindowSize } from "components/type/entity/window";
import WindowBtns from '../WindowBtns';

export default function WindowSideBar({ uid, name }: { uid: string, name: DockFileNames }) {
  const { files } = useSelector((state: State) => state.file);
  const isMaximized = files.find(file => file.uid === uid)?.size === WindowSize.MAX;

  return (
    <Container>
      <WindowBtns uid={uid} name={name} isMaximized={isMaximized} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 300px;
  height: 100%;
  border: 1px solid grey;
`