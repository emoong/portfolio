import { MouseEventHandler } from "react";

export default function ExitFullScreenBtn({ onExitFullScreen }: { onExitFullScreen: MouseEventHandler }) {
  return (
    <button onClick={onExitFullScreen}>
      exit full screen button
    </button>
  )
}
