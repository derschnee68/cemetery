import type { FC, ReactNode } from 'react';
import * as React from 'react';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';

interface SidebarLinkProps {
  name: string;
  href: string;
  icon: ReactNode;
}

const SidebarLink: FC<SidebarLinkProps> = ({ name, href, icon }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component={Link} href={href}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};
export default SidebarLink;
