export const isPresent = (items, i) => {
    if (items.length === 0) {
        return
    } else {
        return items.includes(i)
    }
}


export const previouslyClicked = (attempts, questionIndex) => {
    return attempts.map((attempt) => {
        if (attempt.number === questionIndex + 1) {
            return attempt.answer
        } else {
            return ''
        }
    })
}
export const handleChoice = (e, setters, values) => {
    const clicked = e.target.textContent;
    const option = e.currentTarget.id
    console.log(option)
    const { setSelectedAnswers, setAttemptedNumbers, setAttemptedAnswers, setAttempts } = setters
    const { attemptedNumbers, questionIndex, attemptedAnswers, selectedAnswers, attempts } = values
    setSelectedAnswers([clicked])
    setAttemptedNumbers([...attemptedNumbers, questionIndex + 1])
    setAttemptedAnswers([...attemptedAnswers, ...selectedAnswers])
    const attempt = { number: questionIndex + 1, answer: clicked, option }
    const attempted = isPresent(attemptedNumbers, questionIndex + 1)
    if (attempted) {
        const newAttempts = attempts.map((attempt) => {
            if (attempt.number === questionIndex + 1) {
                return { ...attempt, answer: clicked, option }
            } else {
                return attempt
            }
        })
        setAttempts(newAttempts)
    } else {
        setAttempts([...attempts, attempt])
    }
}

