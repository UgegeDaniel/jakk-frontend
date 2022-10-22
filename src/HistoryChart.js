import { Button, CardContent, Typography, } from '@material-ui/core'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import { theme, useStyles } from './components/styles'
import { getData, options, getAverage } from './dashboard-data'
import { useState } from 'react';

const HistoryChart = ({ student }) => {

    const classes = useStyles();
    const subjectsTaken = Array.from(new Set(student?.history?.map((data) => data.subject)))
    const [currentSubjectData, setCurrentSubjectData] = useState(subjectsTaken[0])
    const dataToDisplay = student?.history?.length > 0 ? student?.history?.filter((item) => item.subject === currentSubjectData) : []
    const data = getData(dataToDisplay, currentSubjectData, theme)
    const averageScore = getAverage(student).averageScore

    return (
        < CardContent >
            You have taken<Button color="primary" disableElevation>{student.history?.length}</Button>Test(s).
            <div className={classes.flex}>{student?.history.length !== 0 && subjectsTaken.map((item, index) =>
                <Button key={index} variant='contained' color={item === currentSubjectData ? 'primary' : 'secondary'} size="small" onClick={(e) => setCurrentSubjectData(e.target.textContent)}>{item}</Button>
            )}
            </div>
            <div className={classes.mc} >
                <div>
                    <Line data={data} className={classes.chart} options={options} />
                </div>
            </div>
            <Typography>
                You have an overall average of <Button color="secondary" disableElevation > {averageScore ? averageScore : 0} </Button>% per test
            </Typography>
        </CardContent >
    )
}

export default HistoryChart