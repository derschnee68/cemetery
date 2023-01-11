import type { FC } from 'react';
import * as React from 'react';
import { List } from '@mui/material';
import SidebarLink from './SidebarLink';
import MapIcon from '@mui/icons-material/Map';
import ChurchIcon from '@mui/icons-material/Church';

const Sidebar: FC = () => {
  return (
    <List>
      <SidebarLink name="Dashboard" href="/" icon={<MapIcon />} />
      <SidebarLink name="Cemeteries" href="/cemeteries" icon={<ChurchIcon />} />
    </List>
  );
};
export default Sidebar;
