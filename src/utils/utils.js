import axios from 'axios'

/**
 * API fetching generic method
 * @category utils
 * @see https://github.com/axios/axios
 * @param  {string} url url to fetch
 * @param  {string} method request method
 * @param  {object} data request body, only for POST, PUT, DELETE, PATCH
 * @param  {string} responseType type of data in the response
 * @param  {number} timeout in miliseconds
 * @param  {object} params url parameters to be sent with the request
 */
export const apiService = (url, method = 'GET', data = null, responseType = 'json', timeout = 0, params = null) => {
    url = url.replace(',', '%3A')

    return axios({
        method,
        url,
        data,
        responseType,
        timeout,
        params,
    })
}
