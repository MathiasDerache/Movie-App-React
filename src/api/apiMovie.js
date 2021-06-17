import axios from "axios";

export const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})


const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWNmOTc5NjQ0ODRjMmQzNTdkMzlhOWVmNzJjZjdjMiIsInN1YiI6IjYwMmU2ZjY1NTVjMWY0MDAzZjA1ZTY4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZOUu1ZzL5DCuR8svTsAkys-XQW827vX7uSRBcHpflgM'


apiMovie.interceptors.request.use((request) => {
    request.headers['Authorization'] = `Bearer ${token}`
    return request
})