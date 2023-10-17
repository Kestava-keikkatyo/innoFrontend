// MaterialTable.tsx

import React from 'react'
import { Table, TableBody, TableHead, TableRow, TableCell } from '@mui/material'
import { CompanyFile } from '../../types/types'
import MaterialRow from './MaterialRow'
import { useTranslation } from 'react-i18next'

interface MaterialTableProps {
  files: CompanyFile[]
}

const MaterialTable: React.FC<MaterialTableProps> = ({ files }) => {
  const { t } = useTranslation()
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>{t('file_title')}</TableCell>
          <TableCell>{t('file_description')}</TableCell>
          <TableCell>{t('file_uploader')}</TableCell>
          <TableCell>{t('file_date')}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {files.map((file) => (
          <MaterialRow key={file._id} file={file} />
        ))}
      </TableBody>
    </Table>
  )
}

export default MaterialTable
