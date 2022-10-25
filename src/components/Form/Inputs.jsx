import { useState } from 'react'
import PropTypes from 'prop-types';
import { Container, Typography, TextField } from '@material-ui/core'
import inputProps from './input-props'
import { useStyles } from '../styles'
const Inputs = ({ isLogin, credentials, setCredentials }) => {
    const [showPassword, setShowPassword] = useState(false)
    const classes = useStyles()
    const data = inputProps(credentials, isLogin, setShowPassword, showPassword)
    return (
        <Container>
            {data.map((item, index) => (
                item.show &&
                <div key={index}>
                    <TextField className={classes.field} variant='outlined' label={item.label} fullWidth align="center" size="small"
                        InputProps={item.props} type={item.type} value={item.value} name={item.name}
                        onChange={(e) => { setCredentials({ ...credentials, [e.target.name]: e.target.value }) }} />
                    {item.show && <Typography variant="caption" align="left" fontSize="12px" gutterBottom color="secondary"
                        className={classes.inputExample}>{item.example}</Typography>}
                </div>
            ))}
        </Container>
    )
}
Inputs.propTypes = {
    credentials: PropTypes.object,
    setCredentials: PropTypes.func,
    isLogin: PropTypes.bool,
};
export default Inputs