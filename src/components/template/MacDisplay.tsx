import { Position } from 'components/type/entity/dock';
import TopBar from 'components/UI/molecules/TopBar';
import Dock from 'components/UI/organisms/Dock';
import { State } from 'modules';
import { Fragment, MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export default function MacDisplay({ onClick }: { onClick: MouseEventHandler }) {
  const { files } = useSelector((state: State) => state.file);

  return (
    <>
      {document.fullscreenElement
        ? (
          <>
            <Background onClick={onClick} />
            <Playground style={{ backgroundColor: "cadetblue", width: "100vw", height: "100vh" }} id='mac-display' >
              <TopBar />
              <Dock position={Position.LEFT} />
              {files.map((file, index) => (
                <Fragment key={index}>
                  {file.component}
                </Fragment>
              ))}
            </Playground>
          </>
        )
        : (null)
      }
    </>
  )
}

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: cadetblue;
`
const Playground = styled.div`
  width: 100vw;
  height: 100vh;
`