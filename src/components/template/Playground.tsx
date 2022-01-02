import React, { ReactComponentElement } from 'react'
import styled from 'styled-components'
import { useDrop } from "react-dnd";
import { DockFileNames } from 'components/type/entity/dock';

export default function Playground({ children }: { children: React.ReactNode }) {
  const [{ }, drop] = useDrop(() => ({
    accept: DockFileNames.FINDER,
    drop: (item: any, monitor) => {
      const x = monitor.getSourceClientOffset()?.x;
      const y = monitor.getSourceClientOffset()?.y;
      item.setCoordinates([x, y]);
    }
  }))

  return (
    <Container ref={drop}>
      {children}
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;