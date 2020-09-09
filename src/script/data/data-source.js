class DataSource {
    
   static searchmovie(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}&language=en&api_key=d5d8528cea01d332c2f2acbd5df30ad7`)
        .then(response => {
            return response.json();
        })
        .then(respon => {
            if(respon.results) {
                return Promise.resolve(respon.results);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }
}

export default DataSource;