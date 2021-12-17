import React from 'react';

import { Link, makeStyles } from '@material-ui/core';

const GeneralInfo: React.FC<any> = () => {
  const classes = useStyles();
  return (
    <div className={classes.generalInfo}>
      <div className={classes.item}>
        <Link className={classes.title} href="/reportList">Reports</Link>  
        <div className={classes.container}>
          <span className={classes.latestUpdate}>Last updated</span>
        </div>
     </div>
     <div className={classes.item}>
     <Link className={classes.title} href="/feedbackList">Feedback</Link>
      <div className={classes.container}>
        <span className={classes.latestUpdate}>Last updated</span>
      </div>
     </div>
     <div className={classes.item}>
     <Link className={classes.title} href="/feelingList">Feelings</Link>
       <div className={classes.container}>
         <span className={classes.latestUpdate}>Last updated</span>
       </div>
     </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  generalInfo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  item: {
    flex: '1',
    margin: '0px 20px',
    padding: '30px',
    borderRadius: '10px',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
  },
  title: {
    fontSize: '30px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  container: {
    margin: '10px 0px',
    display: 'flex',
    alignItems: 'center'
  },
  latestUpdate: {
    fontSize: '20px',
    fontWeight: 400
  }
}));

export default GeneralInfo;