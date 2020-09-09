class movieItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
           <style>
              * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
               }
               :host {
                   display: block;
                   margin-bottom: 18px;
                   box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.3);
                   border-radius: 10px;
                   overflow: hidden;
               }
              
               .movie-image {
                   width: 100%;
                   max-height: 300px;
                   object-fit: cover;
                   object-position: center;
                   float: left;
                   width: 25%;
               }
              
               .movie-info {
                   padding: 24px;
                   float: right;
                   width: 75%;
               }
              
               .movie-info > h2 {
                   font-weight: lighter;
               }

               h4 {
                font-weight: 500;
                color: grey;
                margin-top: 10px;
               }
              
               .movie-info > p {
                   margin-top: 10px;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   display: -webkit-box;
                   -webkit-box-orient: vertical;
                   -webkit-line-clamp: 10; /* number of lines to show */
               }

           </style>
            <img class="movie-image" src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/${this._movie.poster_path}" alt="No Image">
            <div class="movie-info">
               <h2>${this._movie.title}</h2>
               <h4>${this._movie.release_date}</h4><br>
               <p>${this._movie.overview}</p>
            </div>`;
    }
}

customElements.define("movie-item", movieItem);