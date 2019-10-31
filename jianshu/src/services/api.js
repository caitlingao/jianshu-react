import axios from 'axios'

const API_ROOT = '/api/'
function callApi(api, method, schema = {}) {
    let config = {
        url: API_ROOT + api,
        method: method
    }

    if (schema.query) {
        // // parameter encoding to convert object to url query
        // const serialize = obj =>
        //     Object.keys(obj)
        //         .map(
        //             key =>
        //                 encodeURIComponent(key) +
        //                 '=' +
        //                 encodeURIComponent(obj[key])
        //         )
        //         .join('&')
        // config.url = `${config.url}?${serialize(schema.query)}`

        // ES6 convert object to url query
        const params = schema.query
        const query = Object.keys(params)
            .map(key => `${key}=${params[key]}`)
            .join('&')
        config.url = `${config.url}?${query}`
    }

    return axios(config)
        .then(response => {
            return response
        })
        .catch(error => {
            console.log(error)
        })
}

export const fetchHeaderList = url => callApi(url, 'get')
export const fetchHomeInfo = url => callApi(url, 'get')
export const fetchHomeMoreList = (url, query) => callApi(url, 'get', query)
export const fetchDetailInfo = (url, query) => callApi(url, 'get', query)
export const fetchLogin = (url, query) => callApi(url, 'get', query)
