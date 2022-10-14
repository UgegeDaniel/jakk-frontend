import { TextField } from '@material-ui/core'
import { useStyles } from '../styles'
const InputField = ({ show, value, label, setCredentials, credentials, autoFocus, InputProps, type, name }) => {
    const classes = useStyles();
    return (
        <div className={classes.my}>
            {
                show &&
                <TextField className={classes.field} autoFocus={autoFocus} variant='outlined' label={label} fullWidth align="center" size="small"
                    InputProps={InputProps} type={type} value={value} name={name}
                    onChange={(e) => { setCredentials({ ...credentials, [e.target.name]: e.target.value }) }} />
            }
        </div>
    )
}
export default InputField