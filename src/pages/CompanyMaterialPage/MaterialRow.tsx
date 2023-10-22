// MaterialRow.tsx

import React from 'react'
import { TableRow, TableCell, Button } from '@mui/material'
import { CompanyFile } from '../../types/types'
import { getFileById } from '../../services/companyMaterialService'
import { useTranslation } from 'react-i18next'

interface MaterialRowProps {
  file: CompanyFile
}

const MaterialRow: React.FC<MaterialRowProps> = ({ file }) => {
  const { t } = useTranslation()
  const handleDownload = async () => {
    try {
      const response = await getFileById(file._id)
      const blob = new Blob([response], { type: file.contentType })
      const downloadUrl = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = file.title // use actual file title here
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <TableRow key={file._id}>
      <TableCell>{file.title}</TableCell>
      <TableCell>{file.description}</TableCell>
      <TableCell>{file.creator}</TableCell>
      <TableCell>{new Date(file.uploadDate).toLocaleDateString()}</TableCell>
      <TableCell>
        <Button onClick={handleDownload} variant='contained' color='primary'>
          {t('file_download_button')}
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default MaterialRow
