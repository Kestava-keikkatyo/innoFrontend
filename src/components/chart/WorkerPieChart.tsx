import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts'
import { fetchMyFeelings } from '../../actions/myFeelingActions'
import { IRootState } from '../../utils/store'
import { useTranslation } from 'react-i18next'

type Props = {
  cx: number
  cy: number
  midAngle: number
  innerRadius: number
  outerRadius: number
  percent: number
}

export const WorkerPieChart: React.FC = () => {
  const dispatch = useDispatch()

  const feelingsChartData = useSelector((state: IRootState) => {
    const { t } = useTranslation()

    const { myFeelings } = state.myFeeling

    const chartData: { [key: number]: number } = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    }

    const feelingNames = [
      t('dissatisfied'),
      t('unhappy'),
      t('satisfied'),
      t('happy'),
      t('quite_happy'),
    ]

    myFeelings.forEach((feeling) => {
      if (feeling.feeling) chartData[feeling.feeling] += 1
    })

    return Object.entries(chartData).map((entry) => ({
      name: feelingNames[parseInt(entry[0]) - 1],
      value: entry[1],
    }))
  })
  console.log(feelingsChartData)
  useEffect(() => {
    dispatch(fetchMyFeelings())
  }, [dispatch])

  const COLORS = ['#bf2608', '#FFBB28', '#FF8042', '#0088FE', '#00C49F']
  const RADIAN = Math.PI / 180

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: Props) => {
    if (!percent) return null
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)
    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <ResponsiveContainer width='90%' height='90%'>
      <PieChart width={300} height={300}>
        <Pie
          data={feelingsChartData}
          cx='50%'
          cy='50%'
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill='#8884d8'
          dataKey='value'
        >
          {feelingsChartData.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default WorkerPieChart
