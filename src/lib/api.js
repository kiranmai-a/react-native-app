class Api {
    static headersWithOutSession() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'dataType': 'json'
        }
    }

    static post(route, params) {
        console.log('in post')
        return this.xhr(route, params, 'POST',  this.headersWithOutSession())
    }

    static xhr(url, params, verb, headers) {
        let options = Object.assign({method: verb}, params ? {body: JSON.stringify(params)} : null);
        options.headers = headers
        return fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                return data;
            }).catch((error) => {
                throw error
            });
    }
}

export default Api