import { Box, Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { AgreementCode } from '../../types/types'
import CodeRow from './CodeRow'

interface CodeListProps {
  agreementCodes: Array<AgreementCode>
  onToggleMarked: (index: number, marked: boolean) => void
}

const CodeList: React.FC<CodeListProps> = ({ agreementCodes, onToggleMarked }) => {
  const { t } = useTranslation()

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>{t('invitecode')}</TableCell>
          <TableCell>{t('timeOfCreation')}</TableCell>
          <TableCell>{t('marked')}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {agreementCodes.map((code, index) => (
          <CodeRow
            key={index}
            agreementCode={code}
            onToggleMarked={() => onToggleMarked(index, code.marked)}
          />
        ))}
      </TableBody>
    </Table>
  )
}

export default CodeList
