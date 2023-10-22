import React, { useEffect, useState } from 'react'
import MaterialTable from './MaterialTable'
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
      <FileChooser setFiles={setFiles} files={files} />
      <MaterialTable files={files} />
    </div>
  )
}

export default CompanyMaterialsPage
