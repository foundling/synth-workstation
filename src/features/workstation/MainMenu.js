import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import "@szhsin/react-menu/dist/index.css";

import { Iconoir, Menu as IconoirMenu } from 'iconoir-react';

export default function WorkstationMenu({ instruments, sequencers, fx }) {
  const menuButton = <MenuButton isOpen={true}>
    <IconoirMenu color="red" />
  </MenuButton>;

  return (
    <>
      <Menu menuButton={menuButton}>
        <SubMenu label="File">
          <MenuItem>Open</MenuItem>
          <MenuItem>Save</MenuItem>
          <MenuItem>Save As</MenuItem>
          <MenuItem>About</MenuItem>
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
      </Menu>
    </>
  )
}
