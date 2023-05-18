// MaterialTable.tsx

import React from 'react';
import { Table, TableBody, TableHead, TableRow, TableCell } from "@mui/material";
import { CompanyFile } from "../../types/types";
import MaterialRow from './MaterialRow';

interface MaterialTableProps {
  files: CompanyFile[];
}

const MaterialTable: React.FC<MaterialTableProps> = ({ files }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Creator</TableCell>
          <TableCell>Upload Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {files.map((file) => (
          <MaterialRow key={file._id} file={file} />
        ))}
      </TableBody>
    </Table>
  );
};

export default MaterialTable;
