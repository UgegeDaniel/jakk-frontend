import { Typography, Button} from '@material-ui/core'
import {  useStyles } from '../styles'

const QuestionCardTop = ({questionTopProps : {answeredNumber, questionIndex, questionImage, question}}) => {
    const classes = useStyles();
    return (
        <div className={classes.my}>
            <Button variant={answeredNumber} color="primary" disableElevation>{questionIndex + 1}.</Button>
            <div className={classes.mc}>
                {!questionImage ? <Button className={classes.mc} variant='contained' color="secondary" size="small" type="submit">No Image available for this question</Button> : <img src={questionImage} alt="question" />}
            </div>
            <Typography variant="body2" color="textSecondary">
                {question}
            </Typography>
        </div>
    )
}

export default QuestionCardTop