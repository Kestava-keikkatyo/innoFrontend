import { DataGrid, GridColumns } from '@mui/x-data-grid'
import * as React from 'react'
import { DeleteOutline } from '@mui/icons-material'
import { deleteUser, fetchAllUsers, updateUSerStatus } from '../../actions/usersActions'
import { IRootState } from '../../utils/store'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { User } from '../../types/types'

const UserList: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const { users } = useSelector((state: IRootState) => state.users || [])

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])

  const rows = [...users]

  const handleDelete = (id: string) => {
    console.log(id)
    dispatch(deleteUser(users.find((user) => user._id === id) as User))
  }

  const handleStatus = (id: string, active: boolean) => {
    console.log()
    dispatch(updateUSerStatus(users.find((user) => user._id === id) as User, active))
  }

  const columns: GridColumns = [
    {
      field: 'name',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className={classes.userListUser}>
            <img className={classes.userListImg} src={params.row.profilePicture} alt='' />
            {params.row.name}
          </div>
        )
      },
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
    },
    {
      field: 'city',
      headerName: 'City',
      width: 200,
    },
    {
      field: 'userType',
      headerName: 'User Type',
      width: 150,
    },
    {
      field: 'active',
      headerName: 'Status',
      width: 150,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className={classes.userListDelete}
              onClick={() => handleDelete(params.row._id)}
            />
            <button
              className={classes.userListDeactive}
              onClick={() => handleStatus(params.row._id, !params.row.active)}
            >
              {params.row.active ? 'Deactivate' : 'Activate'}
            </button>
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
        style={{ backgroundColor: 'red' }}
      />
    </div>
  )
}

const useStyles = makeStyles(() => ({
  userList: {
    flex: '4',
  },
  userListUser: {
    display: 'flex',
    alignItems: 'center',
  },
  userListImg: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: '10px',
  },
  userListDeactive: {
    border: 'none',
    borderRadius: '10px',
    padding: '5px 10px',
    backgroundColor: '#cb6e28',
    color: 'white',
    cursor: 'pointer',
    marginRight: '20px',
  },
  userListDelete: {
    color: 'red',
    marginRight: '20px',
    cursor: 'pointer',
  },
}))
export default UserList
