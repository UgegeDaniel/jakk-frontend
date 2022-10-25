import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core'
import { Form, Hero } from '../components'
const Auth = ({ setNotification, setStudent }) => (
    <Grid container spacing={3} justifyContent="center" align="center" >
        <Hero />
        <Form setNotification={setNotification} setStudent={setStudent} />
    </Grid>
)
Auth.propTypes = {
    setNotification: PropTypes.func,
    setStudent: PropTypes.func,
};
export default Auth