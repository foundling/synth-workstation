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
          <MenuItem>Undo</MenuItem>
        </SubMenu>
        <SubMenu label="View">
          <MenuItem>Router View</MenuItem>
          <MenuItem>Device View</MenuItem>
        </SubMenu>
        <SubMenu label="Add">
          <SubMenu label="Instruments">
            <MenuItem>Bass Synth</MenuItem>
            <MenuItem>Poly Synth</MenuItem>
            <MenuItem>Bird Synth</MenuItem>
          </SubMenu>
          <SubMenu label="Sequencers">
            <MenuItem>Linear</MenuItem>
            <MenuItem>Euclidian</MenuItem>
          </SubMenu>
          <SubMenu label="FX">
            <MenuItem>BitCrusher</MenuItem>
            <MenuItem>Tape Delay</MenuItem>
          </SubMenu>
        </SubMenu>
      </ReactMenu>
    </>
  )
}
