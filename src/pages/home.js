import { Paper, Grid, } from '@material-ui/core'
import { Form, Hero } from '../components'
const Home = ({ login, setNotification, setStudent}) => {
  return (
    <Paper>
      <Grid container spacing={3} justifyContent="center" align="center" >
        <Grid item xs={12} sm={6}>
          <Hero />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Form login={login} setNotification={setNotification} setStudent={setStudent} />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Home