import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
import makeStyles from '@mui/styles/makeStyles';
const useStyles = makeStyles(() => ({
  chart: {
    margin: '20px',
    padding: '30px',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)'
  },
  chartTitle: {
    marginBottom: '20px'
  }
}));

const Chart: React.FC<any> = () => {
  const classes = useStyles();
  const data = [
    {
      name: 'Jan',
      activeUser: 4030,
      deActiveUser: 2100,
    },
    {
      name: 'Feb',
      activeUser: 3055,
      deActiveUser: 1256,
    },
    {
      name: 'Mar',
      activeUser: 2777,
      deActiveUser: 2400,
    },
    {
      name: 'Apr',
      activeUser: 2980,
      deActiveUser: 1360,
    },
    {
      name: 'May',
      activeUser: 5440,
      deActiveUser: 1207,
    },
    {
      name: 'Jun',
      activeUser: 2390,
      deActiveUser: 1415,
    },
    {
      name: 'Jul',
      activeUser: 3490,
      deActiveUser: 1817,
    },
    {
      name: 'Aug',
      activeUser: 3890,
      deActiveUser: 1933,
    },
    {
      name: 'Sep',
      activeUser: 4749,
      deActiveUser: 1254,
    },
    {
      name: 'Oct',
      activeUser: 5690,
      deActiveUser: 1519,
    },
    {
      name: 'Nov',
      activeUser: 5090,
      deActiveUser: 1933,
    },
    {
      name: 'Dec',
      activeUser: 6949,
      deActiveUser: 1254,
    }
  ];
  return (
  <div className={classes.chart}>
    <h3 className={classes.chartTitle}>USER ANALYTICS</h3>
    <ResponsiveContainer width="100%" aspect={4/ 1}>
      <LineChart data={data}>
        <XAxis dataKey="name" stroke="#5550bd" />
        <Line type="monotone" dataKey="activeUser" stroke="#5550bd" />
        <Line type="monotone" dataKey="deActiveUser" stroke="#82ca9d" />
        <Tooltip />
        <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  </div>
  );
};

export default Chart;