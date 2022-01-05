import { DockFileNames } from 'components/type/entity/dock';
import { actionCreators } from 'modules';
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

// assets
import normalize from 'assets/window/normalize.png';

export default function ExitMaximizeBtn({ uid }: { uid: string }) {
  const dispatch = useDispatch();
  const { exitMaximizeFile } = bindActionCreators(actionCreators, dispatch);

  const onExitMaximizeWindow = () => {
    exitMaximizeFile({ uid });
  }

  return (
    <Container onClick={onExitMaximizeWindow}>
      <img src={normalize} width={18} height={18} />
    </Container>
  )
}

const Container = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #33ff33;
  text-align: center;
`;