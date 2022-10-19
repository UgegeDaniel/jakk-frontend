export const handleAuth = async (e, values, functions, setStudent) => {
    const {  isLogin, credentials} = values
    const { login, signup, setNotification} = functions
    e.preventDefault();
    if (isLogin) {
        await login(setNotification, credentials, setStudent)
    }
    !isLogin && await signup(setNotification, credentials, setStudent)
    !isLogin && setNotification({ show: true, type: "success", msg: 'Congratualations Sign up Successfull !!!' })
    isLogin && setNotification({ show: true, type: "success", msg: 'Congratualations Login Successfull !!!' })
    return true
}

{/* <Route exact path="/checkout" element={student ?
    <div>
      <form style={{ margin: "20px auto", maxWidth: "500px" }}>
        <InputField show name="firstName" value={firstName} setCredentials={setpStackPaymentField} credentials={pStackPaymentField} label="First Name" InputProps={userInputProps} type="text" />
        <InputField show name="lastName" value={lastName} setCredentials={setpStackPaymentField} credentials={pStackPaymentField} label="Last Name" InputProps={userInputProps} type="text" />
        <InputField show name="email" value={sEmail} setCredentials={setpStackPaymentField} credentials={pStackPaymentField} label="Email" InputProps={emailInputProps} type="text" />
        <InputField show name="amount" value={sAmount} setCredentials={setpStackPaymentField} credentials={pStackPaymentField} label="Amount" InputProps={amontInputProps} type="number" />
        {/* <Button className={classes.btn} startIcon={<FaMoneyBillWave />} variant='contained' color="secondary" size="small" type="submit" onClick={(e) => payWithPaystack(e, PaystackPop, pStackPaymentField, setNotification)}>Pay With Paystack</Button> */}
    //     <Container>
    //       <Link to="/">
    //         <Button className={classes.mc} variant='contained' color="secondary" size="small" type="submit">Go to Dashboard</Button>
    //       </Link>
    //     </Container>
    //   </form>
    // </div>
    // : <Navigate to='/' />} /> */}