import { DockFileNames } from 'components/type/entity/dock';
import { actionCreators } from 'modules';
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

// assets
import maximize from "assets/window/maximize.png";

export default function MaximizeBtn({ uid }: { uid: string }) {
  const dispatch = useDispatch();
  const { maximizeFile } = bindActionCreators(actionCreators, dispatch);

  const onMaximizeWindow = () => {
    maximizeFile({ uid });
  }

  return (
    <Container onClick={onMaximizeWindow}>
      <img src={maximize} width={18} height={18} />
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