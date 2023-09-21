import { Doughnut } from 'react-chartjs-2'
import React from 'react'
import { progressPieOptions, progressPieData } from '../constants/statisticsConstants'
import { PieChartProps } from '../types/props'

/**
 * @component
 * @desc This component renders a single pie chart.
 * @param {PieChartProps} props
 */
const ProgressPieChart: React.FC<PieChartProps> = ({ children, datasets }) => {
  return (
    <div style={styles.relative}>
      {/**height to width ratio is 2:1 */}
      <Doughnut
        height={150}
        width={300}
        data={{ ...progressPieData, datasets }}
        options={progressPieOptions}
      />
      <div style={styles.pieContainer}>{children}</div>
      <div id='legend' />
    </div>
  )
}

ProgressPieChart.defaultProps = {
  children: undefined,
  datasets: [
    {
      data: [4.5, 0.5],
      backgroundColor: ['green', 'white'],
      // hoverBackgroundColor: 'blue',
    },
  ],
}

interface IStyles {
  pieContainer: React.CSSProperties
  relative: React.CSSProperties
}
const styles: IStyles = {
  pieContainer: {
    width: '40%',
    height: '40%',
    top: '50%',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  relative: {
    position: 'relative',
  },
}

export default ProgressPieChart
