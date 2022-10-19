import { useStyles } from './components/styles'
import { QuestionCardTop, Options, QuestionNav, Timer } from './components/Question'
import { AppHeader, Notification, Skeleton } from './components'
import { Container, ThemeProvider, Button, CardContent, Typography,  Paper, Grid, Card,  ButtonGroup } from '@material-ui/core'

const Questions = ({questions, timer, setTimer, }) => {
    const classes = useStyles()
    return (
        <div className={classes.mc}>
            {questions.length === 0 ? <Skeleton />
                :
                (<Paper>
                    <Container>
                        <Timer timer={timer} setTimer={setTimer} />
                        <Card elevation={3}>
                            <CardContent>
                                <QuestionCardTop questionTopProps={questionTopProps} />
                                <Options optionsProps={optionsProps} />
                            </CardContent>
                            <QuestionNav navProps={navProps} />
                            <Link to="/results">
                                <Button className={classes.mc} variant='contained' color="secondary" size="small" type="submit" onClick={submitHandler}>Finish and Submit</Button>
                            </Link>
                        </Card>
                    </Container>
                </Paper>)
            }
        </div>
    )
}

export default Questions