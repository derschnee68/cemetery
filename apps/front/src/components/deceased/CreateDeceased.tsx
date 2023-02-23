import type { FC } from 'react';
import React from 'react';
import { z } from 'zod';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import TextField from '../../lib/forms/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { useDeceasedCreateMutation } from '../../graphql/operations/deceasedCreate.generated';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { DeceasedListDocument } from '../../graphql/operations/deceasedList.generated';

const CreateDeceasedSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
});
type CreateDeceasedData = z.infer<typeof CreateDeceasedSchema>;

const CreateDeceased: FC = () => {
  const { control, handleSubmit } = useForm<CreateDeceasedData>({
    resolver: zodResolver(CreateDeceasedSchema),
  });

  const [createDeceased, { loading }] = useDeceasedCreateMutation({
    refetchQueries: [DeceasedListDocument],
  });

  const onSubmit: SubmitHandler<CreateDeceasedData> = (data) => {
    void createDeceased({ variables: data });
  };

  return (
    <Paper component="form" onSubmit={handleSubmit(onSubmit)} sx={{ p: 2 }}>
      <Typography variant="h6">Add a deceased</Typography>

      <TextField control={control} name="firstName" label="First name" />
      <TextField control={control} name="lastName" label="Last name" />

      <LoadingButton type="submit" fullWidth={true} loading={loading}>
        Create
      </LoadingButton>
    </Paper>
  );
};
export default CreateDeceased;
