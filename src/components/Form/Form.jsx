import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Typography, Button, Paper } from '@material-ui/core'
import { FaKey } from 'react-icons/fa'
import { useStyles } from '../styles'
import { handleAuth } from '../../utils'
import {login, signup} from '../../api'
import InputFields from './InputFields'
import GoogleButton from './GoogleButton'

const Form = ({ loginRoute, setNotification, setStudent }) => {
    //STATE AND HOOKS
    const [credentials, setCredentials] = useState({ userName: '', email: '', password: '', confirmPassword: '' })
    const [isLogin, setIsLogin] = useState(loginRoute)
    const { userName, email, password, confirmPassword } = credentials
    const classes = useStyles();
    const navigate = useNavigate();
    //FUNCTION PARAMETERS
    const values = { credentials, isLogin, }
    const functions = { login, signup, setNotification, setStudent}
    const handleSubmit = (e) => handleAuth(e, values, functions) && navigate('/')
    //COMPONENT PROPS
    const inputFieldsProps = { isLogin, userName, setCredentials, credentials, email, password, confirmPassword }
    return (
        <form autoComplete="off" noValidate gutterbottom="true" display="flex" align="center" onSubmit={handleSubmit}>
            <Paper className={classes.form}>
                <Typography variant="h6" component="h2" gutterBottom color="textPrimary"> {isLogin ? 'Log In' : 'Sign Up'} </Typography>
                <div className={classes.underline}></div>
                <InputFields inputFieldsProps={inputFieldsProps} />
                <GoogleButton setNotification={setNotification}/>
                <div className={classes.my} >
                    <Button className={classes.btn} startIcon={<FaKey />} variant='contained' color="secondary" size="small" type="submit" >
                        {!isLogin ? 'Sign up' : 'Login'}
                    </Button>
                </div>
                {isLogin && <div>
                    <Typography>Don't have an account ? </Typography>
                    <Button color="primary" size="small" onClick={() => setIsLogin(!isLogin)}>Sign up</Button>
                </div>}
                {!isLogin && <div>
                    <Typography>Already have an account ? </Typography>
                    <Button color="primary" size="small" onClick={() => setIsLogin(!isLogin)}>Login </Button>
                </div>}
            </Paper>
        </form>
    )
}
export default Form