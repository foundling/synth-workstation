import { React } from 'react';

import Menu from './components/Menu';
import * as instruments from './../instruments';
import * as sequencers from './../sequencers';
import * as fx from './../fx';

import { Navigate, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { WorkstationView, DeviceView, SettingsView } from './views';

export default function Workstation() {

  const params = useParams();

  console.log(params);

  return <div>
    <Menu
      instruments={instruments}
      sequencers={sequencers}
      fx={fx} />
    <Routes>
      <Route index element={<WorkstationView />} />
      <Route path="/workstation" element={<WorkstationView />} />
      <Route path="/settings" element={<SettingsView />} />
      <Route path="/device/:deviceName" element={<DeviceView />} />
      <Route path="*" element={ <Navigate to="/" /> } />
    </Routes>
  </div>;
}
