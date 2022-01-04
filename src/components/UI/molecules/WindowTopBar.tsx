import CloseBtn from "../atoms/CloseBtn";
import MaximizeBtn from "../atoms/MaxmizeBtn";
import MinimizeBtn from "../atoms/MinmizeBtn";
import { useSelector } from 'react-redux';
import { State } from "modules";
import BlankBtn from "../atoms/BlankBtn";
import ExitMaximizeBtn from "../atoms/ExitMaximizeBtn";
import styled from "styled-components";
import { DockFileNames } from "components/type/entity/dock";


export default function WindowTopBar({ uid, name }: { uid: string, name: DockFileNames }) {
  const { files } = useSelector((state: State) => state.dock);
  const isMaximized = true//(files[id].size === WindowSize.MAX);

  return (
    <Container>
      <ButtonsBar>
        <CloseBtn uid={uid} name={name} />
        {
          isMaximized
            ? (
              <>
                <BlankBtn />
                <ExitMaximizeBtn uid={uid} />
              </>
            )
            : (
              <>
                <MinimizeBtn uid={uid} />
                <MaximizeBtn uid={uid} />
              </>
            )
        }
      </ButtonsBar>
      <TitleBar>{uid}</TitleBar>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  border: 1px solid grey;
`

const ButtonsBar = styled.div`
  display: flex;
  width: 100px;
  height: 100%;
`

const TitleBar = styled.div`

`