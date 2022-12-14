const options = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'AccessToken': `QB-d58fe1605f0318db11c2`,
    },
    method: "GET",
};
const baseUrl = 'https://questions.aloc.com.ng/api'
const questionsUrl = `${baseUrl}/v2/m?`
const subjectsUrl = `${baseUrl}/metrics/list-subjects`
const yearsUrl = `${baseUrl}/metrics/years-available-for`

export const fetchSubjects = async () => {
    try {
        const response = await fetch(subjectsUrl)
        const { data } = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const fetchYears = async (subject) => {
    try {
        const response = await fetch(`${yearsUrl}/${subject}`, options)
        const { data } = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const fetchQuestions = async (subject, year, examType) => {
    const url = `${questionsUrl}subject=${subject}&year=${year}&type=utme`
    try {
        const response = await fetch(url, options)
        const {data}  = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
