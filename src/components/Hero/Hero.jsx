import { Container, Paper } from '@material-ui/core'
import { useStyles } from '../styles'
import { classSvg, studySvg, examsSvg } from '../../assests'
const Hero = () => {
    const classes = useStyles();
    return (
        <Container>
            <Paper className={classes.imgPaper}>
                <Container className={classes.topImg}><img className={classes.img} src={classSvg} alt="class Svg" /></Container>
                <Container className={classes.middleImg}><img className={classes.img} src={examsSvg} alt="exams Svg" /></Container>
                <Container className={classes.bottomImg}><img className={classes.img} src={studySvg} alt="study Svg" /></Container>
            </Paper>
        </Container>
    )
}
export default Hero
