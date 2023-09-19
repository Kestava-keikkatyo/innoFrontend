import React, { useEffect, useState } from 'react'
import { Box, Typography, InputLabel, IconButton, Input, List, ListItem } from '@mui/material'
import { Add } from '@mui/icons-material'
import MaterialTable from './MaterialTable'
import SearchBar from './SearchBar'
import FileChooser from './FileChooser'
import { getFilesByCreator } from '../../services/companyMaterialService'
import { CompanyFile } from '../../types/types'

const CompanyMaterialsPage: React.FC = () => {
  const [files, setFiles] = useState<CompanyFile[]>([])

  useEffect(() => {
    const fetchFiles = async () => {
      const filesFromServer = await getFilesByCreator()
      setFiles(filesFromServer)
    }

    fetchFiles()
  }, [])

  return (
    <div>
      <FileChooser />
      <MaterialTable files={files} />
    </div>
  )
}

export default CompanyMaterialsPage
