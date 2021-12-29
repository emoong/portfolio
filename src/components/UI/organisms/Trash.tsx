import { DockFileNames } from 'components/type/entity/dock';
import WindowTopBar from '../molecules/WindowTopBar';

export default function Trash({ uid }: { uid: string }) {
  return (
    <div>
      <WindowTopBar uid={uid} name={DockFileNames.TRASH} />
      <div>
        body
      </div>
    </div>
  )
}
