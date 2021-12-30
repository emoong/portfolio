import { FullScreen, useFullScreenHandle } from 'react-full-screen';

import MacDisplay from "components/template/MacDisplay";

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
      <div id="login">
        <button onClick={onFullScreen}>
          full screen button
        </button>
        <button onClick={onExitFullScreen}>
          exit full screen button
        </button>
      </div>
      <FullScreen handle={handle}>
        <MacDisplay />
      </FullScreen>
    </div>
  );
}

export default App;