import { DockFileNames } from 'components/type/entity/dock';
import { actionCreators } from 'modules';
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';

export default function MinimizeBtn({ uid }: { uid: string }) {
  const dispatch = useDispatch();
  const { minizieFile } = bindActionCreators(actionCreators, dispatch);

  const onMinimizeWindow = () => {
    minizieFile({ uid });
  }

  return (
    <div onClick={onMinimizeWindow}>
      _
    </div>
  )
}
