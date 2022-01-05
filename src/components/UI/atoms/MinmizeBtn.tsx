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
      <img src={minus} width={18} height={18} />
    </Container>
  )
}

const Container = styled.div`
width: 18px;
height: 18px;
border-radius: 50%;
background-color: #eeee33;
text-align: center;
`;