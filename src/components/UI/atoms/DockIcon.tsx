import { DockFileNames, DockIconParam, Position } from "components/type/entity/dock";
import { actionCreators, State } from "modules";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { convertDockIconSize } from '../../../utils/icon';

export default function DockIcon({ image, name, position }: DockIconParam) {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { openFile, closeFile, popFile } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state: State) => state.dock)

  const onMouse = () => {
    setIsHover(true);
  }

  const outMoust = () => {
    setIsHover(false);
  }

  const onClickDockIcon = () => {
    openFile(name);
    popFile(name);
  }

  useEffect(() => {
    const thisState = state.files[name];
    setIsOpened(thisState.open);
  }, [state.files[name].open])

  const iconSize = convertDockIconSize(name);
  // console.log(state.files[name].name, state.files[name].open)
  return (
    <Container onMouseOver={onMouse} onMouseOut={outMoust} onClick={onClickDockIcon} >
      <SelectedBox>
        {isOpened ? '*' : null}
      </SelectedBox>
      <IconImage src={image} alt={name} iconSize={iconSize} />
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
  justify-content: center;
  align-items: center;
`

const SelectedBox = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0,-50%);
`

const IconImage = styled.img`
  display: block;
  width: ${({ iconSize }: { iconSize: number[] }) => iconSize[0]}px;
  height: ${({ iconSize }: { iconSize: number[] }) => iconSize[1]}px;
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