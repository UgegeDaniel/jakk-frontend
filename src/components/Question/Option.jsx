import { Avatar, Chip } from '@material-ui/core'
import { useStyles } from '../styles'
import { previouslyClicked, isPresent } from '../../utils'
const Option = ({ value, upperCase, optionProps, optionName }) => {
    const classes = useStyles();
    const { choiceHandler, attempts, questionIndex, correct } = optionProps
    return (
        <Chip
            id={optionName}
            avatar={<Avatar
            >{upperCase}</Avatar>}
            label={value}
            onClick={(e) => choiceHandler(e)}
            className={classes.my}
            variant={
                (
                    isPresent(previouslyClicked(attempts, questionIndex), value)
                        || optionName === correct
                        ? 'default'
                        : 'outlined'
                )

            }
            color="secondary" />
    )
}

export default Option

