// MaterialTable.tsx

import React from 'react'
import { Table, TableBody, TableHead, TableRow, TableCell } from '@mui/material'
import { CompanyFile } from '../../types/types'
import MaterialRow from './MaterialRow'
import { useTranslation } from 'react-i18next'

interface MaterialTableProps {
  files: (CompanyFile & { companyName: string })[]
  setFiles: React.Dispatch<React.SetStateAction<(CompanyFile & { companyName: string })[]>>
}

const MaterialTable: React.FC<MaterialTableProps> = ({ files, setFiles }) => {
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
        {files &&
          files.map((file) => <MaterialRow key={file._id} file={file} setFiles={setFiles} />)}
      </TableBody>
    </Table>
  )
}

export default MaterialTable
