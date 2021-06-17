import React, { Component } from 'react'
import Film from '../Main/Film';
import '../Main/Main.css'

export class Favoris extends Component {


    state = {
        show : false,
        movies : JSON.parse(localStorage.getItem('movies'))
    }

    montrerDescription = () => {
        this.setState({
            show : !this.state.show
        })
    }

    cacherDescription = () => {
        this.setState({
            show : !this.state.show
        })
    }

    removeFromFav = (id) =>{
        let movies = localStorage.getItem('movies');
        movies = JSON.parse(movies);
        const newMovies = movies.filter(m => m.id !== id)
        localStorage.setItem('movies', JSON.stringify(newMovies))
        this.setState({
            movies : JSON.parse(localStorage.getItem('movies'))
        })
    }

    render() {

        return (
            <React.Fragment>
                <button type='button' className="btn back" onClick={() => this.props.history.goBack()}><i className="fas fa-arrow-left"></i></button>
                <h1 className='text-center mt-5'>My Favourites</h1>
                <div className="hr">
                    <hr/>
                </div>
            <div className="films">
                {this.state.movies.map((movie) => 
                    <Film
                    key={movie.id}
                    title={movie.title}
                    image={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                    description={movie.overview}
                    id={movie.id}
                    movie={movie}
                    remove = {this.removeFromFav}
                    favoris
                    />
                )}
            </div>
            </React.Fragment>
        )
    }
}

export default Favoris
