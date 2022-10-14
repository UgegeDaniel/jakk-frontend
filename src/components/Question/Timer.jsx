import {useEffect} from 'react'
import { Button, ButtonGroup } from '@material-ui/core'
import { useStyles } from '../styles'

const Timer = ({timer, setTimer, setSubmitted }) => {
    const { hour, minute, second } = timer
    useEffect(() => {
        const cleanUp = setInterval(() => {
            if (timer.hour === 0 && timer.minute === 0 && timer.second === 0) {
                setTimer({ hour: 0, minute: 0, second: 0 })
                setSubmitted(true)
                return
            }
            else if (timer.minute === 0) {
                setTimer({ ...timer, hour: hour - 1, minute: 59, second: 59 })
            }
            else if (timer.second === 0) {
                setTimer({ ...timer, minute: minute - 1, second: 59 })
            }
            else {
                setTimer({ ...timer, second: second - 1 })
            }

        }, 1000)
        return () => clearInterval(cleanUp)
    }, [timer, hour, minute, second, setTimer, setSubmitted])
    const classes = useStyles();
    return (
        <div>
            <ButtonGroup align="right" variant='contained' color="secondary" size="small">
                <Button className={classes.mt}>{hour} : {minute} : {second}</Button>
            </ButtonGroup>
        </div>
    )
}

export default Timer