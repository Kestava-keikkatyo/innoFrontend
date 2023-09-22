// MaterialRow.tsx

import React from 'react'
import { TableRow, TableCell, Button } from '@mui/material'
import { CompanyFile } from '../../types/types'
import { getFileById } from '../../services/companyMaterialService'

interface MaterialRowProps {
  file: CompanyFile
}

const MaterialRow: React.FC<MaterialRowProps> = ({ file }) => {
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
      <TableCell>{file.uploadDate.toString()}</TableCell>
      <TableCell>
        <Button onClick={handleDownload} variant='contained' color='primary'>
          Download
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default MaterialRow
