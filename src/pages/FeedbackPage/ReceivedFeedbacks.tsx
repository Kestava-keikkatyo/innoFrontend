import { DataGrid, GridColumns } from '@mui/x-data-grid';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../utils/store';
import { Link } from 'react-router-dom';
import makeStyles from '@mui/styles/makeStyles';
import { fetchFeedbacksAppointedToMe } from '../../actions/feedBackActions';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import moment from 'moment';

const ReceivedFeedbacks: React.FC = () => {

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();
  const { feedbacks } = useSelector((state: IRootState) => state.feedback || []);

  useEffect(() => {
    dispatch(fetchFeedbacksAppointedToMe());
  }, [dispatch]);

  const rows = feedbacks;

  const columns: GridColumns = [
    {
      field: 'recipientName',
      headerName: (i18next.t('feedback_recipient')),
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'createdAt',
      headerName: (i18next.t('sending_date')),
      minWidth: 125,
      flex: 1,
      renderCell: (params) => {
        return <>{moment(params.row.createdAt).format('DD/MM/YYYY')}</>;
      }
    },
    {
      field: 'anonymity',
      headerName: (i18next.t('feedback_anonymity')),
      minWidth: 100,
      flex: 1,
      renderCell: (params) => {
        return <span>{params.row.anonymous ?
          t('feedback_anonymity_yes') :
          t('feedback_anonymity_no')}
        </span>
      }
    },
    {
      field: 'action',
      headerName: (i18next.t('feedback_action')),
      minWidth: 100,
      flex: 1,
      renderCell: (params) => {
        return <Link to={'/feedback/details/' + params.id}>{t('feedback_details')}</Link>
      }
    },
  ];
  return (
    <div style={{ height: '75vh' }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={rows}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}
const useStyles = makeStyles(() => ({
  update: {
    width: '100%',
    display: 'flex',
    marginRight: '20px',
  },
  userListDelete: {
    color: 'red',
    marginRight: '20px',
    cursor: 'pointer'
  }
}));

export default ReceivedFeedbacks;