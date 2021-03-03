import { Doughnut } from "react-chartjs-2"
import React from 'react'

const options = {
  legend: {
    display: false,
    position: "right"
  },
  elements: {
    arc: {
      borderWidth: 0
    }
  },
  cutoutPercentage: 90,
  tooltips: {
    enabled: false
  },
  maintainAspectRatio : false
};

const data = {
  maintainAspectRatio: false,
  responsive: false,
  // labels: ["AVG: mood"],
};

const ProgressPieChart = ({children, datasets}) => {
  return (
    <div style={styles.relative}>
      {/**height to width ratio is 2:1 */}
      <Doughnut height={150} width={300} data={{...data, datasets}} options={options}/>
      <div style={styles.pieContainer}>
        {children}
      </div>
      <div id="legend" />
    </div>
  );
}

ProgressPieChart.defaultProps = {
  children: undefined,
  datasets: [
    {
      data: [4.5, 0.5],
      backgroundColor: ['green', 'white'],
      // hoverBackgroundColor: 'blue',
    }
  ]
}

const styles = {
  pieContainer: {
    width: "40%",
    height: "40%",
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    textAlign: "center"
  },
  relative: {
    position: "relative"
  }
};

export default ProgressPieChart