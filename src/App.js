import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container, ThemeProvider } from '@material-ui/core'
import { theme } from './components/styles'
import { AppHeader, Notification } from './components'
import { Question, Home, Dashboard, TestParams, Results, Review, Checkout } from './pages'
function App() {
  const [notification, setNotification] = useState({ show: false, msg: '', type: 'danger' })
  const [testParams, setTestParams] = useState({ subject: '', year: '', examtype: 'utme' })
  const [questions, setQuestions] = useState([]);
  const [timer, setTimer] = useState({ hour: 0, minute: 0, second: 0 })
  const [attempts, setAttempts] = useState([])
  const [marked, setMarked] = useState({})
  const [student, setStudent] = useState({})

  useEffect(() => {
    const login = JSON.parse(localStorage.getItem('student'))
    if (login) {
      setStudent(login)
   }
 }, []) 

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Container>
          <AppHeader setStudent={setStudent} student={student} />
          {notification.show
            &&
            <Notification notification={notification} setNotification={setNotification} />
          }
          <div>
            <Routes>
              <Route exact path="/" element={student ? <Dashboard marked={marked} /> : <Navigate to='/login' />} />
              <Route exact path="/testparams" element={student ? <TestParams setQuestions={setQuestions} setTimer={setTimer} testParams={testParams} setTestParams={setTestParams} setNotification={setNotification}/> : <Navigate to='/login' />} />
              <Route exact path="/questions" element={student ? <Question questions={questions} timer={timer} setTimer={setTimer} testParams={testParams} attempts={attempts} setAttempts={setAttempts} setMarked={setMarked} /> : <Navigate to='/login' />} />
              <Route exact path="/results" element={student ? <Results attempts={attempts} marked={marked} /> : <Navigate to='/login' />} />
              <Route exact path="/checkout" element={student ? <Checkout setNotification={setNotification} /> : <Navigate to='/login' />} />
              <Route exact path="/review" element={student ? <Review marked={marked} /> : <Navigate to='/login' />} />
              <Route exact path="/login" element={!student ? <Home loginRoute={true} setNotification={setNotification} setStudent={setStudent} /> : <Navigate to='/' />} />
              {/* <Route exact path="/signup" element={!student ? <Home setNotification={setNotification} setStudent={setStudent} /> : <Navigate to='/' />} /> */}
            </Routes>
          </div>
        </Container>
      </ThemeProvider>
    </Router >
  );
}

export default App;
