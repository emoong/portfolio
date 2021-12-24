import { Position } from "components/type/entity/dock";

// styled-components
import styled from "styled-components";
import DockIcon from "../atoms/DockIcon";

// assets
import Finder from "assets/finder.png";
import Iterm from "assets/iterm.png";
import Notes from "assets/notes.png";
import Postman from "assets/postman.png";
import Vscode from "assets/vscode.png";
import { IconParam } from "components/type/entity/icon";

export default function Dock({ position }: { position: Position }) {

  const icons: IconParam[] = [
    {
      image: Finder,
      name: "Finder",
    },
    {
      image: Iterm,
      name: "Iterm",
    },
    {
      image: Notes,
      name: "Notes",
    },
    {
      image: Postman,
      name: "Postman",
    },
    {
      image: Vscode,
      name: "Vscode",
    },
  ]

  return (
    <Container position={position} >
      {icons.map((icon, index) => (
        <DockIcon {...icon} position={position} key={index} />
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
  border:1px solid black;
  border-radius: 10px;
  margin: auto;
  display: flex;
  flex-direction: ${({ position }: { position: Position }) => position < 2 ? 'column' : 'row'};
`;