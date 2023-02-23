import type { NextPage } from 'next';
import withAuth from '../lib/auth/withAuth';
import MainLayout from '../components/layout/MainLayout';
import CreateDeceased from '../components/deceased/CreateDeceased';
import ListDeceased from '../components/deceased/ListDeceased';
import Grid from '@mui/material/Grid';

const Web: NextPage = () => {
  return (
    <MainLayout title="Deceaseds">
      <Grid container spacing={2}>
        <Grid item xs>
          <ListDeceased />
        </Grid>
        <Grid item xs>
          <CreateDeceased />
        </Grid>
      </Grid>
    </MainLayout>
  );
};
export default withAuth(Web);
