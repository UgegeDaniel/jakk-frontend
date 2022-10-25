import PropTypes from 'prop-types';
import { AppBar, Toolbar, Avatar, Fab } from '@material-ui/core'
import { FaDoorOpen } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useStyles, evenAvatar, oddAvatar } from '../styles'
import { jamb, waec, neco } from '../../assests'
import { logout } from '../../api/auth'
const AppHeader = ({ setStudent, student }) => {
    const classes = useStyles();
    return (
        <div>
            <AppBar color="primary">
                <Toolbar className={classes.header}>
                    <Link to="/">
                        <div className={classes.logoContainer}>
                            {['J', 'A', 'K', 'K'].map((letter, index) => (<Avatar style={index % 2 === 0 ? evenAvatar : oddAvatar} key={index}>{letter}</Avatar>))}
                        </div>
                    </Link>
                    <div className={`${classes.logoContainer} ${classes.examBodies}`}>
                        {[jamb, waec, neco].map((logo, index) => (<div className={classes.logo} key={index}><img className={classes.logoStyle} src={logo} alt='exam body logo' /></div>))}
                    </div>
                    {student && <Fab variant="extended" color="secondary" onClick={() => logout(setStudent)} >
                        {student && <FaDoorOpen style={{ margin: 'auto 5px' }} />} Log out
                    </Fab>}
                </Toolbar>
            </AppBar>
            <div className={classes.toolbar}>k</div>
        </div >
    )
}
AppHeader.propTypes = {
    setStudent: PropTypes.func,
    student: PropTypes.object,
};
export default AppHeader

