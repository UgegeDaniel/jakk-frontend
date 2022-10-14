const options = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'AccessToken': process.env.ACCESS_TOKEN
    },
    method: "GET",
};

const baseUrl = 'https://questions.aloc.com.ng/api/v2/m?subject='
const subjectsUrl = 'https://questions.aloc.com.ng/api/metrics/subjects-available-for/2013'
export const fetchSubjects = async () => {
    try {
        const response = await (subjectsUrl, options)
        const { data } = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const fetchYears = async (subject) => {
    try {
        const response = await fetch(`${baseUrl}${subject}`, options)
        const { data } = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const fetchQuestions = async (subject = "chemistry", year = "2010", examType = "utme") => {
    try {
        const response = await fetch(`${baseUrl}${subject}&year=${year}&type=${examType}`, options)
        const { data } = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}
