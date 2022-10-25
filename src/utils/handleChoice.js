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
            return attempt.option
        } else {
            return ''
        }
    })
}

export const handleChoice = (e, choiceValues) => {
    const { attemptedNumbers, questionIndex, attempts, setAttempts, setAttemptedNumbers, 
        setAttemptedAnswers, attemptedAnswers, selectedAnswers, setSelectedAnswers } = choiceValues
    const clicked = e.target.textContent.trim();
    const option = e.target.id
    setAttemptedNumbers([...attemptedNumbers, questionIndex + 1])
    setAttemptedAnswers([...attemptedAnswers, ...selectedAnswers])
    setSelectedAnswers([clicked])
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