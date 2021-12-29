import { DockFileNames } from 'components/type/entity/dock';
import { actionCreators } from 'modules';
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';

export default function MaximizeBtn({ uid }: { uid: string }) {
  const dispatch = useDispatch();
  const { maximizeFile } = bindActionCreators(actionCreators, dispatch);

  const onMaximizeWindow = () => {
    maximizeFile({ uid });
  }

  return (
    <div onClick={onMaximizeWindow}>
      ^
    </div>
  )
}
