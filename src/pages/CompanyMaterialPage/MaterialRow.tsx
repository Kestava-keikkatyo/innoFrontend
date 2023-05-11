import React from "react";
import { TableRow, TableCell, IconButton, Button } from "@mui/material";
import { Delete, GetApp } from "@mui/icons-material";

interface Material {
  title: string;
  description: string;
  file: File | null;
}

interface MaterialRowProps {
  material: Material;
  onDelete: () => void;
}

const MaterialRow: React.FC<MaterialRowProps> = ({ material, onDelete }) => {
  const handleDownload = (material: Material) => {
    if (!material.file) return;

    const link = document.createElement("a");
    link.href = URL.createObjectURL(material.file);
    link.download = material.file.name;
    link.click();
  };

  return (
    <TableRow>
      <TableCell>{material.title}</TableCell>
      <TableCell>{material.description}</TableCell>
      <TableCell>
        {/* Add appropriate view functionality */}
        <Button variant="contained">View</Button>
      </TableCell>
      <TableCell>
        <IconButton onClick={onDelete}>
          <Delete />
        </IconButton>
      </TableCell>
      <TableCell>
        <IconButton onClick={() => handleDownload(material)}>
          <GetApp />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default MaterialRow;
