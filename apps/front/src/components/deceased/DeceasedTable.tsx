import type { FC } from 'react';
import { useMemo } from 'react';
import type { GridColDef } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import type { DeceasedListQuery } from '../../graphql/operations/deceasedList.generated';
import { DeceasedListDocument } from '../../graphql/operations/deceasedList.generated';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Tooltip } from '@mui/material';
import { useDeceasedArchiveMutation } from '../../graphql/operations/deceasedArchive.generated';

interface DeceasedTableProps {
  rows: DeceasedListQuery['deceasedList'];
}

const DeceasedTable: FC<DeceasedTableProps> = ({ rows }) => {
  const [archiveDeceased] = useDeceasedArchiveMutation({
    refetchQueries: [DeceasedListDocument],
  });

  const columns = useMemo<GridColDef[]>(() => {
    return [
      {
        field: 'firstName',
        headerName: 'First name',
        flex: 1,
        sortable: false,
      },
      {
        field: 'lastName',
        headerName: 'Last name',
        flex: 1,
        sortable: false,
      },
      {
        field: 'actions',
        headerName: 'Actions',
        sortable: false,
        renderCell: ({ row: deceased }) => (
          <Tooltip title="Delete" onClick={() => archiveDeceased({ variables: { deceasedId: deceased.id } })}>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ),
      },
    ];
  }, [archiveDeceased]);
  return <DataGrid rows={rows} columns={columns} disableSelectionOnClick disableColumnFilter disableColumnMenu />;
};

export default DeceasedTable;
