import { useState } from 'react'
import { Button, Typography, Paper, Grid } from '@material-ui/core'
import { FaKey } from "react-icons/fa"
import { useLocation, Link } from 'react-router-dom'
import { useStyles } from './components/styles'
import dummyStudent from './dummyStudent'
import Inputs from './Inputs';
import GoogleButton from './GoogleButton';
import {login, signup} from './api'
const Form = ({ setNotification, setStudent }) => {
    const [credentials, setCredentials] = useState({ userName: '', email: '', password: '', confirmPassword: '' })
    const [isLogin, setIsLogin] = useState(false)
    const location = useLocation()
    const [path, setPath] = useState(location.pathname)
    const classes = useStyles()
    const handleAuth = async (e) => {
        e.preventDefault();
        setPath('/dashboard')
        setStudent(dummyStudent)
        if (isLogin) {
            await login(setNotification, credentials, setStudent)
          }
          !isLogin && await signup(setNotification, credentials, setStudent)
        !isLogin && setNotification({ show: true, type: "success", msg: 'Congratualations Sign up Successfull !!!' })
        isLogin && setNotification({ show: true, type: "success", msg: 'Congratualations Login Successfull !!!' })
    }
    return (
        <Grid item xs={12} sm={6}>
            <form autoComplete="off" noValidate gutterbottom="true" display="flex" align="center" >
                <Paper className={classes.form}>
                    <Typography variant="h6" component="h2" gutterBottom color="textPrimary"> {isLogin ? 'Log In' : 'Sign Up'} </Typography>
                    <div className={classes.underline}></div>
                    <Inputs isLogin={isLogin} setCredentials={setCredentials} credentials={credentials}/>
                    <GoogleButton/>
                    <div className={classes.my} >
                        <Link to={path}>
                            <Button className={classes.btn} startIcon={<FaKey />} variant='contained' color="secondary" size="small" type="submit" onClick={handleAuth}>
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

export default Form