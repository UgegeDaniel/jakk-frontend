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