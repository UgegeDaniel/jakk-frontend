import { useEffect } from 'react'
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from '@material-ui/core'
import { useStyles } from '../styles'

const Timer = ({ timer, setTimer, setSubmitted }) => {
    const { hour, minute, second } = timer
    useEffect(() => {
        const cleanUp = setInterval(() => {
            if (hour === 0 && minute === 0 && second === 0) {
                return
            }
            else if (minute === 0 && hour > 0) {
                setTimer({ hour: hour - 1, minute: 59, second: 59 })
            }
            else if (second === 0 && minute > 0) {
                setTimer({ ...timer, minute: minute - 1, second: 59 })
            }
            else if (second > 0  && second > 0) {
                setTimer({ ...timer, second: second - 1 })
            }
            if (second % 5 <= 0) {
                localStorage.setItem('timer', JSON.stringify(timer))
            }
        }, 1000)
        return () => clearInterval(cleanUp)
    }, [timer, hour, minute, second, setTimer, setSubmitted])
    useEffect(() => {
        const oldTimer = JSON.parse(localStorage.getItem('timer'))
        if (oldTimer) {
            setTimer(oldTimer)
        }
    }, [setTimer])
    useEffect(() => {
        const cleanUp = setInterval(() => {
        }, 5000)
        return () => clearInterval(cleanUp)
    }, [timer])
    const classes = useStyles();
    return (
        <div>
            <ButtonGroup align="right" variant='contained' color="secondary" size="small"> <Button className={classes.mt}>{hour} : {minute} : {second}</Button> </ButtonGroup>
        </div>
    )
}
Timer.propTypes = {
    setTimer: PropTypes.func,
    setSubmitted: PropTypes.func,
    timer: PropTypes.object,
};
export default Timer