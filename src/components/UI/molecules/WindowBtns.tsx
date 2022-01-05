import { DockFileNames } from 'components/type/entity/dock'
import styled from 'styled-components'
import BlankBtn from '../atoms/BlankBtn'
import CloseBtn from '../atoms/CloseBtn'
import ExitMaximizeBtn from '../atoms/ExitMaximizeBtn'
import MaximizeBtn from '../atoms/MaxmizeBtn'
import MinimizeBtn from '../atoms/MinmizeBtn'

export default function WindowBtns({ uid, name, isMaximized }: { uid: string, name: DockFileNames, isMaximized: boolean }) {
  return (
    <Container>
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
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100px;
  height: 100%;
`