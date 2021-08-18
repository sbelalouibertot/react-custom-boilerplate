import axios from 'axios'
import { apiService } from '../../utils/utils'

jest.mock('axios')

afterEach(() => {
    jest.clearAllMocks()
})

describe('apiService', () => {
    it('should call axios method with specified parameters', () => {
        const url = 'https://example.com'
        const method = 'POST'
        const data = { data: 'data' }
        const responseType = 'json'
        const timeout = 3000
        const params = { first: 10, offset: 20 }
        apiService(url, method, data, responseType, timeout, params)
        expect(axios).toHaveBeenCalledWith({ method, url, data, responseType, timeout, params })
    })

    it('should call axios method using default params', () => {
        const url = 'https://example.com'
        apiService(url)
        expect(axios).toHaveBeenCalledWith({
            method: 'GET',
            url,
            data: null,
            responseType: 'json',
            timeout: 0,
            params: null,
        })
    })

    it('should resolve if axios resolve', async () => {
        const axiosResponse = { data: ['foo', 'bar'] }
        axios.mockResolvedValue(axiosResponse)
        const url = 'https://example.com'
        await expect(apiService(url)).resolves.toBe(axiosResponse)
    })

    it('should reject if axios reject', async () => {
        const axiosError = { message: 'Internal Error', code: 500 }
        axios.mockRejectedValue(axiosError)
        const url = 'https://example.com'
        await expect(apiService(url)).rejects.toBe(axiosError)
    })
})
