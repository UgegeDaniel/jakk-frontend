import PropTypes from 'prop-types';
import { Container, Button, Typography, Paper, ButtonGroup } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { useStyles } from '../components/styles'
const Results = ({ attempts, marked }) => {
  const classes = useStyles();
  const correct = marked.filter((mark) => mark.correct)
  const wrong = marked.filter((mark) => mark.wrong)
  const percentage = ((correct.length / 40) * 100).toFixed(2)
  return (
    <Paper>
      <Container>
        {[{ text: "You Attempted", msg: attempts.length }, { text: "You Failed", msg: wrong?.length }].map((item, index) => (
          <div className={classes.flex} key={index}> <Typography align="center" variant="body2">{item.text}: </Typography> <Button component="p" color="secondary" disableElevation>{item.msg}</Button> <Typography> Questions </Typography> </div>))}
        {wrong?.length !== 0 && <div>
          <div className={classes.flex}>
            {wrong?.map((item, index) => (<Button key={index} align="center" variant="contained" className={classes.mc} color="primary" size="small">{item.number}</Button>))}
          </div>
          <Link to="/review">
            <div className={`${classes.my} ${classes.flex}`}>
              <Button className={classes.my} variant='contained' color="secondary" size="small" type="submit">See correct answers</Button>
            </div>
          </Link>
        </div>}
        <Typography align="right" variant="body2">You scored :
          <ButtonGroup className={classes.ml} color="primary" size="small" variant="contained"> <Button color="secondary" >{correct?.length}</Button> <Button color="primary" >40</Button> </ButtonGroup>
        </Typography>
        <div className={classes.my}>
          <Typography align="right" className={classes.mc} gutterbottom="true">  Your percentage score is : <Button variant="contained" color="primary" disableElevation size="small">{percentage}%</Button> </Typography>
        </div>
        <Container className={`${classes.my} ${classes.flex}`}>
          <Link to="/"> <Button className={classes.mc} variant='contained' color="primary" size="small" type="submit">Go back to Dashboard</Button> </Link>
        </Container>
      </Container>
    </Paper>
  )
}
Results.propTypes = {
  attempts: PropTypes.array,
  marked: PropTypes.array,
};
export default Results