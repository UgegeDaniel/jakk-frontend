import { useStyles, bouncingLogo } from '../styles'
import { jamb, waec, neco } from '../../assests'
const BouncingLoader = () => {
    const classes = useStyles();
    return (
        <div className="bouncing-balls">
            {[jamb, waec, neco].map((ball, index)=>
                <div className={classes.loader} key={index}><img style={bouncingLogo} src={ball} alt="bouncing loader"/></div>
            )}
        </div>
    )
}
export default BouncingLoader