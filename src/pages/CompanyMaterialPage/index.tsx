import React, { useEffect, useState } from 'react'
import MaterialTable from './MaterialTable'
import FileChooser from './FileChooser'
import { getFilesByCreator, getFilesById } from '../../services/companyMaterialService'
import contracsService from '../../services/contractsService'
import usersService from '../../services/usersService'
import { useSelector } from 'react-redux'
import { CompanyFile, roles } from '../../types/types'
import { IRootState } from '../../utils/store'

const CompanyMaterialsPage: React.FC = () => {
  const [files, setFiles] = useState<CompanyFile[]>([])
  const { data } = useSelector((state: IRootState) => state.user)
  const role = data.role

  useEffect(() => {
    const fetchFiles = async () => {
      if (role == roles.Worker) {
        const filesFromServer: CompanyFile[] = []

        const agencyAgreementsFromServer = await contracsService.fetchBusinessContractsAsTarget()

        const businessaAgreementsFromServer =
          await contracsService.fetchEmploymentContractsAsWorkerOrBusiness()

        for (const i in agencyAgreementsFromServer) {
          filesFromServer.push(...(await getFilesById(agencyAgreementsFromServer[i].creator._id)))
        }

        for (const i in businessaAgreementsFromServer) {
          if (businessaAgreementsFromServer[i].status == 'signed') {
            filesFromServer.push(
              ...(await getFilesById(businessaAgreementsFromServer[i].business._id)),
            )
          }
        }

        for (const i in filesFromServer) {
          const creator = await usersService.fetchUserById(filesFromServer[i].creator)
          filesFromServer[i].creator = creator.data.companyName
        }
        setFiles(filesFromServer)
      } else if (role == roles.Agency || role == roles.Business) {
        const filesFromServer = await getFilesByCreator()

        for (const i in filesFromServer) {
          const creator = await usersService.fetchUserById(filesFromServer[i].creator)
          filesFromServer[i].creator = creator.data.companyName
        }
        setFiles(filesFromServer)
      }
    }
    fetchFiles()
  }, [])

  return (
    <div>
      {role !== roles.Worker && <FileChooser setFiles={setFiles} files={files} />}
      <MaterialTable files={files} />
    </div>
  )
}

export default CompanyMaterialsPage
