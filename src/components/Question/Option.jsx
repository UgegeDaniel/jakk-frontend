import { useEffect } from 'react'
import PropTypes from 'prop-types';
import { Grid, Avatar } from '@material-ui/core';
import { useStyles, theme } from '../styles'
import { previouslyClicked, isPresent } from '../../utils'

const Option = ({ value, upperCase, optionProps, optionName }) => {
    const classes = useStyles();
    const { handleChoice, attempts, questionIndex, correct } = optionProps
    useEffect(() => {
        console.log({ prev: previouslyClicked(attempts, questionIndex) })
    }, [attempts, questionIndex])
    const backgroundColor = (isPresent(previouslyClicked(attempts, questionIndex), optionName) || optionName === correct)
        ? theme.palette.primary.main : theme.palette.secondary.main
    return (
        <Grid item xs={12} sm={3} >
            <Avatar style={{ width: 24, height: 24, fontSize: 12, backgroundColor }} color='primary'>{upperCase}</Avatar>
            <div className={`${classes.option} ${classes.flex}`} id={optionName} onClick={(e) => handleChoice(e)} style={{backgroundColor, color: '#fff'}}>
                {value}
            </div>
        </Grid>)
}

Option.propTypes = {
    value: PropTypes.string,
    upperCase: PropTypes.string,
    optionProps: PropTypes.object,
    optionName: PropTypes.string,
};
export default Option