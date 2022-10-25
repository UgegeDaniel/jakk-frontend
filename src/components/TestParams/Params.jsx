import PropTypes from 'prop-types';
import {  Typography } from '@material-ui/core'
import { useStyles } from '../styles'
import Param from './Param'
import BouncingLoader from '../Loaders/BouncingLoader'
const Params = ({paramName, items, testParams, setTestParams, setSuccess, feild}) => {
    const classes = useStyles()
    return (
        <div className={classes.mc}>
            <Typography>{paramName}: </Typography>
            {feild === 'subject' && <Typography variant="caption" align="left" gutterBottom color="secondary" className={classes.inputExample}>Pick a subject to see available years
            </Typography>}
            {items.length === 0 ? <BouncingLoader /> :
                (<Param items={items} testParams={testParams} setTestParams={setTestParams} className={classes.my} feild={feild} setSuccess={setSuccess} />)
            }
        </div>
    )
}
Params.propTypes = {
    items: PropTypes.array,
    testParams: PropTypes.object,
    setTestParams: PropTypes.func,
    paramName: PropTypes.string,
    feild: PropTypes.string,
    setSuccess: PropTypes.func,
};
export default Params