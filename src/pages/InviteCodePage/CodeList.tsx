import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import { styled } from "@mui/system";
import React from 'react';
import { AgreementCode } from '../../types/types';
import CodeRow from './CodeRow';

interface CodeListProps {
  agreementCodes: Array<AgreementCode>;
  onToggleMarked: (index: number, marked: boolean) => void;
}

const CodeList: React.FC<CodeListProps> = ({ agreementCodes, onToggleMarked }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Code</TableCell>
          <TableCell>Time of Creation</TableCell>
          <TableCell>Marked</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {agreementCodes.map((code, index) => (
          <CodeRow key={index} agreementCode={code} onToggleMarked={() => onToggleMarked(index, code.marked)} />
        ))}
      </TableBody>
    </Table>
  );
};

export default CodeList;