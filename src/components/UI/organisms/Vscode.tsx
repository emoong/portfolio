import { DockFileNames } from 'components/type/entity/dock';
import WindowTopBar from '../molecules/WindowTopBar';

export default function Vscode({ uid }: { uid: string }) {
  return (
    <div>
      <WindowTopBar uid={uid} name={DockFileNames.VSCODE} />
      <div>
        body
      </div>
    </div>
  )
}
