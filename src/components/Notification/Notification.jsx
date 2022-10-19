import { useEffect } from 'react'
import { Chip, Avatar } from '@material-ui/core'
import {red, lightGreen} from '@material-ui/core/colors'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'
import { useStyles } from '../styles'
const Notification = ({ notification, setNotification }) => {
    const classes = useStyles();
    const { msg, type } = notification
    useEffect(()=> {
        const cleanUp = setTimeout(()=>{
            setNotification({...notification, show: false})
        }, 500000)
        return () => clearTimeout(cleanUp)
    })
    const danger = {
        backgroundColor: "#FF6961"
    }
    const success = {
        backgroundColor: "#77DD77"
    }
    return (
        <div className={classes.notification}>
            <Chip style ={type === "danger" ? danger : success} avatar={<Avatar>{ type === "danger" ? <FaThumbsDown /> : <FaThumbsUp/>}</Avatar>} label={msg} variant="default" color="primary"/>
        </div>
    )
}
export default Notification
