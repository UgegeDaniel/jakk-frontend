const options = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'AccessToken': process.env.ACCESS_TOKEN
    },
    method: "GET",
};
const baseUrl = 'https://questions.aloc.com.ng/api'
const questionsUrl = `${baseUrl}/v2/q/40?`
//const subjectsUrl = `${baseUrl}/metrics/list-subjects`
const yearsUrl = `${baseUrl}/metrics/years-available-for`
export const subjects = []
//export const fetchSubjects = async () => {
    //try {
        //const response = await fetch(subjectsUrl)
        //const { data } = await response.json()
        //console.log(data)
        //return data
    //} catch (error) {
        //console.log(error)
    //}
//}

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
    try {
        const response = await fetch(`${questionsUrl}subject=${subject}&year={year}&type=${examType}`, options)
        const { data } = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}
