import { useState } from 'react'
import PropTypes from 'prop-types';
import { Button, Typography, Paper, Grid } from '@material-ui/core'
import { FaKey } from "react-icons/fa"
import { useLocation, Link } from 'react-router-dom'
import { useStyles } from '../styles'
import Inputs from './Inputs';
import GoogleButton from './GoogleButton';
import handleAuth from './handleAuth'
const Form = ({ setNotification, setStudent }) => {
    const [credentials, setCredentials] = useState({ userName: '', email: '', password: '', confirmPassword: '' })
    const [isLogin, setIsLogin] = useState(false)
    const location = useLocation()
    const classes = useStyles()
    const authParams = {isLogin, credentials, setStudent, setNotification}
    return (
        <Grid item xs={12} sm={6}>
            <form autoComplete="off" noValidate gutterbottom="true" display="flex" align="center" >
                <Paper className={classes.form}>
                    <Typography variant="h6" component="h2" gutterBottom color="textPrimary"> {isLogin ? 'Log In' : 'Sign Up'} </Typography>
                    <div className={classes.underline}></div>
                    <Inputs isLogin={isLogin} setCredentials={setCredentials} credentials={credentials} />
                    <GoogleButton setNotification={setNotification} isLogin={isLogin} setStudent={setStudent}/>
                    <div className={classes.my} >
                        <Link to={location.pathname}>
                            <Button className={classes.btn} startIcon={<FaKey />} variant='contained' color="secondary" size="small" type="submit" onClick={(e)=>handleAuth(e, authParams)}>
                                {!isLogin ? 'Sign up' : 'Login'}
                            </Button>
                        </Link>
                    </div>
                    <Typography>{isLogin ? "Don't have an account ?" : "Already have an account ?"} </Typography>
                    <Button color="primary" size="small" onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Sign Up" : "Log in"}</Button>
                </Paper>
            </form>
        </Grid>
    )
}
Form.propTypes = {
    setStudent: PropTypes.func,
    setNotification: PropTypes.func,
};
export default Form