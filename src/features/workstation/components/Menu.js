import { Menu as ReactMenu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import "@szhsin/react-menu/dist/index.css";

import { Menu as IconoirMenu } from 'iconoir-react';

export default function Menu({ instruments, sequencers, fx }) {

  const menuButton = <MenuButton isOpen={true}>
    <IconoirMenu />
  </MenuButton>;

  return (
    <>
      <ReactMenu menuButton={menuButton}>
        <SubMenu label="File">
          <MenuItem>Open</MenuItem>
          <MenuItem>Save</MenuItem>
          <MenuItem>Save As</MenuItem>
          <MenuItem>About</MenuItem>
        </SubMenu>
        <SubMenu label="Edit">
          <MenuItem>Redo</MenuItem>
          <MenuItem>Undo</MenuItem>
          <MenuItem>Undo History</MenuItem>
        </SubMenu>
        <SubMenu label="View">
          <MenuItem>Router View</MenuItem>
          <MenuItem>Device View</MenuItem>
        </SubMenu>
        <SubMenu label="Add">
          <SubMenu label="Instruments">
            { 
              Object.entries(instruments).map(([instrumentName, instrument]) => (
                <MenuItem key={instrumentName}>{instrument}</MenuItem>
              ))
            }
          </SubMenu>
          <SubMenu label="Sequencers">
            { 
              Object.entries(sequencers).map(([sequencerName, sequencer]) => (
                <MenuItem key={sequencerName}>{sequencer}</MenuItem>
              ))
            }
          </SubMenu>
          <SubMenu label="FX">
            { 
              Object.entries(fx).map(([effectName, effect]) => (
                <MenuItem key={effectName}>{effect}</MenuItem>
              ))
            }
          </SubMenu>
        </SubMenu>
      </ReactMenu>
    </>
  )
}
