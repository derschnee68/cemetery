import type { NextPage } from 'next';
import withAuth from '../lib/auth/withAuth';
import MainLayout from '../components/layout/MainLayout';
import CreateCemetery from '../components/cemetery/CreateCemetery';
import ListCemeteries from '../components/cemetery/ListCemeteries';
import Grid from '@mui/material/Grid';

const Web: NextPage = () => {
  return (
    <MainLayout title="Cemeteries">
      <Grid container spacing={2}>
        <Grid item xs>
          <ListCemeteries />
        </Grid>
        <Grid item xs>
          <CreateCemetery />
        </Grid>
      </Grid>
    </MainLayout>
  );
};
export default withAuth(Web);
