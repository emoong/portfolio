import { DockFileNames } from 'components/type/entity/dock';
import WindowTopBar from '../molecules/WindowTopBar';

export default function Postman({ uid }: { uid: string }) {
  return (
    <div>
      <WindowTopBar uid={uid} name={DockFileNames.POSTMAN} />
      <div>
        body
      </div>
    </div>
  )
}
