import { makeStyles, createTheme } from '@material-ui/core'
import { red, orange, purple } from '@material-ui/core/colors'

export const theme = createTheme({
    palette: {
        primary: {
            main: '#324B4A'
        },
        secondary: {
            main: '#2A928F'
        }
    },
    typography: {
        fontFamily: 'Poppins',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    }
})
const constants = {
    borderRadius: '15px'
}
export const useStyles = makeStyles((theme) => ({
    error: {
        border: (note) => {
            if (note) {
                return '1px solid red'
            }
        }
    },
    form: {
        padding: 'auto 0', margin: 'auto 0', width: '97%', height: '100%',
    },
    underline: {
        height: "0.25rem", width: "5rem", background: theme.palette.primary.main, marginLeft: "auto", marginRight: "auto", borderRadius: constants.borderRadius
    },
    hero: {
        width: '100%', height: '100%'
    },
    chart: {
        maxHeight: '40vh',
        maxWidth: '90%',
        // display: "inline-block",
        // margin: "0 auto"
    },
    googleBtn: {
        backgroundColor: red, borderRadius: constants.borderRadius
    },
    btn: {
        borderRadius: "15px"
    },
    flex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px'
    },
    mc: {
        margin: '10px auto', display: 'block', width: 'auto'
    },
    mr: {
        marginRight: 20, marginTop: 20, marginBottom: 5
    },
    mt: {
        marginTop: 20
    },
    my: {
        marginTop: 10, marginBottom: 10
    },
    ml: {
        marginLeft: 20
    },
    imgPaper: {
       display: "flex",
    },
    title: {
        textDecoration: 'underline', marginBottom: 20, padding: theme.spacing(3)
    },
    field: {
        marginTop: 10, marginBottom: 10, display: 'block', padding: 10, textAlign: 'center', fontSize: '8px'
    },
    paper: {
        padding: '40px'
    },
    img: {
        width: '150px', height: '150px', margin: '10px auto', borderRadius: '38% 62% 53% 47% / 40% 41% 59% 60%', border: '1px solid hsl(250, 34%, 43%)'
    },
    middleImg: {
        marginLeft: 20, zIndex: 3
    },
    bottomImg: {
        marginTop: -200, marginLeft: -120
    },
    topImg: {
        marginBottom: -30, marginLeft: -25
    },
    googleButton: {
        marginBottom: theme.spacing(2), marginRight: 20
    },
    notification: {
        position: "fixed", left: '20vw', marginTop: '20px', top: '10vh', zImdex: 3
    },

    avatar1: {
        margin: theme.spacing(1), backgroundColor: theme.palette.secondary.main,
    },
    logoContainer: {
        display: "flex", alignItems: "center", justifyContent: "center",
    },
    logo: {
        width: "50px", height: "50px", borderRadius: "50%", marginRight: "10px"
    },
    header: {
        display: "flex", justifyContent: 'space-between',
    },
    [theme.breakpoints.down('sm')]: {
        examBodies: {
            display: "none",
        },
    },
    [theme.breakpoints.up('xs')]: {
        hamburger: {
            display: "none",
        },
        mobile: {
            position: 'block',
            display: 'flex',
            flexDirection: 'row',
            judtifyContent: 'space-between',
            top: 0,
            right: 0
        },
    },
    [theme.breakpoints.down('xs')]: {
        navItems: {
            display: "none",
        },
        hamburger: {
            display: "block",
        },
    },
    logoStyle: {
        width: "100%", height: "100%", borderRadius: "50%"
    },
    orangeAvatar: {
        backgroundColor: orange[500]
    },
    purpleAvatar: {
        backgroundColor: purple[500]
    },
    userChip: {
        backgroundColor: purple[500], color: "#fff", margin: "0.5rem 32px",
    },
    inputExample: {
        fontSize: "12px", marginTop: -10, marginBottom: 20, marginRight: 20
    },
    mobile: {
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        top: '10vh',
        right: '2vw'
    },
    toolbar: theme.mixins.toolbar,
}))

export const orangeAvatar = {
    backgroundColor: orange[500]
}
export const purpleAvatar = {
    backgroundColor: purple[500]
}
export const bouncingLogo = { width: "100%", height: "100%", borderRadius: "50%", marginLeft: "100px" }
