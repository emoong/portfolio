import { DockFileNames } from 'components/type/entity/dock';
import { actionCreators } from 'modules';
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

// assets
import cancle from "assets/window/cancel.png";

export default function CloseBtn({ uid, name }: { uid: string, name: DockFileNames }) {
  const dispatch = useDispatch();
  const { closeFile, closeDockFile } = bindActionCreators(actionCreators, dispatch);

  const onCloseWindow = () => {
    closeFile({ uid });
    closeDockFile({ uid, name });
  }

  return (
    <Container onClick={onCloseWindow}>
      <img src={cancle} width={20} height={20} />
    </Container>
  )
}

const Container = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ff3333;
  text-align: center;
`;