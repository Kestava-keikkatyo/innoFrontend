import { Button } from '@material-ui/core';
import React from 'react';
import {Line} from 'react-chartjs-2';

const state = {
  labels: ['Mon', 'Tue', 'Wed',
           'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Mood',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [0, 2, 5, 3, 4, 4, 2]
    }
  ]
}

export default class Chart extends React.Component {
  render() {
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
          data={state}
          options={{
            title:{
              display:true,
              text:'Mood on scale 0-5 (higher is better)',
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
}