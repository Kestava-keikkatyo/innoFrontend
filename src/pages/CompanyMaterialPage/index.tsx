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
  const [files, setFiles] = useState<(CompanyFile & { companyName: string })[]>([])
  const { data } = useSelector((state: IRootState) => state.user)
  const role = data.role

  useEffect(() => {
    const fetchFiles = async () => {
      const filesFromServer: CompanyFile[] = []
      if (role == roles.Worker) {
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
      } else if (role == roles.Agency || role == roles.Business) {
        filesFromServer.push(...(await getFilesByCreator()))
      }

      for (const i in filesFromServer) {
        const creator = await usersService.fetchUserById(filesFromServer[i].creator)
        const fileWithName = { ...filesFromServer[i], companyName: creator.data.companyName }
        filesFromServer[i] = fileWithName
      }
      setFiles(filesFromServer as (CompanyFile & { companyName: string })[])
    }
    fetchFiles()
  }, [])

  return (
    <div>
      {role !== roles.Worker && <FileChooser setFiles={setFiles} />}
      <MaterialTable files={files} setFiles={setFiles} />
    </div>
  )
}

export default CompanyMaterialsPage
