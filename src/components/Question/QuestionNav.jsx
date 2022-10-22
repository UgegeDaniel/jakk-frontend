import { Button, ButtonGroup, Container } from '@material-ui/core'
import { KeyboardArrowRightOutlined, KeyboardArrowLeftOutlined } from '@material-ui/icons'
import { previousQuestion, nextQuestion, isPresent } from '../../utils'
import { useStyles } from '../styles'
const QuestionNav = ({ navProps: { setQuestionIndex, questionIndex, questions, attemptedNumbers, answeredNumber } }) => {
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
                        {questions.map((question, index) => (<Button size="small" variant={isPresent(attemptedNumbers, index + 1) ? "contained" : 'outlined'} color={index === questionIndex ? 'textPrimary' : 'secondary'} key={index} onClick={() => setQuestionIndex(index)}>{index + 1}</Button>))}
                    </ul>
                </Container>
            </div>
        </div>
    )
}
export default QuestionNav

