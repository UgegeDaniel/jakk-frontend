import { Typography, Button, ButtonGroup, Container, Paper, Chip } from '@material-ui/core'
import { useStyles } from '../components/styles';
import { useNavigate } from 'react-router-dom';
import { BouncingLoader, Param } from '../components'
import { useState, useEffect } from 'react'
import { fetchQuestions, fetchSubjects, fetchYears } from '../api'
import { handleTestStart } from '../utils'

const TestParams = ({ setTimer, testParams, setTestParams, setQuestions, setNotification }) => {
    const [subjects, setSubjects] = useState([])
    const [years, setYears] = useState([])
    const classes = useStyles();
    const { subject, year, examtype } = testParams
    const navigate = useNavigate();
    useEffect(() => {
        const data = fetchSubjects()
        if (data) {
            setSubjects(Object.values(data))
        } else {
            return
        }
    }, [])
    useEffect(() => {
        const data = fetchYears(subject)
        if (data) {
            setYears(Object.values(data))
        } else {
            return
        }
    }, [subject])
    const values = { subject, year, testParams }
    const functions = { setNotification, setTestParams, setTimer, fetchQuestions, setQuestions, navigate }
    const handleStart = handleTestStart(values, functions)
    return (
        <div>
            <Paper>
                <Container>
                    <Typography color="secondary" variant="h5" gutterBottom>How would you like your test ? </Typography>
                    <div className={classes.mc}>
                        <Typography>Subject : </Typography>
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
                    <Button className={classes.mc} onClick={handleStart} variant='contained' color="secondary" size="small" type="submit">Take Test</Button>
                </Container>
            </Paper>
        </div>
    )
}

export default TestParams
