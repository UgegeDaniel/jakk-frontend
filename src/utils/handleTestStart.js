export const handleTestStart =  (values, functions) => {
    const {navigate, testStart} = functions
    const {subject, year, testParams} = values 
    if (!subject) {
        return
    } else if (!year) {
        return
    } else {
        testStart()
        navigate('/questions')
    }
}
