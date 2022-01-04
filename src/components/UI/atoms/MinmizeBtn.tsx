import { DockFileNames } from 'components/type/entity/dock';
import { actionCreators } from 'modules';
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

// assets
import minus from "assets/window/minus.png";

export default function MinimizeBtn({ uid }: { uid: string }) {
  const dispatch = useDispatch();
  const { minizieFile } = bindActionCreators(actionCreators, dispatch);

  const onMinimizeWindow = () => {
    minizieFile({ uid });
  }

  return (
    <Container onClick={onMinimizeWindow}>
      <img src={minus} width={20} height={20} />
    </Container>
  )
}

const Container = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: #eeee33;
text-align: center;
`;