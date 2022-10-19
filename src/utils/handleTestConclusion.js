import { updateHistory } from '../api/auth'
export const handleSubmit = (setters, values, QUESTIONSTATES) => {
    const { setTimer } = setters
    const { timer, attempts, answers, testParams, student } = values
    const { email } = student
    const timeTaken = new Date().toISOString()
    if (timer.hour !== 0 || timer.minute !== 0 || timer.second !== 0) {
        setTimer({ hour: 0, minute: 0, second: 0 })
    }
    const marked = attempts.map((attempt, index) => {
        if (attempts[index].option === answers[index]) {
            return { number: attempt.number, correct: 'correct' }
        } else {
            return { number: attempt.number, wrong: 'wrong', correctAnswer: answers[index], userAnswer: attempts[index].option }
        }
    })
    const { subject } = testParams
    const correct = marked.filter((mark) => mark.correct)
    const wrong = marked.filter((mark) => mark.wrong)
    const percentage = ((marked?.correct?.length / 40) * 100).toFixed(2)
    const newData = { id: marked?.timeTaken, subject: marked?.subject, scores: percentage, timeTaken: marked?.timeTaken }
    updateHistory(email, newData)
    console.log(QUESTIONSTATES)
    return { correct, wrong, timeTaken, subject }
}

//{ id: marked?.timeTaken, subject: marked?.subject, scores: percentage, timeTaken: marked?.timeTaken }