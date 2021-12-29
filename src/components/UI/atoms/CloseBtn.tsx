import { DockFileNames } from 'components/type/entity/dock';
import { actionCreators } from 'modules';
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';

export default function CloseBtn({ uid, name }: { uid: string, name: DockFileNames }) {
  const dispatch = useDispatch();
  const { closeFile, closeDockFile } = bindActionCreators(actionCreators, dispatch);

  const onCloseWindow = () => {
    closeFile({ uid });
    closeDockFile({ uid, name });
  }

  return (
    <div onClick={onCloseWindow}>
      X
    </div>
  )
}
