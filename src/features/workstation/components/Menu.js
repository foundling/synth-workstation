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
              Object.keys(instruments).map(instrument => (
                <MenuItem>{instrument}</MenuItem>
              ))
            }
          </SubMenu>
          <SubMenu label="Sequencers">
            { 
              Object.keys(sequencers).map(sequencer => (
                <MenuItem>{sequencer}</MenuItem>
              ))
            }
          </SubMenu>
          <SubMenu label="FX">
            { 
              Object.keys(fx).map(effect => (
                <MenuItem>{effect}</MenuItem>
              ))
            }
          </SubMenu>
        </SubMenu>
      </ReactMenu>
    </>
  )
}
