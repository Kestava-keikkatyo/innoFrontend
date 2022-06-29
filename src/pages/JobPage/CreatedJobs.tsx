import { DataGrid, GridColumns } from '@mui/x-data-grid';
import * as React from 'react';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { IRootState } from '../../utils/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import {
  Typography, 
  Tooltip,
  useMediaQuery, 
  useTheme,
  Table,
  TableBody,
  Box,
  TablePagination,
  
} from '@mui/material';

import { DeleteJobById, fetchAllMyJobs } from '../../actions/jobActions';
import { setAlert } from '../../actions/alertActions';
import CollapsibleRow from '../../components/CollapsibleRow'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { Job } from '../../types/types';
import moment from 'moment';

const CreatedJobs: React.FC = () => {

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();

  /** Determines if device is "mobile" according to display width. 
   * Mobileview is shown to devices with narrow display */
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { jobs } = useSelector((state: IRootState) => state.job || []);
  
  /** Page number in mobileview */
  const [mobilePage, setMobilePage] = useState(0)
  /** Rows per page in mobileview */
  const rowsPerPage = 10
  useEffect(() => {
    dispatch(fetchAllMyJobs());
  }, [dispatch]);

  const rows = jobs.map( (job: Job) => {
    /** Format date created to a format with only date. */
    const formattedDate = moment(job.createdAt).format('DD/MM/YYYY')
    job = {
      ...job, 
      createdAt: formattedDate,
    }
    return job
  })
  
  
  const handleDelete = (id: string) => {
    console.log(id);
    dispatch(DeleteJobById(jobs.find(job => job._id === id) as Job))
    dispatch(setAlert('Job was deleted successfully!'))
  }

  /** Changes page in mobileview */
  const handleMobilePageChange = (event: unknown, newPage: number) => {
    setMobilePage(newPage)
  }
  
  const columns: GridColumns = [
    {
        field: 'title',
        headerName: (i18next.t('job_title')),
        flex: 2,
        /** Render tooltip displaying the title on mouse hover or 
         * long press. Usable when title is so long it doesn't fit 
         * in assigned space. */
        renderCell: (params) => {
          return (
            <Tooltip title={params.row.title}>
              <Typography>
                {params.row.title}
              </Typography>
            </Tooltip>
          )
        }
    },
    { 
        field: 'category', 
        headerName: (i18next.t('job_category')), 
        flex: 2,
        /** Render tooltip displaying the category on mouse hover or 
         * long press. Usable when category is so long it doesn't fit 
         * in assigned space. */
        renderCell: (params) => {
          return (
            <Tooltip title={params.row.category}>
              <Typography>
                {params.row.category}
              </Typography>
            </Tooltip>
          )
        }
    },
    {
      field: 'agency',
      headerName: (i18next.t('job_supplier')),
      flex: 2,
      /** Render tooltip displaying the user name on mouse hover or 
       * long press. Usable when user name is so long it doesn't fit 
       * in assigned space. */
      renderCell: (params) => {
        return (
          <Tooltip title={params.row.user.name}>
            <Typography>
              {params.row.user.name}
            </Typography>
          </Tooltip>
        )
      }
  },
    {
        field: 'createdAt',
        headerName: (i18next.t('job_release_date')),
        flex: 1,
        maxWidth: 120, 
    },
    {
        field: 'action',
        headerName: (i18next.t('job_action')),
        width: 100,
        renderCell: (params) => {
          return (
            <>
              <Link to={'/job/update/' + params.id}>
                <span className={classes.update}>{t('job_update')}</span>
              </Link>
              <DeleteOutline
                className="userListDelete"
                onClick={() => handleDelete(params.row._id)}
              />
            </>
          );
        }
    },
  ];
  
  /** Desktopview */
  const tableView = () => {
    return (
      <div style={{ height: 650, width: '100%' }}>
        <div style={{ display: 'flex', height: '100%' }}>
          <div style={{ flex: 1 }}>
            
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
        </div>
      </div>
    )
  }

  /** Mobileview */
  const mobileView = () => {
    return (
      <>
        <Box sx = {{
          width: '100%',
          marginTop: '12px',
          border: '1px solid #E0E0E0',
          borderRadius: '4px',

        }}>
          <Table>
            <TableBody>
              {/** Show only 'rowsPerPage' rows in one page. 
               * Slice correct rows according to page */}
              {rows
              .slice(mobilePage * rowsPerPage, mobilePage * rowsPerPage + rowsPerPage )
              .map((row) => (
                /** Accordion-like collapsible row in table */
                <CollapsibleRow key={row._id} row={row} handleDelete={handleDelete}></CollapsibleRow>
              ))}
            </TableBody>
          </Table>
          {/** Pagination options at bottom of page. */}
          <TablePagination
            rowsPerPageOptions = {[rowsPerPage]}
            component='div'
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={mobilePage}
            onPageChange={handleMobilePageChange}
          />
        </Box>
      </>
    )
  }
  return (
    <>
    <div>
      {/** Title */}
      <Typography className={classes.title} color="primary" align="center" variant="h5">{t('job_your_job_ads')}</Typography>
    </div>
    {/** Job ads list depending on device width ('mobile' or not). */}
    {isMobile ? mobileView() : tableView()}
    </>
  );
}
const useStyles = makeStyles(() => ({
  update: {
    width: '100%',
    display: 'flex',
    marginRight: '20px',
    color: 'green',
  },
  userListDelete: {
    color: 'red',
    marginRight: '20px',
    cursor: 'pointer'
  },
  title: {
    marginTop: '25px',
    marginBottom: '15px',
}
}));

export default CreatedJobs;