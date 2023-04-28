import { Checkbox, TableCell, TableRow } from '@mui/material';
import { styled } from "@mui/system";
import React from 'react';
import { AgreementCode } from '../../types/types';

interface CodeRowProps {
  agreementCode: AgreementCode;
  onToggleMarked: () => void;
}

const CodeRow: React.FC<CodeRowProps> = ({ agreementCode, onToggleMarked }) => {
  return (
    <TableRow>
      <TableCell>{agreementCode.code}</TableCell>
      <TableCell>{agreementCode.createdAt.toLocaleString()}</TableCell>
      <TableCell>
        <Checkbox
          checked={agreementCode.marked}
          onChange={onToggleMarked}
          inputProps={{ 'aria-label': 'toggle marked status' }}
        />
      </TableCell>
    </TableRow>
  );
};

export default CodeRow;