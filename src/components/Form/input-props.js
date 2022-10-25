import { IconButton, InputAdornment } from '@material-ui/core'
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"
import { Visibility } from '@material-ui/icons'

const inputProps = (credentials, isLogin, setShowPassword, showPassword,) => {
    const { userName, email, password, confirmPassword } = credentials
    return [
        {
            label: "User Name",
            props: { startAdornment: (<InputAdornment position="start"><FaUser /></InputAdornment>), },
            type: "text",
            value: userName,
            name: "userName",
            example: "E.g. John Doe",
            show: !isLogin
        }, {
            label: "Email",
            props: { startAdornment: (<InputAdornment position="start"><FaEnvelope /></InputAdornment>), },
            type: "text",
            value: email,
            name: "email",
            example: "E.g. johnDoe@example.com",
            show: isLogin || !isLogin
        }, {
            label: "Password",
            props: {
                endAdornment: (<InputAdornment onClick={() => setShowPassword(!showPassword)} position="end"><IconButton>{<Visibility />}</IconButton></InputAdornment>),
                startAdornment: (<InputAdornment position="start"><FaLock /></InputAdornment>),
            },
            type: !showPassword ? 'password' : 'text',
            value: password,
            name: "password",
            example: "E.g. ABCabc123!@#",
            show: isLogin || !isLogin
        }, {
            label: "Confirm Password",
            props: {
                endAdornment: (<InputAdornment onClick={() => setShowPassword(!showPassword)} position="end"><IconButton>{<Visibility />}</IconButton></InputAdornment>),
                startAdornment: (<InputAdornment position="start"><FaLock /></InputAdornment>),
            },
            type: !showPassword ? 'password' : 'text',
            value: confirmPassword,
            name: "confirmPassword",
            example: "E.g. ABCabc123!@#",
            show: !isLogin
        }
    ]
}
export default inputProps