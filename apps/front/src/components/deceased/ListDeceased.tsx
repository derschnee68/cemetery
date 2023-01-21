import type { FC } from 'react';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useDeceasedListQuery } from '../../graphql/operations/deceasedList.generated';
import DeceasedTable from './DeceasedTable';
import Box from '@mui/material/Box';

const ListDeceased: FC = () => {
  const { data: deceased } = useDeceasedListQuery();

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Deceaseds
      </Typography>
      <Box sx={{ height: 400 }}>
        <DeceasedTable rows={deceased?.deceasedList ?? []} />
      </Box>
    </Paper>
  );
};
export default ListDeceased;
