//REACT HOOKS 
import { useState, useEffect } from 'react'
//REACT-ROUTER-DOM
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
//MATERIAL UI
import { Container, ThemeProvider, Button, CardContent, Typography,  Paper, Grid, Card,  ButtonGroup } from '@material-ui/core'
import PaystackPop from '@paystack/inline-js'
//FILES
//  1  . HOOKS
import { theme, useStyles } from './components/styles'
//  2  .FUNCTIONS
import { isPresent, handleChoice, handleSubmit } from './utils'
//  3.  COMPONENTS
import { AppHeader, Notification, Skeleton } from './components'
//ASSESTS
import { QuestionCardTop, Options, QuestionNav, Timer } from './components/Question'
//PAGES
// import { Question, Home, Dashboard, TestParams, Results, Review, Checkout } from './pages'
import { payWithPaystack } from './utils'
import TestParams from './TestParams'
import Dashboard from './Dashboard'
import Hero from './Hero'
import Form from './Form'
import Questions from './Questions'

//DUMMY DATA 
import dummyData from './dummyData'
// const dummyStudent = {
//   userName: 'JohnDoe',
//   email: "johnDoe@example.com",
//   history: [{
//     subject: 'Biology',
//     score: 56,
//     timeTaken: new Date().toISOString()
//   },
//   {
//     subject: 'Physics',
//     score: 78,
//     timeTaken: new Date().toISOString()
//   },
//   {
//     subject: 'Biology',
//     score: 75,
//     timeTaken: new Date().toISOString()
//   },
//   {
//     subject: 'Chemistry',
//     score: 80,
//     timeTaken: new Date().toISOString()
//   },
//   {
//     subject: 'Biology',
//     score: 67,
//     timeTaken: new Date().toISOString()
//   },
//   {
//     subject: 'Chemistry',
//     score: 56,
//     timeTaken: new Date().toISOString()
//   },
//   {
//     subject: 'Physics',
//     score: 45,
//     timeTaken: new Date().toISOString()
//   },
//   {
//     subject: 'Chemistry',
//     score: 70,
//     timeTaken: new Date().toISOString()
//   },  {
//     subject: 'Physics',
//     score: 82,
//     timeTaken: new Date().toISOString()
//   },  {
//     subject: 'Biology',
//     score: 50,
//     timeTaken: new Date().toISOString()
//   },
// ]
// }

const dummyStudent = null


