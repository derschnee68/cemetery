import type { FC } from 'react';
import React from 'react';
import { z } from 'zod';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import TextField from '../../lib/forms/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { useCemeteryCreateMutation } from '../../graphql/operations/cemeteryCreate.generated';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { CemeteryListDocument } from '../../graphql/operations/cemeteryList.generated';

const CreateCemeterySchema = z.object({
  name: z.string().min(1),
  address: z.string().min(4),
});
type CreateCemeteryData = z.infer<typeof CreateCemeterySchema>;

const CreateCemetery: FC = () => {
  const { control, handleSubmit } = useForm<CreateCemeteryData>({
    resolver: zodResolver(CreateCemeterySchema),
  });

  const [createCemetery, { loading }] = useCemeteryCreateMutation({ refetchQueries: [CemeteryListDocument] });

  const onSubmit: SubmitHandler<CreateCemeteryData> = (data) => {
    void createCemetery({ variables: data });
  };

  return (
    <Paper component="form" onSubmit={handleSubmit(onSubmit)} sx={{ p: 2 }}>
      <Typography variant="h6">Create a new cemetery</Typography>
      <TextField control={control} name="name" label="Name" />
      <TextField control={control} name="address" label="Address" />

      <LoadingButton type="submit" fullWidth={true} loading={loading}>
        Create
      </LoadingButton>
    </Paper>
  );
};
export default CreateCemetery;
