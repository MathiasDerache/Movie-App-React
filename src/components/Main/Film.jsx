import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Film extends Component {


    state = {
        show : false,
        movie : this.props.movie,
        fav : true
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

    detail = (movie) => {
        localStorage.setItem('film', JSON.stringify(movie))
    }

    render() {
        return (
            <React.Fragment>
                    <div className="film" onMouseEnter={this.montrerDescription} onMouseLeave={this.cacherDescription}>
                        {this.state.show ? (
                            <div id='description'>
                                <Link to={{pathname: '/detail',
                                        }}>
                                    {this.props.description}
                                    <div className="toDetail" onClick={() => {this.detail(this.props.movie)}}></div>
                                </Link>
                                {this.props.favoris ||this.props.infav(this.state.movie.id) ? (
                                    <button className="fav" onClick={() => {this.props.remove(this.state.movie.id)}}><i className="fas fa-times"></i></button>  
                                ) : (
                                    <button className="fav" onClick={() => {this.props.add(this.state.movie)}}><i className="fas fa-heart"></i></button>
                                )}
                            </div>
                            
                        ) : null }

                        <div className="filmImage">
                            <img src={this.props.image} alt=""  />
                        </div>
                        <div className="filmTitle">
                        {this.props.title}
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}

export default Film
