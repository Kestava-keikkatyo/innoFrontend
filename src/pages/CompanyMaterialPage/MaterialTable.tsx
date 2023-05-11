import React, { useState } from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from "@mui/material";
import MaterialRow from "./MaterialRow";

interface Material {
  title: string;
  description: string;
  file: File | null;
}

interface MaterialTableProps {
  searchTerm: string;
}

const MaterialTable: React.FC<MaterialTableProps> = ({ searchTerm }) => {
  const [materials, setMaterials] = useState<Material[]>([]);

  const filteredMaterials = materials.filter((material) =>
    material.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>View</TableCell>
            <TableCell>Delete</TableCell>
            <TableCell>Download</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredMaterials.map((material, index) => (
            <MaterialRow key={index} material={material} onDelete={() => handleDelete(index)} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default MaterialTable;
