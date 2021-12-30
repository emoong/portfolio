import { DockFileNames } from 'components/type/entity/dock';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import WindowTopBar from '../molecules/WindowTopBar';
import { actionCreators } from 'modules';

export default function Postman({ uid }: { uid: string }) {
  const dispatch = useDispatch();
  const { popFile } = bindActionCreators(actionCreators, dispatch);

  const selectFile = () => {
    popFile({ uid })
  }
  return (
    <Container onClick={selectFile}>
      <WindowTopBar uid={uid} name={DockFileNames.POSTMAN} />
      <Body>
        body
      </Body>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 200px;
  left: 600px;
  border: 1px solid red;
`

const Body = styled.div`
  width: 400px;
  height: 300px;
`