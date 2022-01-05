import { Position } from 'components/type/entity/dock';
import TopBar from 'components/UI/molecules/TopBar';
import Dock from 'components/UI/organisms/Dock';
import { State } from 'modules';
import { Fragment, MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';
import Playground from './Playground';

export default function MacDisplay({ onClick }: { onClick: MouseEventHandler }) {
  const { files } = useSelector((state: State) => state.file);

  return (
    <>
      {document.fullscreenElement
        ? (
          <>
            {/* <Background onClick={onClick} /> */}
            <Playground>
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