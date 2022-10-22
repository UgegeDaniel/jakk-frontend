const options = {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
};

const baseUrl = 'https://jakk-backend.herokuapp.com'

export const login = async (setNotification, credentials, setStudent) => {
    const { email, password } = credentials
    const response = await fetch(`${baseUrl}/student/login`, { ...options, body: JSON.stringify({ email, password }) })
    const data  = await response.json();
    if (!response.ok) {
        setNotification({ show: true, msg: data, type: "danger" })
        return
    }
    if (response.ok) {
        localStorage.setItem('student', JSON.stringify(data))
    const login = JSON.parse(localStorage.getItem('student'))
    if (login) {
      setStudent(login)
    }
        return
    }
}

export const signup = async (setNotification, credentials, setStudent) => {
    const { email, password, userName } = credentials
    const response = await fetch(`${baseUrl}/student/signup`, { ...options, body: JSON.stringify({ email, password, userName }) })
    const  data  = await response.json();
    if (!response.ok) {
        setNotification({ show: true, msg: data, type: "danger" })
        return
    }
    if (response.ok) {
        localStorage.setItem('student', JSON.stringify(data))
        const login = JSON.parse(localStorage.getItem('student'))
        if (login) {
           setStudent(login)
        }
        return
     }
}

export const updateHistory = async (email, newData) => {
    const response = await fetch(`${baseUrl}/student/updateHistory`, { ...options, body: JSON.stringify({ email, newData }) })
    const { data } = await response.json();
    if (!response.ok) {
        console.log(data)
        return
    }
    if (response.ok) {
        console.log(data)
        return
    }
}
export const logout = (setStudent) => {
    localStorage.removeItem('student')
    setStudent(null);
    return
}
