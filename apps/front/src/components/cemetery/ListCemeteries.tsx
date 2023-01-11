import type { FC } from 'react';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useCemeteryListQuery } from '../../graphql/operations/cemeteryList.generated';
import CemeteryTable from './CemeteryTable';
import Box from '@mui/material/Box';

const ListCemeteries: FC = () => {
  const { data: cemeteries } = useCemeteryListQuery();

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Available cemeteries
      </Typography>
      <Box sx={{ height: 400 }}>
        <CemeteryTable rows={cemeteries?.cemeteryList ?? []} />
      </Box>
    </Paper>
  );
};
export default ListCemeteries;
