import { Link } from 'react-router-dom';
import { Button, Typography, Chip, Paper, Card, CardHeader, CardActions, IconButton, Avatar } from '@material-ui/core'
import { useStyles } from './components/styles'
import { deepPurple } from '@material-ui/core/colors';
import { FaUser } from "react-icons/fa"
import HistoryChart from './HistoryChart'
const Dashboard = ({ student }) => {
    const classes = useStyles();
    if (!student) {
        return (
            <Typography>Please Login in or signup to view your Dashboard</Typography>
        )
    }
    return (
        <div className={classes.mc}>
            <Paper>
                <Card elevation={3}>
                    <CardHeader
                        action={
                            <IconButton>
                                <Avatar style={{ backgroundColor: deepPurple[500] }}>{student?.userName.charAt(0)}</Avatar>
                            </IconButton>
                        }
                        title={<Chip style={{ color: "#fff" }} avatar={<Avatar>{<FaUser />}</Avatar>} label={student?.userName} color="primary" />}
                        subheader={<Chip style={{ color: "#fff", marginTop: "5px" }} avatar={<Avatar>@</Avatar>} label={student?.email} color="secondary" />} />
                    <HistoryChart student={student} />
                    <CardActions>
                        <Link to="/params">
                            <Button className={classes.mc} variant='contained' color="secondary" size="small">
                                Take A Test
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            </Paper>
        </div>
    )
}
export default Dashboard