class Api {
    static headersWithOutSession() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'dataType': 'json'
        }
    }

    static headers() {
        return {
            ...this.headersWithOutSession(),
        }
    }

    static get(route, headers) {
        return this.xhr(route, null, 'GET', headers ? headers : this.headers());
    }

    static post(route, params) {
        console.log('in post')
        return this.xhr(route, params, 'POST',  this.headersWithOutSession())
    }

    static xhr(url, params, verb, headers) {
        console.log(url)
        let options = Object.assign({method: verb}, params ? {body: JSON.stringify(params)} : null);
        options.headers = headers
        return fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                console.log("data",data)
                return data;
            }).catch((error) => {
            console.log(error)
                throw error
            });
    }
}

export default Api