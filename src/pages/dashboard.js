import { Chip, Button, Container, Paper, Card, CardHeader, CardActions, IconButton, Avatar, } from '@material-ui/core'
import { useStyles } from '../components/styles'
import { UserChart } from '../components'
import { FaUser } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { deepPurple } from '@material-ui/core/colors';
import { useEffect, useState } from 'react';

const Dashboard = ({ marked, student }) => {
    const classes = useStyles();
    const [userHistory, setUserHistory] = useState([student?.history])
    const percentage = ((marked?.correct?.length / 40) * 100).toFixed(2)
    // useEffect(() => {
    //     if (!marked || !marked?.correct?.length) {
    //         return
    //     }
    //     else {
    //         setUserHistory([...userHistory, { id: marked?.timeTaken, subject: marked?.subject, scores: percentage, timeTaken: marked?.timeTaken }])
    //     }
    // }, [])

    return (
        <div className={classes.mc}>
            <Paper>
                <Container>
                    <Card elevation={3}>
                        {/**CARD HEADER */}
                        <CardHeader
                            action={
                                <IconButton>
                                    <Avatar style={{ backgroundColor: deepPurple[500] }}>{student?.userName.charAt(0)}</Avatar>
                                </IconButton>
                            }
                            title={<Chip style={{ color: "#fff" }} avatar={<Avatar>{<FaUser />}</Avatar>} label={student?.userName} color="primary" />}
                            subheader={<Chip style={{ color: "#fff", marginTop: "5px" }} avatar={<Avatar>@</Avatar>} label={student?.email} color="secondary" />} />
                        {/**CARD BODY */}
                        <UserChart userHistory={userHistory} />
                        {/**CARD FOOTER */}
                        <CardActions>
                            <Link to="/testparams">
                                <Button className={classes.mc} variant='contained' color="secondary" size="small">
                                    Take A Test
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Container>
            </Paper>
        </div>
    )
}

export default Dashboard