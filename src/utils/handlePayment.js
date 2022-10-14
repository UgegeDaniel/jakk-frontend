export const payWithPaystack = (e, PaystackPop, credentials, setNotification) => {
    e.preventDault();
    const { amount, email, firstName, lastName } = credentials
    const paystack = new PaystackPop();
    paystack.newTransaction({
        key: process.env.PUBLIC_PAYSTACK_KEY,
        amount: amount * 100,
        email,
        firstName,
        lastName,
        onSuccess(transaction) {
            let msg = `Payment Complete Refeference: ${transaction.reference}`
            setNotification({ show: true, msg, type: "Success" })
        },
        onCancel() {
            setNotification({ show: true, msg: "Transaction Cancelled", type: "danger" })
        }
    })
}