const App = () => {
  //STATES
  const [student, setStudent] = useState(dummyStudent)
  const [testParams, setTestParams] = useState({ subject: '', year: '', examtype: 'utme' })
  const [notification, setNotification] = useState({ show: true, msg: 'Testing 123', type: 'danger' })
  const [questions, setQuestions] = useState(dummyData);
  const [timer, setTimer] = useState({ hour: 0, minute: 0, second: 0 })
  const [attempts, setAttempts] = useState([])
  const [marked, setMarked] = useState({})
  const [questionIndex, setQuestionIndex] = useState(0)
  const [attemptedNumbers, setAttemptedNumbers] = useState([])
  const [attemptedAnswers, setAttemptedAnswers] = useState([])
  const [selectedAnswers, setSelectedAnswers] = useState([])

  const reviewResults = {
    failedNumbers: marked?.wrong?.length > 0 ? marked?.wrong?.map((mark) => mark.number) : [],
  }
  const [reviewIndex, setReviewIndex] = useState(reviewResults.failedNumbers[0] - 1)
  const choices = marked?.wrong?.filter((mark) => {
    if (reviewIndex + 1 === mark.number) {
      return mark.userAnswer
    }
    return ''
  })
  const wrongChoice = choices?.length > 0 && choices[0]?.userAnswer


  //CONSTANTS
  const currentQuestion = questions.length > 0 && questions[questionIndex]
  const answers = questions?.map((question) => question.answer)
  const { question, option, image: questionImage } = currentQuestion
  const answeredNumber = isPresent(attemptedNumbers, questionIndex + 1) ? 'contained' : 'text'
  //FUNCTION VALUES -- CHOICE HANDLER
  const setters = { setSelectedAnswers, setAttemptedNumbers, setAttemptedAnswers, setAttempts }
  const values = { attemptedNumbers, questionIndex, attemptedAnswers, selectedAnswers, attempts }
  const choiceHandler = (e) => handleChoice(e, setters, values)
  //FUNCTION VALUES -- SUBMIT HANDLER 
  const handleSetters = { setTimer }
  const handleValues = { timer, attempts, answers, testParams, student }
  const submitHandler = () => { setMarked(handleSubmit(handleSetters, handleValues)) }
  //COMPONENT PROPS
  const questionTopProps = { answeredNumber, questionIndex, questionImage, question }
  const optionsProps = { option, choiceHandler, attempts, questionIndex }
  const navProps = { setQuestionIndex, questionIndex, questions, attemptedNumbers, answeredNumber }
  const { correct, wrong } = marked

  useEffect(() => {
    const login = JSON.parse(localStorage.getItem('student'))
    if (login) {
      setStudent(login)
    }
  }, [])
  const classes = useStyles();

  const percentage = ((marked?.correct?.length / 40) * 100).toFixed(2)
  // useEffect(() => {
  //   if (!marked || !marked?.correct?.length) {
  //     return
  //   }
  //   else {
  //     setUserHistory([...userHistory, { id: marked?.timeTaken, subject: marked?.subject, scores: percentage, timeTaken: marked?.timeTaken }])
  //   }
  // }, [])

  const noClick = () => {
    return
  }
  const reviewOptionProps = { option, noClick, attempts, questionIndex }

  return (
    < Router >
      {/* <Route exact path="/signup" element={!student ? <Home setNotification={setNotification} setStudent={setStudent} /> : <Navigate to='/' />} /> */}
      <ThemeProvider theme={theme}>
        <Container>
          <AppHeader setStudent={setStudent} student={student} />
          {notification.show &&
            <Notification notification={notification} setNotification={setNotification} setQuestions={setQuestions}/>
          }
          <div>
            <Routes>
              {/**FORM AND HERO */}
              <Route exact path="/" element={!student ?
                <Grid container spacing={3} justifyContent="center" align="center" >
                  <Hero />
                  <Form setNotification={setNotification} setStudent={setStudent}/>
                </Grid>
                : <Navigate to='/dashboard' />} />
              {/**DASHBOARD */}
              <Route exact path="/dashboard" element={student ?
                <Dashboard student={student} />
                : <Navigate to='/' />} />
              {/**TEST PARAMETERS */}
              <Route exact path="/params" element={student ?
                <TestParams setNotification={setNotification} setTimer={setTimer} testParams={testParams} setTestParams={setTestParams}/>
                : <Navigate to='/' />} />
              {/**TEST QUESTIONS*/}
              <Route exact path="/questions" element={student ?
                <Questions questionTopProps={questionTopProps} optionProps={optionProps} navProps={navProps} submitHandler={submitHandler}/>
                : <Navigate to='/' />} />
              {/**TEST RESULTS*/}
              <Route exact path="/results" element={student ?
                <Paper>
                  <Container>
                    <Typography align="center" variant="body2">You Attempted : <Button component="p" color="secondary" disableElevation>{attempts.length}</Button> Questions </Typography>
                    <Typography align="center" variant="body2">You Failed   <Button color="primary" disableElevation>{wrong?.length}</Button> Questions </Typography>
                    <ul className={classes.flex}>
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
                    <Container className={classes.flex}>
                      <Link to="/">
                        <Button className={classes.mc} variant='contained' color="primary" size="small" type="submit">Go back to Dashboard</Button>
                      </Link>
                      <Link to="/checkout">
                        <Button className={classes.mc} variant='contained' color="secondary" size="small" type="submit">Tip the developer</Button>
                      </Link>
                    </Container>
                  </Container>
                </Paper>
                : <Navigate to='/' />} />
              {/**TEST REVIEW*/}
              <Route exact path="/review" element={student ?
                <div className={classes.mc}>
                  <Paper>
                    <Container>
                      <Card elevation={3}>
                        {questions.length === 0 ? <Typography>Nothing to Review</Typography> :
                          <CardContent>
                            <QuestionCardTop questionTopProps={questionTopProps} />
                            <Options optionsProps={reviewOptionProps} />
                          </CardContent>
                        }
                        <Container>
                          <div className={classes.my}>
                            {reviewResults.failedNumbers.map((failedNum, index) => (
                              <Button key={index} onClick={() => setQuestionIndex(failedNum - 1)} variant='contained' color={reviewResults.failedNumbers[index] === reviewIndex + 1 ? "secondary" : 'primary'}>{failedNum}</Button>
                            ))}
                          </div>
                        </Container>
                        <Container>
                          {/* <Typography className={classes.my}>You chose : </Typography><Chip name={wrongChoice} color="secondary" avatar={<FaTimes style={{ color: "red" }} />} label={wrongChoice?.toUpperCase()} /> */}
                        </Container>
                        <Container className={classes.my}>
                          {/* <Link to="/checkout"> */}
                          <Button className={classes.mc} variant='contained' color="primary" size="small" type="submit">Tip the Developer</Button>
                          {/* </Link> */}
                          {/* <Link to="/"> */}
                          <Button className={classes.mc} variant='contained' color="secondary" size="small" type="submit">Go to Dashboard</Button>
                          {/* </Link> */}
                        </Container>
                      </Card>
                    </Container>
                  </Paper>
                </div>
                : <Navigate to='/' />} />    
            </Routes>
          </div>
        </Container>
      </ThemeProvider>
    </Router >
  )
}

export default App;
