// MaterialRow.tsx

import React from 'react';
import { TableRow, TableCell, Button } from "@mui/material";
import { CompanyFile } from "../../types/types";

interface MaterialRowProps {
  file: CompanyFile;
}

const MaterialRow: React.FC<MaterialRowProps> = ({ file }) => {
  const handleDownload = () => {
    window.open(`/file/${file._id}`);
  };

  return (
    <TableRow key={file._id}>
      <TableCell>{file.title}</TableCell>
      <TableCell>{file.description}</TableCell>
      <TableCell>{file.creator}</TableCell>
      <TableCell>{file.uploadDate.toString()}</TableCell>
      <TableCell>
        <Button onClick={handleDownload} variant="contained" color="primary">
          Download
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default MaterialRow;
