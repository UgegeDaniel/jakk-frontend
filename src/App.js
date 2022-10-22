import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container, ThemeProvider, Grid, } from '@material-ui/core'
import { fetchQuestions } from './api'

// import PaystackPop from '@paystack/inline-js'
// import { payWithPaystack } from './utils'
import { theme } from './components/styles'
import { AppHeader, Notification } from './components'
import TestParams from './TestParams'
import Dashboard from './Dashboard'
import Hero from './Hero'
import Form from './Form'
import Question from './Questions'
import Results from './Results'
import Review from './Review'

const App = () => {
  const [student, setStudent] = useState(null)
  const [testParams, setTestParams] = useState({ subject: '', year: '', examtype: 'utme' })
  const [notification, setNotification] = useState({ show: false, msg: '', type: 'danger' })
  const [questions, setQuestions] = useState([]);
  const [timer, setTimer] = useState({ hour: 0, minute: 0, second: 0 })
  const [attempts, setAttempts] = useState([])
  const [marked, setMarked] = useState({})
  const [attemptedNumbers, setAttemptedNumbers] = useState([])
  const questionPageProps = { timer, setTimer, questions, testParams, student, setMarked, attempts, setAttempts, setAttemptedNumbers, attemptedNumbers, setQuestions }

  useEffect(() => {
    const login = JSON.parse(localStorage.getItem('student'))
    if (login) {
      setStudent(login)
    }
  }, [])
  useEffect(() => {
    const { subject, year, examtype } = testParams
    if (subject && year) {
      const fetchData = async () => {
        const data = await fetchQuestions(subject, year, examtype)
        if (data?.length > 0) {
          setQuestions(data)
          setTestParams({ subject: '', year: '', examtype: 'utme' })
          setTimer({ hour: 2, minute: 0, second: 0 })
        }
        else {
          return
        }
      }
      fetchData()
    }
  }, [testParams])
  return (
    < Router >
      <ThemeProvider theme={theme}>
        <Container>
          <AppHeader setStudent={setStudent} student={student} />
          {notification.show &&
            <Notification notification={notification} setNotification={setNotification} />
          }
          <div>
            <Routes>
              <Route exact path="/" element={!student ?
                <Grid container spacing={3} justifyContent="center" align="center" > <Hero /> <Form setNotification={setNotification} setStudent={setStudent} /> </Grid>
                : <Navigate to='/dashboard' />} />
              <Route exact path="/dashboard" element={student ?
                <Dashboard student={student} />
                : <Navigate to='/' />} />
              <Route exact path="/params" element={student ?
                <TestParams setNotification={setNotification} setTimer={setTimer} testParams={testParams} setTestParams={setTestParams} />
                : <Navigate to='/' />} />
              <Route exact path="/questions" element={student ?
                <Question questionPageProps={questionPageProps} />
                : <Navigate to='/' />} />
              <Route exact path="/results" element={student ?
                <Results marked={marked} attempts={attempts} />
                : <Navigate to='/' />} />
              <Route exact path="/review" element={student ?
                <Review marked={marked} questions={questions} />
                : <Navigate to='/' />} />
            </Routes>
          </div>
        </Container>
      </ThemeProvider>
    </Router >
  )
}

export default App;
