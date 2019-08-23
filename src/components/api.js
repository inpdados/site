const local = true
const host = local ? 'http://localhost:9000' : 'https://api.inpd.com.br'

export function resolve(url) {
    const args = Array.prototype.slice.call(arguments);
    const path = args.join("/")
    return `${host}${path}`
}

export function get(url) {
    return exec(url, 'GET')
}

export function post(url, body) {
    return exec(url, 'POST', body)
}

export function put(url, body) {
    return exec(url, 'PUT', body)
}

export function del(url, body) {
    return exec(url, 'DELETE', body)
}

export function exec(url, method, body) {
    const params = {
        method      : method,
        cache       : 'no-cache',
        credentials : 'include'
    }

    if(body && (method === 'PUT' || method === 'POST')) {
        params.headers = { 'Content-Type': 'application/json' }
        params.body    = JSON.stringify(body)
    }

    return fetch(resolve(url), params)
}

export function toJsonIf200(res) {
    if(res.status === 200) {
        return res.json()
    } else {
        return Promise.reject(res)
    }
}

export function toTextIf200(res) {
    if(res.status === 200) {
        return res.text()
    } else {
        return Promise.reject(res)
    }
}