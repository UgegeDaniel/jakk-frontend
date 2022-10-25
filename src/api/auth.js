const options = {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
};

const baseUrl = 'http://localhost:8080'

export const login = async (credentials) => {
    const { email, password } = credentials
    const response = await fetch(`${baseUrl}/student/login`, { ...options, body: JSON.stringify({ email, password }) })
    const data = await response.json();
    if (response.ok) {
        localStorage.setItem('student', JSON.stringify(data))
        return { msg: 'success', data }
    } else {
        const error = data.error
        return { msg: 'error', error }
    }
}

export const signup = async (credentials) => {
    const { email, password, userName } = credentials
    const response = await fetch(`${baseUrl}/student/signup`, { ...options, body: JSON.stringify({ email, password, userName }) })
    const data = await response.json();
    if (response.ok) {
        localStorage.setItem('student', JSON.stringify(data))
        return { msg: 'success', data }
    } else {
        const error = data.error
        return { msg: 'error', error }
    }
}

export const updateHistory = async (email, newData) => {
    const response = await fetch(`${baseUrl}/student/updateHistory`, { ...options, body: JSON.stringify({ email, newData }) })
    const data  = await response.json();
    if (!response.ok) {
       return
    }
    if (response.ok) {
        localStorage.setItem('student', JSON.stringify(data))
        return
    }
}
export const logout = (setStudent) => {
    localStorage.removeItem('student')
    setStudent(null);
    return
}
