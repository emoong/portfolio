import React, { ReactComponentElement } from 'react'
import styled from 'styled-components'
import { useDrop } from "react-dnd";
import { DockFileNames } from 'components/type/entity/dock';

// assets
import wallPaper from "assets/wallpaper.jpeg";

export default function Playground({ children }: { children: React.ReactNode }) {
  const [{ }, drop] = useDrop(() => ({
    accept: Object.values(DockFileNames),
    drop: (item: any, monitor) => {
      const uid = item.uid;
      const x = monitor.getSourceClientOffset()?.x;
      const y = monitor.getSourceClientOffset()?.y;
      item.moveFile({ uid, x, y });
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
  background-image: url(${wallPaper});
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
`;