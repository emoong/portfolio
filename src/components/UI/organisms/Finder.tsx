import { DockFileNames } from 'components/type/entity/dock';
import styled from 'styled-components';
import WindowTopBar from '../molecules/WindowTopBar';

export default function Finder({ uid }: { uid: string }) {
  return (
    <Container>
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
  top: 200px;
  left: 600px;
  border: 1px solid red;
`

const Body = styled.div`
  width: 400px;
  height: 300px;
`