import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Paper, Card, CardActions } from '@material-ui/core'
import { useStyles } from '../components/styles'
import { Header, HistoryChart } from '../components'
const Dashboard = ({ student }) => {
    const classes = useStyles();
    return (
        <div className={classes.mc}>
            <Paper>
                <Card elevation={3}>
                    <Header student={student} />
                    <HistoryChart student={student} />
                    <CardActions>
                        <Link to="/params"> <Button className={classes.mc} variant='contained' color="secondary" size="small"> Take A Test </Button> </Link>
                    </CardActions>
                </Card>
            </Paper>
        </div>
    )
}
Dashboard.propTypes = {
    student: PropTypes.object,
};
export default Dashboard