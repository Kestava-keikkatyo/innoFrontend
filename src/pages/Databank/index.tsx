import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Spacing from '../../components/Spacing'

export interface DatabankProps {}

const TriangleCard = ({ index }: { index: number }) => {
  const num1 = ((index * 10) % 175) + 80
  const num2 = ((index * 25) % 175) + 80
  const num3 = ((index * 50) % 175) + 80
  const accentColor = `rgba(
    ${num1},
    ${num2},
    ${num3},
    200)`
  const bgColor = `rgba(
      ${255 - num1},
      ${255 - num2},
      ${255 - num3},
      200)`
  return (
    <div className="triangle-card" style={{ backgroundColor: bgColor }}>
      <div className="triangle" style={{ backgroundColor: accentColor }}></div>
      <h2 className="triangle-h2">Triangle</h2>
      <p className="triangle-p">
        A triangle is a polygon with three edges and three vertices. It is one
        of the basic shapes in geometry...
      </p>
      <div className="triangle-content">
        <Link to="/" style={{ backgroundColor: accentColor }}>
          More
        </Link>
      </div>
    </div>
  )
}
const Databank: React.FC<DatabankProps> = () => {
  // const todoColor = `rgba(${(index*10%175)+80},${(index*25%175)+80},${(index*50%175)+80},200)`
  return (
    <div>
      <Spacing m2 />
      <Typography variant="h1" className='header3'>Artikkelit</Typography>
      <Grid container>
        {Array.from(Array(10)).map((_, i: number) => (
          <Grid item xs={12} sm={6} md={4} key={i} className="triangle-container">
            <TriangleCard index={i + 4} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Databank
