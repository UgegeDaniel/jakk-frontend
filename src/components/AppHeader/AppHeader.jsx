import { AppBar, Toolbar, Avatar, Button, Chip } from '@material-ui/core'
import { FaUser, FaDoorOpen } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useStyles, orangeAvatar, purpleAvatar } from '../styles'
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
                            {['J', 'A', 'K', 'K'].map((letter, index) => (
                                <Avatar style={index % 2 === 0 ? orangeAvatar : purpleAvatar} key={index}>{letter}</Avatar>
                            ))}
                        </div>
                    </Link>
                    <div className={`${classes.logoContainer} ${classes.examBodies}`}>
                        {[jamb, waec, neco].map((logo, index) => (
                            <div className={classes.logo} key={index}><img className={classes.logoStyle} src={logo} alt='exam body logo' /></div>
                        ))}
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbar}>
            </div>
            <div className={classes.toolbar}>
                {
                    student && <div className={classes.flex}>
                        <Chip className={classes.userChip} avatar={<Avatar>{<FaUser />}</Avatar>} variant='default' label={`${student?.userName}`} color="secondary" />
                        <Button className={classes.btn} onClick={() => logout(setStudent)} startIcon={<FaDoorOpen />} variant='contained' color="secondary" size="small" type="submit">
                            Log out
                        </Button>
                    </div>
                }
            </div>
        </div>
    )
}
export default AppHeader
