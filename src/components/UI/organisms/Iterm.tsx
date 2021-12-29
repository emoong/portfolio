import { DockFileNames } from 'components/type/entity/dock';
import WindowTopBar from '../molecules/WindowTopBar';

export default function Iterm({ uid }: { uid: string }) {
  return (
    <div>
      <WindowTopBar uid={uid} name={DockFileNames.ITERM} />
      <div>
        body
      </div>
    </div>
  )
}
