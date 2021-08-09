import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import {
  // Bar,
  Line,
  Pie,
  //defaults
} from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { updateDataSet } from '../../actions/feelingActions';
//import feelingService from '../../services/feelingService';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
/**
 * @deprecated ### NOT IN USE ###
 * @component
 * @desc
 * Displays Line and Pie  chart in statistics page.
 * Line chart has a row of buttons on top of it.
 * @todo make buttons work.
 */
const Chart = () => {
  const { feelingDataSet, feelings } = useSelector(
    (state: any) => state.feeling
  );
  const dispatch = useDispatch();

  console.log('feelings', feelings);
  console.log('feelingDataSet:', feelingDataSet);

  const classes = useStyles();

  const [moodCounts, setMoodCounts] = React.useState([0, 0, 0, 0, 0]);

  const [labels, setLabels] = React.useState([
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
  ]);

  const getFeelingsValues = () => {
    const copyOfMoodCounts: any = [0, 0, 0, 0, 0];
    feelings.map((feel: any) => {
      switch (feel.value) {
        case 0:
          return copyOfMoodCounts[0]++;

        case 1:
          return copyOfMoodCounts[1]++;

        case 2:
          return copyOfMoodCounts[2]++;

        case 3:
          return copyOfMoodCounts[3]++;

        case 4:
          return copyOfMoodCounts[4]++;

        default:
          return null;
      }
    });
    setMoodCounts(copyOfMoodCounts);
  };

  const backgroundColors = [
    'rgba(255, 99, 132, 0.5)',
    'rgba(54, 162, 235, 0.5)',
    'rgba(255, 206, 86, 0.5)',
    'rgba(75, 192, 192, 0.5)',
    'rgba(153, 102, 255, 0.5)',
  ];

  const borderColors = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
  ];

  const handleClick = (period: string) => {
    switch (period) {
      case '1w':
        return setLabels(['Mon', 'Tue', 'Wed', 'Thu', 'Fri']);
      case '1m':
        return setLabels([
          '1th',
          '5th',
          '10th',
          '15th',
          '20th',
          '25th',
          '30th',
        ]);
      case '6m':
        return setLabels(['1', '2', '3', '4', '5', '6']);
      case '1y':
        return setLabels([
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ]);
      default:
        return null;
    }
  };

  useEffect(() => {
    dispatch(updateDataSet());
    getFeelingsValues();
  }, [feelings, dispatch]);

  console.log('moodCounts', moodCounts);

  return (
    <div className="worker-line-chart">
      <Grid item xs={12}>
        <Accordion className={classes.card} variant="outlined">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography gutterBottom variant="h5">
              Mood History
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Button
              onClick={() => handleClick('1w')}
              variant="outlined"
              color="primary"
              size="small"
            >
              1w
            </Button>
            <Button
              onClick={() => handleClick('1m')}
              variant="outlined"
              color="primary"
              size="small"
            >
              1m
            </Button>
            <Button
              onClick={() => handleClick('6m')}
              variant="outlined"
              color="primary"
              size="small"
            >
              6m
            </Button>
            <Button
              onClick={() => handleClick('1y')}
              variant="outlined"
              color="primary"
              size="small"
            >
              1y
            </Button>
          </AccordionDetails>

          <AccordionDetails>
            <Line
              data={{
                labels: labels,
                datasets: [
                  {
                    label: 'Mood History',
                    data: moodCounts,
                    backgroundColor: backgroundColors,
                    borderColor: borderColors,
                    borderWidth: 1,
                  },
                ],
              }}
              width={600}
              height={400}
              options={{
                responsive: true,
                title: {
                  display: true,
                  text: 'Mood stats',
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: 'bottom',
                },
                maintainAspectRatio: false,
                layout: {
                  padding: {
                    top: 5,
                    left: 15,
                    right: 15,
                    bottom: 15,
                  },
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                  xAxes: [
                    {
                      ticks: {
                        display: true,
                      },
                    },
                  ],
                },
              }}
            />
          </AccordionDetails>
        </Accordion>
      </Grid>

      <Grid item xs={12}>
        <Accordion className={classes.card} variant="outlined">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography gutterBottom variant="h5">
              Overall Moods
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Pie
              data={{
                labels: [
                  'Very Dissatisfied',
                  'Dissatisfied',
                  'Neutral',
                  'Satisfied',
                  'Very Satisfied',
                ],
                datasets: [
                  {
                    label: 'Mood Dataset',
                    data: moodCounts,
                    backgroundColor: backgroundColors,
                    borderColor: borderColors,
                    borderWidth: 1,
                  },
                ],
              }}
              width={500}
              height={500}
              options={{
                responsive: true,
                title: {
                  display: true,
                  text: 'Overall Moods',
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: 'bottom',
                },
                maintainAspectRatio: false,
                layout: {
                  padding: {
                    top: 5,
                    left: 15,
                    right: 15,
                    bottom: 15,
                  },
                },
                scales: {
                  yAxes: [
                    {
                      display: false, // hide yAxes
                      ticks: {
                        beginAtZero: true,
                        display: false, // hide yAxes's ticks
                      },
                      gridLines: {
                        display: false, // hide yAxes's grid lines
                        //color: 'rgba(0, 0, 0, 0)',
                      },
                    },
                  ],
                  xAxes: [
                    {
                      display: false,
                      ticks: {
                        display: false,
                      },
                      gridLines: {
                        display: false,
                      },
                    },
                  ],
                },
              }}
            />
          </AccordionDetails>
        </Accordion>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 300,
  },
  moodIcon: {
    width: 30,
    height: 30,
  },
  card: {
    margin: theme.spacing(2, 0),
  },
  accordion: {
    width: '100%',
    marginTop: 12,
    border: '1px solid #E0E0E0',
    borderRadius: 5,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
  },
  description: {
    fontSize: theme.typography.pxToRem(13),
    color: '#6C6C6C',
  },
}));

export default Chart;
