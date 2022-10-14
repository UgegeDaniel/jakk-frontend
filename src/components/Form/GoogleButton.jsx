import { GoogleLogin } from 'react-google-login';
import { useStyles } from '../styles'
import { Button } from '@material-ui/core'
import { Icon } from '../../assests'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID

const GoogleButton = ({ setNotification }) => {
    const classes = useStyles();
    const googleSuccess = async (res) => {
        const result = await res?.profileObj;
        const token = await res?.tokenId;
        try {
            console.log({ result, token });
        } catch (error) {
            console.log(error);
        }
    };
    const googleError = (error) => {
        const errorMsg = 'Google Sign In was unsuccessful. Try again later'
        setNotification({ show: true, msg: errorMsg, type: "danger" })
        console.log(errorMsg, error);
    }

    return (
        <div>
            <GoogleLogin
                clientId={GOOGLE_CLIENT_ID}
                render={(renderProps) => (
                    <Button className={classes.btn} color="primary" size="small" onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                        Google Sign In
                    </Button>
                )}
                onSuccess={googleSuccess} onFailure={googleError} cookiePolicy="single_host_origin"
            />
        </div>
    )
}

export default GoogleButton