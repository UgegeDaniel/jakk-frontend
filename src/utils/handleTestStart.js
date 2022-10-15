export const handleTestStart = async (values, functions) => {
    const {setNotification, setTestParams, setTimer, fetchQuestions, setQuestions, navigate} = functions
    const {subject, year, testParams} = values 
    setTestParams({ subject: '', year: '', examtype: 'utme' })
    if (!subject) {
        setNotification({ show: true, msg: 'Please pick a subject', type: "danger" })
        return
    } else if (!year) {
        setNotification({ show: true, msg: 'Please pick a year', type: "danger" })
        return
    } else {
        setTimer({ hour: 2, minute: 0, second: 0 })
        const data = await fetchQuestions(testParams)
        if (data?.length > 0) {
            setQuestions(data)
            navigate('/questions')
        } else {
            return
        }
    }
}
