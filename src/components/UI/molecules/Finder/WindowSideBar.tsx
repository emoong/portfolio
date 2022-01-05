import styled from "styled-components";
import { DockFileNames } from "components/type/entity/dock";

export default function WindowSideBar({ uid, name }: { uid: string, name: DockFileNames }) {

  return (
    <Container>
      something on side
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  border: 1px solid grey;
`