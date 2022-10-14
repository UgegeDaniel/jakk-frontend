// import PaystackPop from '@paystack/inline.js'
import InputField from '../components/Form/InputField'
import { useState } from 'react'
import { Button, Container, InputAdornment } from '@material-ui/core'
import { FaEnvelope, FaMoneyBill, FaUser, FaMoneyBillWave } from 'react-icons/fa'
import { useStyles } from '../components/styles'
import { Link } from 'react-router-dom'
// import {payWithPaystack} from '../utils'
const Checkout = ({ setNotification }) => {
  const [pStackPaymentField, setpStackPaymentField] = useState({ firstName: '', lastName: "", email: '', amount: '' })
  const { firstName, lastName, email: sEmail, amount: sAmount } = pStackPaymentField
  const userInputProps = { startAdornment: (<InputAdornment position="start"><FaUser /></InputAdornment>), }
  const emailInputProps = { startAdornment: (<InputAdornment position="start"><FaEnvelope /></InputAdornment>), }
  const amontInputProps = { startAdornment: (<InputAdornment position="start"><FaMoneyBill /></InputAdornment>), }
  const classes = useStyles();
  return (<div>
    <form style={{ margin: "20px auto", maxWidth: "500px" }}>
      <InputField show name="firstName" value={firstName} setCredentials={setpStackPaymentField} credentials={pStackPaymentField} label="First Name" InputProps={userInputProps} type="text" />
      <InputField show name="lastName" value={lastName} setCredentials={setpStackPaymentField} credentials={pStackPaymentField} label="Last Name" InputProps={userInputProps} type="text" />
      <InputField show name="email" value={sEmail} setCredentials={setpStackPaymentField} credentials={pStackPaymentField} label="Email" InputProps={emailInputProps} type="text" />
      <InputField show name="amount" value={sAmount} setCredentials={setpStackPaymentField} credentials={pStackPaymentField} label="Amount" InputProps={amontInputProps} type="number" />
      {/* <Button className={classes.btn} startIcon={<FaMoneyBillWave />} variant='contained' color="secondary" size="small" type="submit" onClick={(e) => payWithPaystack(e, PaystackPop, pStackPaymentField, setNotification)}>Pay With Paystack</Button> */}
      <Container>
        <Link to="/">
          <Button className={classes.mc} variant='contained' color="secondary" size="small" type="submit">Go to Dashboard</Button>
        </Link>
      </Container>
    </form>
  </div>
  )
}
export default Checkout