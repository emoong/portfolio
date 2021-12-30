import { Position } from "components/type/entity/dock";

// styled-components
import styled from "styled-components";
import DockIcon from "../atoms/DockIcon";

import { useSelector } from "react-redux";
import { State } from "modules";


export default function Dock({ position }: { position: Position }) {

  const { files } = useSelector((state: State) => state.dock);

  return (
    <Container position={position} >
      {Object.values(files).map((file, index) => (
        <DockIcon {...file} position={position} key={index} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: ${({ position }: { position: Position }) => position < 2 ? "50%" : null};
  left: ${({ position }: { position: Position }) => position === 0 ? "10px" : (position < 2 ? null : "50%")};
  right: ${({ position }: { position: Position }) => position === 1 ? "10px" : null};
  bottom: ${({ position }: { position: Position }) => position === 2 ? "10px" : null};
  transform: ${({ position }: { position: Position }) => position < 2 ? "translate(0,-50%)" : "translate(-50%,0)"};
  border-radius: 10px;
  margin: auto;
  display: flex;
  flex-direction: ${({ position }: { position: Position }) => position < 2 ? 'column' : 'row'};
  background-color: rgba(255,255,255,0.5);
`;