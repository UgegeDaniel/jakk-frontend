import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Button, Typography, Chip, Paper, ButtonGroup } from '@material-ui/core'
import { useStyles } from '../components/styles'
import { fetchSubjects, fetchYears } from '../api'
import {  Params } from '../components'

const TestParams = ({ testParams, setTestParams }) => {
  const classes = useStyles()
  const { subject, year, examtype } = testParams
  const [subjects, setSubjects] = useState([])
  const [years, setYears] = useState([])
  const [success, setSuccess] = useState(false)

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
  }, [subject, year])

  return (
    <div>
      <Paper>
        <Container>
          <Typography color="secondary" variant="subtitle1" gutterBottom>Please pick a subject and examination year</Typography>
          <Params paramName='Subject' items={subjects} testParams={testParams} setTestParams={setTestParams} setSuccess={setSuccess} feild='subject'/>
          <Params paramName='Year' items={years} testParams={testParams} setTestParams={setTestParams} setSuccess={setSuccess} feild='year'/>
          <div className={classes.mc}>
            <Typography>Exam Type : </Typography>
            <ButtonGroup className={classes.mc} variant='contained' color="primary" size="small" disabled disableElevation>
              <Button>UTME</Button>
            </ButtonGroup>
          </div>
          <Typography>You have chosen to take a test in <Chip color="primary" label={subject} /> of <Chip color="primary" label={examtype} />Examinations Year <Chip color="primary" label={year} /></Typography>
          <Typography>Allotted time :  </Typography> <Chip color="primary" label="2 hours" />
          <div className={classes.flex}> <Link to='/'> <Button className={classes.mc} variant='contained' color="primary" size="small" >Go Back To Dashboard</Button> </Link>
            <Link to={success ? "/questions" : ""}> <Button className={classes.mc} variant='contained' color="secondary" size="small"> Take Test</Button> </Link>
          </div>
        </Container>
      </Paper>
    </div>
  )
}
TestParams.propTypes = {
  testParams: PropTypes.object,
  setTestParams: PropTypes.func,
};
export default TestParams