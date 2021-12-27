import { DockFileNames, DockIconParam, Position } from "components/type/entity/dock";
import { IconParam } from "components/type/entity/icon";

// styled-components
import styled from "styled-components";
import DockIcon from "../atoms/DockIcon";

// assets
import Finder from "assets/finder.png";
import Iterm from "assets/iterm.png";
import Notes from "assets/notes.png";
import Postman from "assets/postman.png";
import Vscode from "assets/vscode.png";
import Trash from "assets/trash.png";


export default function Dock({ position }: { position: Position }) {

  const icons: DockIconParam[] = [
    {
      image: Finder,
      name: DockFileNames.FINDER,
      position,
    },
    {
      image: Iterm,
      name: DockFileNames.ITERM,
      position,
    },
    {
      image: Notes,
      name: DockFileNames.NOTES,
      position,
    },
    {
      image: Postman,
      name: DockFileNames.POSTMAN,
      position,
    },
    {
      image: Vscode,
      name: DockFileNames.VSCODE,
      position,
    },
    {
      image: Trash,
      name: DockFileNames.TRASH,
      position,
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
  border-radius: 10px;
  margin: auto;
  display: flex;
  flex-direction: ${({ position }: { position: Position }) => position < 2 ? 'column' : 'row'};
  background-color: rgba(255,255,255,0.5);
`;