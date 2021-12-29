import { DockFileNames } from 'components/type/entity/dock';
import { actionCreators } from 'modules';
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';

export default function ExitMaximizeBtn({ uid }: { uid: string }) {
  const dispatch = useDispatch();
  const { exitMaximizeFile } = bindActionCreators(actionCreators, dispatch);

  const onExitMaximizeWindow = () => {
    exitMaximizeFile({ uid });
  }

  return (
    <div onClick={onExitMaximizeWindow}>
      -
    </div>
  )
}
