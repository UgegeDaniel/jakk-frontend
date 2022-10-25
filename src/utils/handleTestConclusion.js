import { updateHistory } from '../api/auth'
export const handleSubmit = async (values) => {
    const { attempts, answers, testParams, student, setSubmitted, setMarked } = values
    const { email } = student
    const { subject } = testParams
    const timeTaken = new Date().toISOString()
    const marked = attempts.map((attempt, index) => {
        if (attempts[index].option === answers[index]) {
            return { number: attempt.number, correct: 'correct' }
        } else {
            return { number: attempt.number, wrong: 'wrong', correctAnswer: answers[index], userAnswer: attempts[index].option }
        }
    })
    const correct = marked.filter((mark) => mark.correct)
    // const wrong = marked.filter((mark) => mark.wrong)
    const percentage = ((correct.length / 40) * 100).toFixed(2)
    const newData = { id: timeTaken, subject: subject, scores: percentage, timeTaken: timeTaken }
    await updateHistory(email, newData)
    setSubmitted(true)
    setMarked(marked)
}