import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { Container, Button, CardContent, Paper, Card } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom'
import { useStyles } from '../components/styles'
import { QuestionCardTop, Options, QuestionNav, Timer } from '../components/Question'
import { Skeleton } from '../components'
import { isPresent, handleSubmit, handleChoice } from '../utils'

const Questions = ({ questionPageProps }) => {
    const classes = useStyles()
    const navigate = useNavigate()
    const { timer, setTimer, questions, testParams, student, setMarked, attempts, setAttempts, attemptedNumbers, setAttemptedNumbers, setSubmitted } = questionPageProps
    const [questionIndex, setQuestionIndex] = useState(0)
    const currentQuestion = questions.length > 0 && questions[questionIndex]
    const answers = questions?.map((question) => question.answer)
    const [attemptedAnswers, setAttemptedAnswers] = useState([])  //this array holds the options a user has clicked.
    const [selectedAnswers, setSelectedAnswers] = useState([])   //keeps a record of the option a user has clicked on while on a question 
    const answeredNumber = isPresent(attemptedNumbers, questionIndex + 1) ? 'contained' : 'text' //returns contained or text depending on whether or not a user has chosen an option

    const submitValues = { attempts, answers, testParams, student, setSubmitted, setMarked }
    const choiceValues = { setSelectedAnswers, attemptedNumbers, questionIndex, setAttemptedAnswers, attemptedAnswers, selectedAnswers, setAttemptedNumbers, attempts, setAttempts }
    const { hour, minute, second } = timer
    useEffect(() => {
        if (questions.length > 0) {
            if (hour === 0 && minute === 0 && second === 0) {
                handleSubmit(submitValues)
                navigate('/results')
            }
        }
    }, [hour, minute, second ,questions.length ])
    return (
        <div className={classes.mc}>
            {questions.length === 0 ?
                <div>
                    <Skeleton />
                    <Link to="/params"><Button variant='contained' color="primary" size="small" >Go back to Test Params</Button></Link>
                </div>
                :
                (<Paper>
                    <Container>
                        <Timer timer={timer} setTimer={setTimer} setSubmitted={setSubmitted} />
                        <Card elevation={3}>
                            <CardContent>
                                <QuestionCardTop answeredNumber={answeredNumber} questionIndex={questionIndex} currentQuestion={currentQuestion} />
                                <Options currentQuestion={currentQuestion} handleChoice={(e) => handleChoice(e, choiceValues)} attempts={attempts} questionIndex={questionIndex} />
                            </CardContent>
                            <QuestionNav setQuestionIndex={setQuestionIndex} questionIndex={questionIndex} questions={questions} attemptedNumbers={attemptedNumbers} />
                            <Link to="/results">
                                <Button className={classes.mc} variant='contained' color="secondary" size="small" type="submit" onClick={() => handleSubmit(submitValues)}>Finish and Submit</Button>
                            </Link>
                        </Card>
                    </Container>
                </Paper>)
            }
        </div>
    )
}
Questions.propTypes = {
    questionPageProps: PropTypes.object,
};
export default Questions