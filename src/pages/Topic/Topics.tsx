import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { IRootState } from '../../utils/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import { setAlert } from '../../actions/alertActions';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { deleteTopic, fetchAllTopics } from '../../actions/topicActions';
import { Button } from '@mui/material';

const Topics: React.FC<any> = () => {

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  const { topics } = useSelector((state: IRootState) => state.topic || []);
  
  useEffect(() => {
    dispatch(fetchAllTopics());
  }, [dispatch]);

  let rows = [];
  rows = topics;

  const handleDelete = (id: string) => {
    console.log(id);
    dispatch(deleteTopic(id))
    dispatch(setAlert("Topic was deleted successfully!"))
  }
  
  const columns = [
    {
        field: "question",
        headerName: (i18next.t("topic_question")),
        width: 300,
    },
    { 
        field: "answer", 
        headerName: (i18next.t("topic_answer")), 
        width: 250 
    },
    {
        field: "createdAt",
        headerName: (i18next.t("topic_created_at")),
        width: 250,
    },
    {
        field: "action",
        headerName: (i18next.t("topic_action")),
        width: 200,
        renderCell: (params: any) => {
            return (
                <>
            <Link to={"/topics/update/" + params.id}>
                <span className={classes.topicUpdate}>{t('topic_update')}</span>
            </Link>
            <DeleteOutline
              className={classes.topicDelete}
              onClick={() => handleDelete(params.id)}
              
            />
            </>
            );
        }
    },
  ];
  
  return (
    <div style={{ height: 700, width: '100%' }}>
      <div>
        <Typography className={classes.topicTitle} color="primary" align="center" variant="h5">{t('topics')}</Typography>
      </div>
      <div>
        <Button className={classes.button} color="secondary" component={Link} to="/topics/create">{t('topic_create_new_topic')}</Button>
      </div>
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
  );
}
const useStyles = makeStyles(() => ({
  topicUpdate: {
    width: '100%',
    display: 'flex',
    marginRight: '20px',
    color: 'green',
  },
  topicDelete: {
    color: 'red',
    marginRight: '20px',
    cursor: 'pointer'
  },
  topicTitle: {
    marginTop: '25px',
    marginBottom: '15px',
},
button: {
  marginLeft: '850px',
  fontSize: '15px',
}
}));

export default Topics;