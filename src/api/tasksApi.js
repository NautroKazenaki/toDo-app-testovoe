import axios from 'axios'

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/todos"
})

export const tasksApi = {
    getTasks(page = 1, pageSize = 10) {
        return instance.get(`?page=${page}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}