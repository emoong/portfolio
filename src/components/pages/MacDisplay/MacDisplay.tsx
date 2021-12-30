import { actionCreators } from 'modules';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Template from '../../template/MacDisplay';

export default function MacDisplay() {
  const dispatch = useDispatch();
  const { popFile } = bindActionCreators(actionCreators, dispatch);

  const onClickBackground = () => {
    popFile({ uid: "default" })
  }
  return (
    <Template onClick={onClickBackground} />
  )
}
