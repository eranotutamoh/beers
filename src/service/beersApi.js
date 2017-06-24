function getBeers(query, cb) {
    console.log(query);
    return fetch(`https://api.punkapi.com/v2/beers?${query}`, {
        accept: 'application/json',
    }).then(checkStatus)
        .then(cb);
}


function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response.json();
    } else {
        console.log('API error:', response)
        return {Error: `We're having a little trouble accessing your beers at the moment, please try again later.`};
    }
}

const API = { getBeers  };
export default API;