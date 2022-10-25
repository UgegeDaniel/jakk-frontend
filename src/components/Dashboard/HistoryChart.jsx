import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, CardContent, Typography, } from '@material-ui/core'
import { Line, Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import { theme, useStyles } from '../styles'
import { getData, options, getAverage } from './dashboard-data'

const HistoryChart = ({ student }) => {
    const classes = useStyles();
    const subjectsTaken = Array.from(new Set(student?.history?.map((data) => data.subject)))
    const [currentSubjectData, setCurrentSubjectData] = useState(subjectsTaken[0])
    const [barChart, setBarChart] = useState(false)
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
            <div className={classes.mc}>
                <div className={classes.flex}>
                    <Typography>Would you like a </Typography>
                    <Button variant='outlined' color={barChart ? 'primary' : 'secondary'} size="small" onClick={(e) => setBarChart(!barChart)}>{barChart ? 'Line Chart' : 'Bar Chart'}</Button>
                    <Typography>instaed ? </Typography>
                </div>
                {barChart && <Bar data={data} className={classes.chart} options={options} />}
                {!barChart && <Line data={data} className={classes.chart} options={options} />}
            </div>
            <Typography>
                You have an overall average of <Button color="secondary" disableElevation > {averageScore ? averageScore : 0} </Button>% per test
            </Typography>
        </CardContent >
    )
}
HistoryChart.propTypes = {
    student: PropTypes.object,
};
export default HistoryChart