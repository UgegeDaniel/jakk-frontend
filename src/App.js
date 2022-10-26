import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container, ThemeProvider, } from '@material-ui/core'
import { fetchQuestions } from './api'
import { theme } from './components/styles'
import { AppHeader, Notification } from './components'
import { Auth, Dashboard, TestParams, Questions, Results, Review } from './pages'

const App = () => {
  const [student, setStudent] = useState(null)
  const [testParams, setTestParams] = useState({ subject: '', year: '', examtype: 'utme' })
  const [notification, setNotification] = useState({ show: false, msg: '', type: 'danger' })
  const [questions, setQuestions] = useState([]);
  const [reviewQuestions, setReviewQuestions] = useState([])
  const [timer, setTimer] = useState({ hour: 0, minute: 0, second: 0 })
  const [attempts, setAttempts] = useState([])
  const [marked, setMarked] = useState([])
  const [attemptedNumbers, setAttemptedNumbers] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const questionPageProps = { timer, setTimer, questions, testParams, student, setMarked, 
    attempts, setAttempts, setAttemptedNumbers, attemptedNumbers, setSubmitted }

  useEffect(() => {
    const login = JSON.parse(localStorage.getItem('student'))
    if (login) {
      setStudent(login)
    }
  }, [])

  //TEST STARTED
  useEffect(() => {
    const { subject, year, examtype } = testParams
    if (subject && year) {
      const fetchData = async () => {
        const data = await fetchQuestions(subject, year, examtype)
        if (data?.length > 0) {
          setQuestions(data)
          setReviewQuestions(data)
          setTimer({ hour: 2, minute: 0, second: 0 })
        }
        else {
          return
        }
      }
      fetchData()
    }
  }, [testParams])


  //TEST CONCLUDED
  useEffect(()=>{
    if(submitted){
      const testSubmitted = () => {
        const login = JSON.parse(localStorage.getItem('student'))
        if (login) {
          setStudent(login)
        }
        localStorage.removeItem('timer')
        setQuestions([])
        setTestParams({ subject: '', year: '', examtype: 'utme' })
        setTimer({ hour: 0, minute: 0, second: 0 })
        setSubmitted(false)
      }
      testSubmitted()
    }
  },[submitted, timer])
  
  return (
    < Router >
      <ThemeProvider theme={theme}>
        <Container>
          <AppHeader setStudent={setStudent} student={student} />
          {notification.show &&
            <Notification notification={notification} setNotification={setNotification} />
          }
          <Container>
            <Routes>
              <Route exact path="/" element={!student ?
                <Auth setStudent={setStudent} setNotification={setNotification} />
                : <Navigate to='/dashboard' />} />
              <Route exact path="/dashboard" element={student ?
                <Dashboard student={student} />
                : <Navigate to='/' />} />
              <Route exact path="/params" element={student ?
                <TestParams setNotification={setNotification} setTimer={setTimer} testParams={testParams} setTestParams={setTestParams} />
                : <Navigate to='/' />} />
              <Route exact path="/questions" element={student ?
                <Questions questionPageProps={questionPageProps} />
                : <Navigate to='/' />} />
              <Route exact path="/results" element={student ?
                <Results marked={marked} attempts={attempts} />
                : <Navigate to='/' />} />
              <Route exact path="/review" element={student ?
                <Review marked={marked} reviewQuestions={reviewQuestions} attempts={attempts}/>
                : <Navigate to='/' />} />
            </Routes>
          </Container>
        </Container>
      </ThemeProvider>
    </Router >
  )
}

export default App;
