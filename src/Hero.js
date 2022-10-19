import { Container, Paper, Grid,} from '@material-ui/core'
import {  useStyles } from './components/styles'
import { classSvg, studySvg, examsSvg } from './assests'
const data = [classSvg]
const Hero = () => {
    const classes = useStyles()
  return (
    <Grid item xs={12} sm={6}>
    <Container>
      <Paper className={classes.imgPaper}>
        {data.map((item)=>(
        <Container className={classes.topImg}><img className={classes.img} src={item} alt={item}/></Container>
        ))}
      </Paper>
    </Container>
  </Grid>
  )
}

export default Hero