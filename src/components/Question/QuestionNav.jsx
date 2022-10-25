import PropTypes from 'prop-types';
import { Button, ButtonGroup, Container } from '@material-ui/core'
import { KeyboardArrowRightOutlined, KeyboardArrowLeftOutlined } from '@material-ui/icons'
import { useStyles } from '../styles'
import { previousQuestion, nextQuestion, isPresent } from '../../utils'
const QuestionNav = ({ setQuestionIndex, questionIndex, questions, attemptedNumbers }) => {
    const classes = useStyles();
    const size = questions.length
    return (
        <div>
            <div className={classes.mc}>
                <Container>
                    <ButtonGroup className={classes.mc} color="primary" size="small">
                        <Button onClick={() => setQuestionIndex(previousQuestion(questionIndex, size))} startIcon={<KeyboardArrowLeftOutlined />}>Previous</Button>
                        <Button onClick={() => setQuestionIndex(nextQuestion(questionIndex, size))} endIcon={<KeyboardArrowRightOutlined />}>Next</Button>
                    </ButtonGroup>
                </Container>
            </div>
            <div className={classes.mc}>
                <Container>
                    <ul >
                        {questions.map((question, index) => (<Button size="small" variant={isPresent(attemptedNumbers, index + 1) ? "contained" : 'outlined'} color={index === questionIndex ? 'inherit' : 'secondary'} key={index} onClick={() => setQuestionIndex(index)}>{index + 1}</Button>))}
                    </ul>
                </Container>
            </div>
        </div>
    )
}
QuestionNav.propTypes = {
    setQuestionIndex: PropTypes.func,
    questions: PropTypes.array,
    questionIndex: PropTypes.number,
    attemptedNumbers: PropTypes.array,
};
export default QuestionNav