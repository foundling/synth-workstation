import { useParams } from 'react-router-dom';

export default function DeviceView() {
  const { deviceName } = useParams();
  return (
    <div>device view for device: {deviceName}</div>
  )
}
