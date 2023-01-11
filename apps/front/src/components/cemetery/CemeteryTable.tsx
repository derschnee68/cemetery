import type { FC } from 'react';
import { useMemo } from 'react';
import type { GridColDef } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import type { CemeteryListQuery } from '../../graphql/operations/cemeteryList.generated';
import { CemeteryListDocument } from '../../graphql/operations/cemeteryList.generated';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Tooltip } from '@mui/material';
import { useCemeteryArchiveMutation } from '../../graphql/operations/cemeteryArchive.generated';

interface CemeteryTableProps {
  rows: CemeteryListQuery['cemeteryList'];
}

const CemeteryTable: FC<CemeteryTableProps> = ({ rows }) => {
  const [archiveCemetery] = useCemeteryArchiveMutation({ refetchQueries: [CemeteryListDocument] });

  const columns = useMemo<GridColDef[]>(() => {
    return [
      {
        field: 'name',
        headerName: 'Name',
        flex: 1,
        sortable: false,
      },
      {
        field: 'address',
        headerName: 'Address',
        flex: 1,
        sortable: false,
      },
      {
        field: 'actions',
        headerName: 'Actions',
        sortable: false,
        renderCell: ({ row: cemetery }) => (
          <Tooltip title="Delete" onClick={() => archiveCemetery({ variables: { cemeteryId: cemetery.id } })}>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ),
      },
    ];
  }, [archiveCemetery]);
  return <DataGrid rows={rows} columns={columns} disableSelectionOnClick disableColumnFilter disableColumnMenu />;
};

export default CemeteryTable;
