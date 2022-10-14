import { Paper, Container, Typography, Button, ButtonGroup } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useStyles } from '../components/styles'

const Results = ({ attempts, marked }) => {
  const { correct, wrong } = marked
  const percentage = ((correct?.length / 40) * 100).toFixed(2)
  const classes = useStyles();
  return (
    <Paper>
      <Container>
        <Typography align="center" variant="body2">You Attempted : <Button component="p" color="secondary" disableElevation>{attempts.length}</Button> Questions </Typography>
        <Typography align="center" variant="body2">You Failed   <Button color="primary" disableElevation>{wrong?.length}</Button> Questions </Typography>
        <ul>
          {wrong?.map((item, index) => (<Button key={index} align="center" variant="contained" className={classes.mc} color="primary" size="small">{item.number}</Button>))}
        </ul>
        {wrong?.length !== 0 &&
          <Link to="/review">
            <div className={classes.my}>
              <Button className={classes.my} variant='contained' color="primary" size="small" type="submit">See correct answers</Button>
            </div>
          </Link>
        }
        <Typography align="right" variant="body2">You scored :
          <ButtonGroup className={classes.ml} color="primary" size="small" variant="contained">
            <Button color="secondary" >{correct?.length}</Button>
            <Button color="primary" >40</Button>
          </ButtonGroup>
        </Typography>
        <div className={classes.my}>
          <Typography align="right" className={classes.mc} gutterbottom="true">
            Your percentage score is : <Button variant="contained" color="primary" disableElevation size="small">{percentage}%</Button>
          </Typography>
        </div>
        <Container className={classes.my}>
          <Link to="/">
            <Button className={classes.mc} variant='contained' color="secondary" size="small" type="submit">Go back to Dashboard</Button>
          </Link>
          <Link to="/checkout">
            <Button className={classes.mc} variant='contained' color="primary" size="small" type="submit">Tip the developer</Button>
          </Link>
        </Container>
      </Container>
    </Paper>
  )
}
export default Results