export const nextQuestion = (questionIndex, size) => {
    if (questionIndex + 1 > size - 1) {
        return questionIndex
    }
    return questionIndex + 1
}

export const previousQuestion = (questionIndex, size) => {
    if (questionIndex - 1 < 0) {
        return questionIndex
    }
    return questionIndex - 1
}