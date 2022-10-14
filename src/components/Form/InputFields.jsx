import { Container, IconButton, InputAdornment, Typography } from '@material-ui/core'
import InputField from './InputField'
import { Visibility } from '@material-ui/icons'
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa'
import { useState } from 'react'
import { useStyles } from '../styles'

const InputFields = ({ inputFieldsProps }) => {
    //STATE AND HOOKS
    const [showPassword, setShowPassword] = useState(false)
    const classes = useStyles();
    //COSTANTS 
    const inputType = showPassword ? 'text' : 'password'
    //COMPONENT PROPS 
    const { isLogin, userName, setCredentials, credentials, email, password, confirmPassword } = inputFieldsProps
    const emailIputProps = { startAdornment: (<InputAdornment position="start"><FaEnvelope /></InputAdornment>), }
    const userInputProps = { startAdornment: (<InputAdornment position="start"><FaUser /></InputAdornment>), }
    const passwordInputProps = {
        endAdornment: (<InputAdornment onClick={() => setShowPassword(!showPassword)} position="end"><IconButton>{<Visibility />}</IconButton></InputAdornment>),
        startAdornment: (<InputAdornment position="start"><FaLock /></InputAdornment>),
    }
    return (
        <div>
            <Container>
                <InputField show={!isLogin} name="userName" value={userName} setCredentials={setCredentials} credentials={credentials} label="User Name" InputProps={userInputProps} type="text" />
                {!isLogin && <Typography variant="caption" align="left" fontSize="12px" gutterBottom color="secondary" className={classes.inputExample}>E.g. John Doe</Typography>}
                <InputField autoFocus={true} name="email" show={!isLogin || isLogin} value={email} setCredentials={setCredentials} credentials={credentials} label="Email" InputProps={emailIputProps} type="email" />
                <Typography variant="caption" align="left" gutterBottom color="secondary" className={classes.inputExample}>E.g. johnDoe@example.com</Typography>
                <InputField show={!isLogin || isLogin} name="password" value={password} setCredentials={setCredentials} credentials={credentials} label="Password" InputProps={passwordInputProps} type={inputType} />
                {!isLogin && <Typography variant="caption" align="left" color="secondary" className={classes.inputExample}>Password should contain alphanumeric(ABCabc123) and special characters(!@#$%) </Typography>}
                <InputField show={!isLogin} value={confirmPassword} name="confirmPassword" setCredentials={setCredentials} credentials={credentials} label="Confirm Password" InputProps={passwordInputProps} type={inputType} />
                {!isLogin && <Typography variant="caption" align="left" color="secondary" className={classes.inputExample}>Password should contain alphanumeric(ABCabc123) and special characters(!@#$%) </Typography>}
            </Container>
        </div>
    )
}
export default InputFields