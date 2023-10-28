// MaterialRow.tsx

import React from 'react'
import { TableRow, TableCell, Button } from '@mui/material'
import { CompanyFile, roles, severity } from '../../types/types'
import { deleteFile, getFileById } from '../../services/companyMaterialService'
import { useTranslation } from 'react-i18next'
import { IRootState } from '../../utils/store'
import { useSelector, useDispatch } from 'react-redux'
import { setAlert } from '../../actions/alertActions'

interface MaterialRowProps {
  file: CompanyFile & { companyName: string }
  setFiles: React.Dispatch<React.SetStateAction<(CompanyFile & { companyName: string })[]>>
}

const MaterialRow: React.FC<MaterialRowProps> = ({ file, setFiles }) => {
  const { t } = useTranslation()
  const { data } = useSelector((state: IRootState) => state.user)
  const dispatch = useDispatch()
  const role = data.role
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

  const handleDelete = async () => {
    try {
      if (confirm(t('file_deletion_warning'))) {
        await deleteFile(file._id)
        setFiles((oldFiles) => oldFiles.filter((f) => f._id != file._id))
        dispatch(setAlert(t('file_delete_success'), severity.Success))
      }
    } catch (error) {
      console.error(error)
      dispatch(setAlert(t('file_delete_error'), severity.Success))
    }
  }

  return (
    <TableRow key={file._id}>
      <TableCell>{file.title}</TableCell>
      <TableCell>{file.description}</TableCell>
      <TableCell>{file.companyName}</TableCell>
      <TableCell>{new Date(file.uploadDate).toLocaleDateString()}</TableCell>
      <TableCell>
        <Button onClick={handleDownload} variant='contained' color='primary'>
          {t('file_download_button')}
        </Button>
        {role !== roles.Worker && (
          <Button
            sx={{ marginLeft: '2rem' }}
            onClick={handleDelete}
            variant='contained'
            color='error'
          >
            {t('file_remove_button')}
          </Button>
        )}
      </TableCell>
    </TableRow>
  )
}

export default MaterialRow
