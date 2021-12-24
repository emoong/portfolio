import Dock from "components/UI/organisms/Dock";
import { Position } from "components/type/entity/dock";

export default function WallPaper() {
  return (
    <div style={{ backgroundColor: 'green', width: "100vw", height: "100vh" }}>
      <Dock position={Position.LEFT} />
    </div>
  )
}