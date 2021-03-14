import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import {Line} from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { updateDataSet } from '../../actions/feelingActions';

const Chart = () => {
  const { feelingDataSet, feeling } = useSelector((state: any) => state.feeling)
  const dispatch = useDispatch()
  useEffect( () => {
    dispatch(updateDataSet())
  }, [feeling, dispatch])

  console.log(feelingDataSet);
  return (
    <div className="worker-line-chart">
      <Button variant="outlined" color="primary" size="small">1w</Button>
      <Button variant="outlined" color="primary" size="small">1m</Button>
      <Button variant="outlined" color="primary" size="small">3m</Button>
      <Button variant="outlined" color="primary" size="small">6m</Button>
      <Button variant="outlined" color="primary" size="small">YTD</Button>
      <Button variant="outlined" color="primary" size="small">1y</Button>
      <Line
        height={350}
        data={feelingDataSet}
        options={{
          title:{
            display:true,
            text:'Mood on scale 0-3 (higher is better)',
            fontSize:20
          },
          legend:{
            display:true,
            position:'bottom'
          },
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
                top: 5,
                left: 15,
                right: 15,
                bottom: 15
            }
          },
        }}
      />
    </div>
  );
}

export default Chart