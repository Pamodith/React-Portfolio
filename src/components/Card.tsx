import { Grid2 } from '@mui/material'
import "../assets/styles/sass/card/_card.scss"
import { cardProp } from '../types/type'

const Card = (props:cardProp) => {
  return (
    
    <Grid2 className="card-outer">
      <Grid2 className="card-inner">
        <Grid2 className={props.cardClassName}>
        {props.content}
        </Grid2>
      </Grid2>
    </Grid2>
  
  )
}

export default Card