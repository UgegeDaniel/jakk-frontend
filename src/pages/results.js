import { Paper, Container, Typography, Button, ButtonGroup } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useStyles } from '../components/styles'

const Results = ({ attempts, marked }) => {
  const { correct, wrong } = marked
  const percentage = ((correct?.length / 40) * 100).toFixed(2)
  const classes = useStyles();
  return (

  )
}
export default Results