import React, { useEffect, useState } from 'react'
import { Box, Typography, InputLabel, IconButton, Input, List, ListItem } from '@mui/material'
import { Add } from '@mui/icons-material'
import MaterialTable from './MaterialTable'
import SearchBar from './SearchBar'
import FileChooser from './FileChooser'
import { getFilesByCreator } from '../../services/companyMaterialService'
import { useSelector } from 'react-redux'
import { CompanyFile, roles } from '../../types/types'
import { IRootState } from '../../utils/store'

const CompanyMaterialsPage: React.FC = () => {
  const [files, setFiles] = useState<CompanyFile[]>([])
  const { data } = useSelector((state: IRootState) => state.user)
  const role = data.role

  useEffect(() => {
    const fetchFiles = async () => {
      const filesFromServer = await getFilesByCreator()
      setFiles(filesFromServer)
    }

    fetchFiles()
  }, [])

  return (
    <div>
      {role !== roles.Worker && <FileChooser />}
      <MaterialTable files={files} />
    </div>
  )
}

export default CompanyMaterialsPage
