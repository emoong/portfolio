import { MouseEventHandler } from "react";

export default function FullScreenBtn({ onFullScreen }: { onFullScreen: MouseEventHandler }) {
  return (
    <button onClick={onFullScreen}>
      full screen button
    </button>
  )
}
