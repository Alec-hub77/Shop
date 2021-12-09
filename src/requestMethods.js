import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWY1Y2M5MGEyNTE3NDk2M2JmNmZkNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTAzODUwMCwiZXhwIjoxNjM5MTI0OTAwfQ.FpIiGL3A8rGebpgUQY8Si77npeicad4zN6inwjeFoPc'

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseUrl: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})