import React, { Component } from 'react'
import Film from './Film'
import { apiMovie } from './../../api/apiMovie';
import Recherche from './Recherche';

export class Liste extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            array : [],
            boolean : true
        }
    }

    state = {
        isLoaded : false,
    }

    componentDidMount(){
        apiMovie.get("/discover/movie")
             .then(response => {
                 if(response.status === 200){
                 this.setState({
                    values: response.data.results,
                    isLoaded: true})
                }
             })
             .catch(error => console.log(error))
    }

    addFav = (movie) => {
        let movies = localStorage.getItem('movies');
        movies = JSON.parse(movies);
        const indice = movies.findIndex(m => m.id === movie.id)
        if(indice === -1){
            movies.push(movie)
            localStorage.setItem('movies', JSON.stringify(movies))
        }
    }

    removeFromFav = (id) =>{
        let movies = localStorage.getItem('movies');
        movies = JSON.parse(movies);
        const newMovies = movies.filter(m => m.id !== id)
        localStorage.setItem('movies', JSON.stringify(newMovies))
    }

    inFavoris = (id) => {
        let movies = localStorage.getItem('movies');
        movies = JSON.parse(movies);
        const indice = movies.findIndex(m => m.id === id)
        if(indice === -1){
            return false
        }else {
            return true
        }

    }

    rechercheFilm = (arraySearch) => {
        this.setState({
            values : arraySearch,
            boolean : false
        })
    }

    
    

    render() {
        if(!this.state.isLoaded) return <div className="loader"></div>
        return (
            <React.Fragment>
                <div className="container search">
                    <Recherche rechercheFilm={this.rechercheFilm}/>
                </div>
                <div className="films">
                    {this.state.values.map((value) => 
                        <Film
                        key={value.id}
                        title={value.title}
                        image={"https://image.tmdb.org/t/p/w500" + value.poster_path}
                        description={value.overview}
                        id={value.id}
                        movie={value}
                        add ={this.addFav}
                        infav = {this.inFavoris}
                        remove = {this.removeFromFav}
                        />
                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default Liste
