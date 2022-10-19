import moment from 'moment'
export const getData = (dataToDisplay, currentSubjectData, theme) => {
    return {
        labels: dataToDisplay.map((data) => moment(data?.timeTaken).startOf('minute').fromNow()),
        datasets: [
            {
                label: `Scores (%) in ${currentSubjectData}`,
                data: dataToDisplay.map((data) => data?.score),
                fill: false,
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.secondary.main,
                borderWidth: 2,
            },
        ]
    }
};

export const options = {
    title: { display: true, text: 'Your Scores', fontSize: 25 },
    legend: { display: true, position: 'top' }
}

export const getAverage = (student) => {
    const scores = student?.history?.map((data) => data?.score)
    const size = scores?.length
    const total = (scores) => {
        const total = scores.reduce((total, score) => {
            total += score;
            return total
        }, 0)
        return total
    }
    const averageScore = (total(scores) / size).toFixed(2)
    return {averageScore, scores}

}