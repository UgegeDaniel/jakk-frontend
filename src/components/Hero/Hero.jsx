import { Container, Paper, Grid, Typography } from '@material-ui/core'
import { useStyles } from '../styles'
const Hero = () => {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={6}>
      <Container className={classes.imgContainer}>
        <Paper className={classes.imgPaper}>
          <Typography className={classes.heroText} color="secondary">JAKK is a simple full stack application geared towards aiding students sitting for various O - Level Examinations with a progressive and accessible means of practicising. Students are required to sign up for a free account, take tests in over 17 subjects as their records over time are being displayed on a chart for a visual representation of their progress.</Typography>
        </Paper>
      </Container>
    </Grid>
  )
}
export default Hero