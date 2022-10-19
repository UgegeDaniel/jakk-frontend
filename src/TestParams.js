import { Container, Button, Typography, Chip, Paper, ButtonGroup } from '@material-ui/core'
import {  useStyles } from './components/styles'
import { BouncingLoader, Param } from './components'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { fetchQuestions, fetchSubjects, fetchYears } from './api'

const TestParams = ({ setTimer, setQuestions, setNotification, testParams, setTestParams }) => {
  const classes = useStyles()
  const { subject, year, examtype } = testParams
  const [subjects, setSubjects] = useState([])
  const [years, setYears] = useState([])
  const location = useLocation();
  const [path, setPath] = useState(location.pathname)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSubjects()
      const arrayOfData = Object.values(data)
      if (data && subjects.length === 0) {
        setSubjects(arrayOfData)
      } else {
        return
      }
    }
    fetchData()
    console.log(subjects)
  }, [subjects])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchYears(subject)
      if (subject && data.length > 0) {
        setYears(data.map((item) => item.examyear))
      } else {
        return
      }

    }
    fetchData()
  }, [subject, year, examtype])

  const handleStart = async (e) => {
    if (subject && year) {
      setPath('/questions')
      setTimer({ hour: 2, minute: 0, second: 0 })
      const data = await fetchQuestions(subject, year, examtype)
      if (data?.length > 0) {
        setQuestions(data)
        setTestParams({ subject: '', year: '', examtype: 'utme' })
      } else {
        return
      }
    } else {
      setNotification({ show: true, msg: 'please pick a subject and a year', type: "danger" })
      return
    }
  }
  return (
    <div>
      <Paper>
        <Container>
          <Typography color="secondary" variant="subtitle1" gutterBottom>Please pick a subject and examination year</Typography>
          <div className={classes.mc}>
            <Typography>Subject : </Typography>
            <Typography variant="caption" align="left" gutterBottom color="secondary" className={classes.inputExample}>Pick a subject to see available years
            </Typography>
            {subjects.length === 0 ? <BouncingLoader /> :
              (<Param items={subjects} testParams={testParams} setTestParams={setTestParams} className={classes.my} feild='subject' />)
            }
          </div>
          <div className={classes.mc}>
            <Typography>Year : </Typography>
            {years.length === 0 ? <BouncingLoader /> :
              (<Param items={years} testParams={testParams} setTestParams={setTestParams} className={classes.my} feild='year' />)
            }
          </div>
          <div className={classes.mc}>
            <Typography>Exam Type : </Typography>
            <ButtonGroup className={classes.mc} variant='contained' color="primary" size="small" disabled disableElevation>
              <Button>UTME</Button>
            </ButtonGroup>
          </div>
          <Typography>You have chosen to take a test in
            <Chip color="primary" label={subject} />
            of <Chip color="primary" label={examtype} />Examinations
            Year <Chip color="primary" label={year} />
          </Typography>
          <Typography>Allotted time :
            <Chip color="primary" label="2 hours" />
          </Typography>
          <div className={classes.flex}>
            <Link to='/'>
              <Button className={classes.mc} variant='contained' color="primary" size="small" >Go Back To Dashboard</Button>
            </Link>
            <Link to={path}>
              <Button className={classes.mc} onClick={handleStart} variant='contained' color="secondary" size="small">Take Test</Button>
            </Link>
          </div>
        </Container>
      </Paper>
    </div>
  )
}

export default TestParams