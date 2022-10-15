export const handleTestStart = async (values, functions) => {
    const {navigate, testStart} = functions
    const {subject, year, testParams} = values 
    setTestParams({ subject: '', year: '', examtype: 'utme' })
    if (!subject) {
        //setNotification({ show: true, msg: 'Please pick a subject', type: "danger" })
        return
    } else if (!year) {
        //setNotification({ show: true, msg: 'Please pick a year', type: "danger" })
        return
    } else {
            testStart()
            navigate('/questions')
        } else {
            return
        }
    }
}
