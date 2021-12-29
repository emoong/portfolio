import { DockFileNames } from 'components/type/entity/dock';
import WindowTopBar from '../molecules/WindowTopBar';

export default function Notes({ uid }: { uid: string }) {
  return (
    <div>
      <WindowTopBar uid={uid} name={DockFileNames.NOTES} />
      <div>
        body
      </div>
    </div>
  )
}
