import PropTypes from 'prop-types';
import {  Chip,  CardHeader,IconButton, Avatar } from '@material-ui/core'
import { deepPurple } from '@material-ui/core/colors';
import { FaUser } from "react-icons/fa"
const Header = ({student}) => {
    return(
        <CardHeader
        action={
            <IconButton>
                <Avatar style={{ backgroundColor: deepPurple[500] }}>{student?.userName.charAt(0)}</Avatar>
            </IconButton>
        }
        title={<Chip style={{ color: "#fff" }} avatar={<Avatar>{<FaUser />}</Avatar>} label={student?.userName} color="primary" />}
        subheader={<Chip style={{ color: "#fff", marginTop: "5px" }} avatar={<Avatar>@</Avatar>} label={student?.email} color="secondary" />} />
    )
}
Header.propTypes = {
    student: PropTypes.object,
};
export default Header