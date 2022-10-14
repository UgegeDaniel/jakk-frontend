import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto';
//import moment from 'moment'
import { Button, CardContent, Typography } from '@material-ui/core'
import { theme, useStyles } from '../styles'

const UserChart = ({ userHistory, marked }) => {
    const classes = useStyles();
    const data = {
        labels: userHistory?.map((data) => data?.timeTaken),
        datasets: [
            {
                label: `Scores (%) in ${marked?.subject}`,
                data: userHistory?.map((data) => data?.scores),
                fill: false,
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.secondary.main,
                borderWidth: 2,
            },
        ]
    };
    const options = {
        title: { display: true, text: 'Your Scores', fontSize: 25 },
        legend: { display: true, position: 'top' }
    }
    const scores = userHistory?.map((data) => data?.scores)
    const size = scores?.length
    const total = (scores) => {
        const total = scores.reduce((total, score) => {
            total += score;
            return total
        }, 0)
        return total
    }
    const averageScore = (total(scores) / size).toFixed(2)
    return (
        < CardContent >
            You have taken<Button color="primary" disableElevation>{userHistory?.length - 1}</Button>Test(s).
            <div className={classes.mc} >
                <div>
                    <Line data={data} className={classes.chart} options={options} />
                </div>
            </div>
            <Typography>
                You have an overall average of <Button color="secondary" disableElevation > {scores.length > 0 ? averageScore : 0} </Button>% per test
            </Typography>
        </CardContent >
    )
}
export default UserChart
