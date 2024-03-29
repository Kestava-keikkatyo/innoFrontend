import { DataGrid } from '@mui/x-data-grid'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { IRootState } from '../../utils/store'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { fetchAllReports } from '../../actions/reportActions'

const ReportList: React.FC<any> = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const { reports } = useSelector((state: IRootState) => state.report || [])
  useEffect(() => {
    dispatch(fetchAllReports())
  }, [dispatch])

  let rows = []
  rows = reports
  const columns = [
    {
      field: 'workerName',
      headerName: 'Sender',
      width: 250,
    },
    {
      field: 'workerEmail',
      headerName: 'Email',
      width: 200,
    },
    {
      field: 'recipient',
      headerName: 'Recipient',
      width: 200,
    },
    {
      field: 'reportTitle',
      headerName: 'Title',
      width: 200,
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Read more',
      width: 200,
      renderCell: (params: any) => {
        console.log(params)
        return (
          <>
            <Link to={'/reportDetails/' + params.id}>
              <span className={classes.details}>Details</span>
            </Link>
          </>
        )
      },
    },
  ]

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={rows}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  )
}

const useStyles = makeStyles(() => ({
  details: {
    width: '100%',
    display: 'flex',
    color: 'green',
  },
}))

export default ReportList
