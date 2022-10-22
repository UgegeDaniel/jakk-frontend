import { useStyles } from './components/styles'
import { QuestionCardTop, Options, QuestionNav, Timer } from './components/Question'
import { Skeleton } from './components'
import { Container, Button, CardContent, Paper, Card } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { isPresent, handleChoice, handleSubmit } from './utils'
import { useState } from 'react'

const Questions = ({ timer, setTimer, questions, testParams, student, setMarked, attempts, setAttempts, setAttemptedNumbers, attemptedNumbers }) => {
    const [questionIndex, setQuestionIndex] = useState(0)
    const currentQuestion = questions.length > 0 && questions[questionIndex]

    //this array holds the numbers a user has attempted.
    const [attemptedAnswers, setAttemptedAnswers] = useState([])
    //this array holds the option a user has clicked.
    const [selectedAnswers, setSelectedAnswers] = useState([])
    //keeps a record of the option a user while on a current 

    const answeredNumber = isPresent(attemptedNumbers, questionIndex + 1) ? 'contained' : 'text'
    const answers = questions?.map((question) => question.answer)

    const { question, option, image: questionImage, section } = currentQuestion

    const classes = useStyles()
    const questionTopProps = { answeredNumber, questionIndex, questionImage, question, section }

    const setters = { setSelectedAnswers, setAttemptedNumbers, setAttemptedAnswers, setAttempts }
    const values = { attemptedNumbers, questionIndex, attemptedAnswers, selectedAnswers, attempts }
    const choiceHandler = (e) => handleChoice(e, setters, values)
    const optionsProps = { option, choiceHandler, attempts, questionIndex }
    const navProps = { setQuestionIndex, questionIndex, questions, attemptedNumbers, answeredNumber }
    const handleValues = { timer, attempts, answers, testParams, student }
    const handleSetters = { setTimer }
    const QUESTIONSTATES = { attemptedAnswers, selectedAnswers, attemptedNumbers, questionIndex, attempts }
    const submitHandler = () => { setMarked(handleSubmit(handleSetters, handleValues, QUESTIONSTATES)) }
    return (
        <div className={classes.mc}>
            {questions.length === 0 ? 
            
            <div>
            <Skeleton />
            <Link to="/params"><Button variant='contained' color="secondary" size="small" >Go back to Params</Button></Link>
            </div>
                :
                (<Paper>
                    <Container>
                        <Timer timer={timer} setTimer={setTimer} />
                        <Card elevation={3}>
                            <CardContent>
                                <QuestionCardTop questionTopProps={questionTopProps} />
                                <Options optionsProps={optionsProps} />
                            </CardContent>
                            <QuestionNav navProps={navProps} />
                            <Link to="/results">
                                <Button className={classes.mc} variant='contained' color="secondary" size="small" type="submit" onClick={submitHandler}>Finish and Submit</Button>
                            </Link>
                        </Card>
                    </Container>
                </Paper>)
            }
        </div>
    )
}

export default Questions