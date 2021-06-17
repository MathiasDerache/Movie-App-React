import React, { Component } from 'react'

export class Detail extends Component {

    constructor(props){
        super(props)
        this.state = {
            array : []
        }
    }

    componentDidMount(){
        let array = JSON.parse(localStorage.getItem('film')) || []
        this.setState({
            array : array
        })
    }

    render() {
        return (
            <React.Fragment>
                <button type='button' className="btn back" onClick={() => this.props.history.goBack()}><i className="fas fa-arrow-left"></i></button>
                <div className="container pageDetail col-12">
                    <div className="poster col-12 col-md-12 col-lg-6 col-xl-6 text-center">
                    <img src={"https://image.tmdb.org/t/p/w500" + this.state.array.poster_path} alt="poster" className="posterDetail"/>
                    </div>
                    <div className="informationsDetail col-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="infoDetail">
                            <h1 className="text-center">Title :</h1>
                            {this.state.array.title}
                        </div>
                        <div className="infoDetail">
                            <h1 className="text-center">Overview :</h1>
                            {this.state.array.overview}
                        </div>
                        <div className="infoDetail">
                            <h1 className="text-center">Release Date :</h1>
                            {this.state.array.release_date}
                        </div>
                        <div className="infoDetail">
                            <h1 className="text-center">Note :</h1>
                            {this.state.array.vote_average} / 10
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Detail
