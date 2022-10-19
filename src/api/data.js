const options = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'AccessToken': 'ALOC-0cf7527417b13cc77fdd',
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
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const fetchQuestions = async (subject = "chemistry", year = "2010", examType = "utme") => {
    const url = `https://questions.aloc.com.ng/api/v2/q/21?subject=${subject}&year=${year}&type=${examType}`
    try {
        const response = await fetch(url, options)
        const {data}  = await response.json()
        console.log({data, url})
        return data
    } catch (error) {
        console.log(error)
    }
}
