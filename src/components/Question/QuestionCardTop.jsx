import PropTypes from 'prop-types';
import { Typography, Button } from '@material-ui/core'
import { useStyles } from '../styles'
import parse from 'html-react-parser';
const QuestionCardTop = ({ answeredNumber, questionIndex, currentQuestion }) => {
    const classes = useStyles();
    const { image, question, section } = currentQuestion
    return (
        <div className={classes.my}>
            <Button variant={answeredNumber} color="primary" disableElevation>{questionIndex + 1}.</Button><br />
            <i>{section && section}</i>
            <div className={classes.mc}>
                {!image ? <Button className={classes.mc} variant='contained' color="secondary" size="small" type="submit">No Image available for this question</Button> : <img src={image} alt="question" />}
            </div>
            <Typography variant="body2" color="textSecondary">
                {parse(`${question}`)}
            </Typography>
        </div>
    )
}
QuestionCardTop.propTypes = {
    answeredNumber: PropTypes.string,
    currentQuestion: PropTypes.object,
    questionIndex: PropTypes.number,
};
export default QuestionCardTop