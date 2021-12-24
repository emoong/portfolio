import { DockIconParam, Position } from "components/type/entity/dock";
import { useState } from "react"
import styled from "styled-components";

export default function DockIcon({ image, name, position }: DockIconParam) {
  const [isSelected, setIsSelected] = useState<boolean>(true);
  const [isHover, setIsHover] = useState<boolean>(false);

  const onMouse = () => {
    setIsHover(true);
  }

  const outMoust = () => {
    setIsHover(false);
  }

  return (
    <Container onMouseOver={onMouse} onMouseOut={outMoust}>
      <SelectedBox>
        {isSelected ? '*' : null}
      </SelectedBox>
      <IconImage src={image} alt={name} />
      {isHover ? (
        <HoverBox position={position}>
          {name}
        </HoverBox>
      ) : (
        null
      )}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  padding: 5px 10px 5px 12px;
  border: 1px solid black;
`

const SelectedBox = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0,-50%);
`

const IconImage = styled.img`
  display: block;
  width: 50px;
  height: 50px;
`

const HoverBox = styled.div`
  position:absolute;
  top: ${({ position }: { position: Position }) => position < 2 ? "50%" : null};
  left: ${({ position }: { position: Position }) => position === 0 ? "85px" : (position < 2 ? null : "50%")};
  right: ${({ position }: { position: Position }) => position === 1 ? "85px" : null};
  bottom: ${({ position }: { position: Position }) => position === 2 ? "70px" : null};
  transform: ${({ position }: { position: Position }) => position < 2 ? "translate(0,-50%)" : "translate(-50%,0)"};
  padding: 15px 25px 15px 25px;
  border-radius: 5px;
  background-color: #aaaa55;
`