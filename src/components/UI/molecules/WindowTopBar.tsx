import styled from "styled-components";
import { DockFileNames } from "components/type/entity/dock";


export default function WindowTopBar({ uid, name }: { uid: string, name: DockFileNames }) {

  return (
    <Container>
      <TitleBar>{uid}</TitleBar>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  border: 1px solid grey;
`

const TitleBar = styled.div`

`