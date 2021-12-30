import { FullScreen, useFullScreenHandle } from 'react-full-screen';

import MacDisplay from "components/template/MacDisplay";
import ExitFullScreenBtn from 'components/UI/atoms/ExitFullScreenBtn';
import FullScreenBtn from 'components/UI/atoms/FullScreenBtn';

function App() {

  const handle = useFullScreenHandle();

  const onFullScreen = () => {
    handle.enter();
  }

  const onExitFullScreen = () => {
    handle.exit();
  }

  return (
    <div>
      <FullScreenBtn onFullScreen={onFullScreen} />
      <ExitFullScreenBtn onExitFullScreen={onExitFullScreen} />
      <FullScreen handle={handle}>
        <MacDisplay />
      </FullScreen>
    </div>
  );
}

export default App;