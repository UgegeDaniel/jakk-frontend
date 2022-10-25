import { useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Button, Container, Paper, Card, CardContent, Typography, Chip } from '@material-ui/core'
import { FaTimes } from 'react-icons/fa'
import { useStyles } from '../components/styles'
import { QuestionCardTop, Options } from '../components/Question'

const Review = ({ marked, reviewQuestions }) => {
    const reviewResults = marked?.filter((mark) => mark.wrong === "wrong" && mark)
    const classes = useStyles();
    const [reviewIndex, setReviewIndex] = useState(reviewResults[0].number - 1)
    const wrongChoice = marked.find((mark) => mark.number === reviewIndex + 1).userAnswer
    const answers = reviewQuestions.map((question) => question.answer)
    const handleChoice = (e) => {
        return
    }
    return (
        <div className={classes.mc}>
            <Paper>
                <Container>
                    <Card elevation={3}>
                        <CardContent>
                            <QuestionCardTop answeredNumber='contained' questionIndex={reviewIndex} currentQuestion={reviewQuestions[reviewIndex]} />
                            <Options correct={answers[reviewIndex]} currentQuestion={reviewQuestions[reviewIndex]} handleChoice={handleChoice} attempts={[]} questionIndex={reviewIndex} />
                        </CardContent>
                        <Container>
                            <div className={classes.my}>
                                {reviewResults.sort(function (a, b) { return a - b }).map((result, index) => (
                                    <Button key={index} onClick={() => setReviewIndex(result.number - 1)} variant='contained' color={result.number === reviewIndex + 1 ? "secondary" : 'primary'}>{result.number}</Button>
                                ))}
                            </div>
                        </Container>
                        <Container>
                            <Typography className={classes.my}>You chose : </Typography><Chip name={wrongChoice} color="secondary" avatar={<FaTimes style={{ color: "red", fontSize: "8px" }} />} label={wrongChoice.toUpperCase()} />
                        </Container>
                        <Link to="/">
                            <Button className={classes.mc} variant='contained' color="secondary" size="small" type="submit">Go to Dashboard</Button>
                        </Link>
                    </Card>
                </Container>
            </Paper>
        </div>
    )
}
Review.propTypes = {
    marked: PropTypes.array,
    reviewQuestions: PropTypes.array,
};
export default Review

