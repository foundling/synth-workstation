import { React } from 'react';

import Menu from './components/Menu';
import * as instruments from './../instruments';
import * as sequencers from './../sequencers';
import * as fx from './../fx';

export default function Workstation() {
  return <div>
    <Menu
      instruments={instruments}
      sequencers={sequencers}
      fx={fx} />
  </div>;
}
